import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/features/user/user';
import axiosClient from '../../utilities/axios';
import { validateEmail } from '../../utilities/helpers';

// check the valid bangladeshi number
export function validateBangladeshiPhoneNumber(phoneNumber) {
  const regex = /^01[0-9]{9}$/;
  return regex.test(phoneNumber);
}

const EmailVerifyCodeFrom = ({
  userInfo,
  setUserInfo,
  error,
  setError,
  setStep,
}) => {
  const [count, setCount] = useState(0);
  const timerRef = useRef();
  const [verifyCode, setVerifyCode] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

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

  // Handle Register
  function handleRegister(e) {
    e.preventDefault();
    try {
      const isValidVerifyCode = validateFourDigitNumber(Number(verifyCode));
      const isValidPhone = validateBangladeshiPhoneNumber(userInfo.phone);

      if (isValidVerifyCode && isValidPhone) {
        axiosClient
          .post(`/auth/v1/verify/email`, {
            ...userInfo,
            verifyCode,
          })
          .then(({ data }) => {
            console.log(data);
            dispatch(login(data.user));
            return router.push('/dashboard');
          })
          .catch(({ response }) => {
            return console.log(response);
            const data = response.data;
            if (data.status !== 'error') console.log(data);
            setError({ ...error, ...data });
          });
      } else {
        setError({ ...error, emailOTP: 'Invalid OTP' });
      }
    } catch (error) {
      console.log(error);
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

  function isStrongPassword(password) {
    if (!password) {
      setError({ ...error, password: 'Password is required!' });
      return false;
    }

    // Check for minimum length of 8 characters
    if (password.length < 8) {
      setError({ ...error, password: 'Password needs to be 8 characters' });
      return false;
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      setError({
        ...error,
        password: 'Password must have at least one lowercase',
      });
      return false;
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      setError({
        ...error,
        password: 'Password must have at least one uppercase',
      });
      return false;
    }

    // Check for at least one number
    if (!/\d/.test(password)) {
      setError({
        ...error,
        password: 'Password must have at least one Number',
      });
      return false;
    }

    // Check for at least one special character
    if (!/[~`!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/.test(password)) {
      setError({
        ...error,
        password: 'Password must have at least one special character',
      });
      return false;
    }

    // If all checks pass, return true
    setError({ ...error, password: '' });
    return true;
  }

  // data validator
  function validateData({
    firstName,
    lastName,
    email,
    password,
    gender,
    confirmPassword,
    username,
    referredBy,
  }) {
    let status = true;
    if (!firstName) {
      setError({ ...error, firstName: 'First name is required!' });
      status = false;
    }

    if (!lastName) {
      setError({ ...error, lastName: 'Last name is required!' });
      status = false;
    }

    if (!email) {
      setError({ ...error, email: 'Email is required!' });
      status = false;
    } else {
      if (!validateEmail(email)) {
        setError({ ...error, email: 'Email is not valid' });
        status = false;
      }
    }

    if (!isStrongPassword(password)) {
      status = false;
    }

    if (password !== confirmPassword) {
      setError({ ...error, confirmPassword: "Password doesn't match" });
      status = false;
    }

    if (!gender) {
      setError({ ...error, gender: 'Gender is required!' });
      status = false;
    }

    if (!username) {
      setError({ ...error, username: 'Username is required!' });
      status = false;
    } else if (username.length < 3) {
      setError({
        ...error,
        username: 'Username must be at least 4 charectar!',
      });
      status = false;
    }

    return status;
  }

  async function handleResend(e) {
    e.preventDefault();

    const isValidated = validateData(userInfo);

    if (isValidated) {
      axiosClient
        .post(`/auth/v1/send/email`, {
          ...userInfo,
        })
        .then(({ data }) => {
          if (data.status === 'success') {
            setUserInfo({ ...userInfo, ...data.userInfo });
            setCount(30);
            timerRef.current = setInterval(() => {
              setCount((prevCount) => prevCount - 1);
            }, 1000);
            setError({});
          }
        })
        .catch(({ response: { data } }) => {
          if (data.status === 'error') {
            setError({ ...error, emailOTP: data.email || data.common });
          }
        });
    }
  }

  return (
    <div className="login_container">
      {/* <!-- left side --> */}
      <div className="img">
        <img src="/assets/images/auth/email-verification.png" />
      </div>

      {/* <!-- right side --> */}
      <div className="login-content">
        <form onSubmit={handleRegister} className="form">
          <div className="title">
            <h2>ই-মেইল ভেরিফিকেশন</h2>
          </div>

          <div className="form_group">
            <label htmlFor="">ই-মেইলে পাঠানো ৪ ডিজিটের কোডটি লিখুন</label>
            <div className="input_container">
              <div className="input">
                <input
                  maxLength="4"
                  placeholder="এখানে কোড দিন"
                  className="input"
                  type="number"
                  value={verifyCode}
                  onChange={(e) => {
                    setError({ ...error, emailOTP: '' });
                    setVerifyCode(e.target.value.trim());
                  }}
                  name="emailOTP"
                />
              </div>
            </div>
            {error.emailOTP && <div className="errorMsg">{error.emailOTP}</div>}
          </div>

          <button type="submit" className="common_btn otp-btn">
            ভেরিফাই & সাইন-ইন
          </button>

          <div className="resend_otp">
            <p>কোনো কোড পাননি?</p>
            {count > 0 ? (
              <p>
                আবার অনুরোধ জানাতে অপেক্ষা করুন
                <span>{count} সেকেন্ড</span>
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
            <p>ই-মেইল ভুল হয়নি তো?</p>
            <div className="edit_number">
              <span className="edit_userinfo">{userInfo.email}</span>
              <span
                onClick={() => {
                  setStep('EMAIL');
                }}
                style={{ cursor: 'pointer', color: '#e91e63' }}
              >
                <AiFillEdit /> ই-মেইল পরিবর্তন করুন
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailVerifyCodeFrom;
