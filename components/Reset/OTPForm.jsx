import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { STEPS } from '../../pages/reset';
import axiosClient from '../../utilities/axios';

const ResetFrom = ({
  userInfo,
  setUserInfo,
  error,
  setError,
  loading,
  setLoading,
  setStep,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [SMSOTP, setSMSOTP] = useState('');
  const [count, setCount] = useState(60);
  const timerRef = useRef();

  // Handle Register
  function handleResend(e) {
    setCount(60);
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    setError({});
    axiosClient
      .post('/auth/v1/reset', userInfo)
      .then(({ data }) => {
        setError({});
      })
      .catch(({ response }) => {
        const data = response && response.data;
        if (data && data.message) {
          setError({
            phoneOrEmail: message,
          });
        } else {
          console.log(data);
        }
      })
      .finally(() => setLoading(false));
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

  function handleSMSOTP(e) {
    const val = e.target.value;
    setSMSOTP(val);
    setError({});
  }

  // handle input change
  function handleInputChange(e) {
    const newUserInfo = { ...userInfo };
    setError({});
    const name = e.target.name;
    const val = e.target.value.trim();
    newUserInfo[name] = val;
    setUserInfo(newUserInfo);
  }

  // handleOTPValidate

  function handleOTPValidate(e) {
    e.preventDefault();
    setError({});
    axiosClient
      .post('/auth/v1/verifyResetOTP', userInfo)
      .then(({ data }) => {
        if (data.status === 'OK') {
          setStep(STEPS.CREATEPASSWORD);
        }
      })
      .catch(({ response }) => {
        const data = response && response.data;
        setError({
          OTP: data.message,
        });
      });
  }

  return (
    <>
      <form onSubmit={handleOTPValidate} className="w-100" action="index.html">
        <div className="title">
          <h2>রিসেট পাসওয়ার্ড</h2>
        </div>

        {/* <!-- email --> */}
        <div className="form_group mt_3">
          <label>
            {userInfo.type === 'PHONE'
              ? 'মোবাইলে পাঠানো ৪ ডিজিটের কোডটি লিখুন'
              : ' ই-মেইলে পাঠানো ৪ ডিজিটের কোডটি লিখুন'}
          </label>
          <div className="input_container">
            <div className="input">
              <input
                maxLength="4"
                placeholder="এখানে কোড দিন"
                className="input"
                value={userInfo.OTP}
                onChange={handleInputChange}
                type="text"
                name="OTP"
              />
            </div>
          </div>
          {error.OTP && <div className="errorMsg">{error.OTP || ''}</div>}
        </div>

        <button type="submit" className="common_btn">
          {loading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
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
            <button onClick={handleResend} type="button" className="resend_btn">
              পুনরায় OTP পাঠান
            </button>
          )}
        </div>

        <div className="forget_number wrong_number_box">
          <p>
            {userInfo.type === 'PHONE'
              ? 'মোবাইল নাম্বার ভুল হয়নি তো?'
              : 'ই-মেইল ভুল হয়নি তো?'}
          </p>
          <div className="edit_number">
            <span className="info">{userInfo.phoneOrEmail}</span>
            <span
              onClick={() => {
                setStep('EmailOrPhone');
              }}
              style={{ cursor: 'pointer', color: '#e91e63' }}
            >
              <AiFillEdit />
              পরিবর্তন করুন
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default ResetFrom;
