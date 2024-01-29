import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import axiosClient from '../../utilities/axios';

const SMSOTP = ({
  userInfo,
  setUserInfo,
  setError,
  error,
  loading,
  setLoading,
  setStep,
}) => {
  // states
  const [SMSOTP, setSMSOTP] = useState('');
  const [count, setCount] = useState(100);
  const timerRef = useRef();

  // Handle Register
  function handleResend(e) {
    const isValidNumber = validateBangladeshiPhoneNumber(userInfo.phone);

    if (isValidNumber) {
      axiosClient
        .post(`/auth/v1/send/sms`, {
          phone: userInfo.phone,
        })
        .then(({ data: { userInfo: info } }) => {
          setUserInfo({ ...userInfo, id: info.id });
          setCount(30);
          timerRef.current = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
      return;
    } else {
      setError({ ...error, phone: 'Invalid Phone Number' });
    }
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (count <= 0) {
      clearInterval(timerRef.current);
    }
  }, [count]);

  // check the valid bangladeshi number
  function validateFourDigitNumber(num) {
    if (typeof num === 'number') {
      num = num.toString();
    }
    if (typeof num !== 'string') {
      return false;
    }
    if (num.length !== 4) {
      return false;
    }
    if (!/^\d+$/.test(num)) {
      return false;
    }
    return true;
  }

  // check the valid bangladeshi number
  function validateBangladeshiPhoneNumber(phoneNumber) {
    const regex = /^01[0-9]{9}$/;
    return regex.test(phoneNumber);
  }

  // Handle Register
  async function handleRegister(e) {
    e.preventDefault();

    const isValidOTP = validateFourDigitNumber(Number(SMSOTP));
    const isValidPhone = validateBangladeshiPhoneNumber(userInfo.phone);

    if (isValidOTP && isValidPhone) {
      setLoading(true);
      axios
        .post(`${window.location.origin}/api/auth/v1/verify/otp`, {
          ...userInfo,
          OTP: SMSOTP,
        })
        .then(({ data }) => {
          if (data.status === 'success') {
            setStep('EMAIL');
          }
          console.log(data);
        })
        .catch(({ response: { data } }) => {
          if (data.status === 'error') {
            setError({ ...error, OTP: data.message });
          }
          console.log(data);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setError({ ...error, OTP: 'Invalid OTP' });
    }
  }

  function handleSMSOTP(e) {
    const val = e.target.value;
    setSMSOTP(val);
    setError({});
  }

  return (
    <div className="login_container">
      {/* <!-- left side --> */}
      <div className="img">
        <img src="/assets/images/auth/Mobile login-bro.png" />
      </div>

      {/* <!-- right side --> */}
      <div className="login-content">
        <form onSubmit={handleRegister} className="form">
          <div className="title">
            <h2>OTP ভেরিফিকেশন</h2>
          </div>

          <div className="form_group">
            <label htmlFor="">মোবাইলে পাঠানো ৪ ডিজিটের কোডটি লিখুন</label>
            <div className="input_container">
              <div className="input">
                <input
                  maxLength="4"
                  placeholder="এখানে কোড দিন"
                  className="input"
                  value={SMSOTP}
                  onChange={handleSMSOTP}
                  type="number"
                  name="SMSOTP"
                />
              </div>
            </div>
          </div>
          {error.OTP && <div className="errorMsg">{error.OTP || ''}</div>}

          <button type="submit" className="common_btn otp-btn">
            {loading ? (
              <div
                className="spinner-border spinner-border-md"
                role="status"
              ></div>
            ) : (
              'এগিয়ে যান'
            )}
          </button>

          <div className="resend_otp">
            <p>কোনো কোড পাননি?</p>
            {count > 0 ? (
              <p>
                আবার অনুরোধ জানাতে অপেক্ষা করুন
                <span> {count} সেকেন্ড</span>
              </p>
            ) : (
              <button
                onClick={handleResend}
                type="button"
                className="resend_btn"
              >
                পুনরায় OTP পাঠান
              </button>
            )}
          </div>

          <div className="forget_number wrong_number_box">
            <p>মোবাইল নম্বর ভুল হয়নি তো?</p>
            <div className="edit_number">
              <span className="info">{userInfo.phone}</span>
              <span
                onClick={() => {
                  setStep('PHONE');
                }}
                style={{ cursor: 'pointer', color: '#e91e63' }}
              >
                <AiFillEdit /> নম্বর পরিবর্তন করুন
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SMSOTP;
