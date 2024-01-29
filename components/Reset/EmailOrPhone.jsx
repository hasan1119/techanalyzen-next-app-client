import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { STEPS } from '../../pages/reset';
import axiosClient from '../../utilities/axios';
import { validateBangladeshiPhoneNumber } from '../../utilities/helpers';

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
  const timerRef = useRef();
  const router = useRouter();
  const timerDurationRef = useRef();

  function isEmailValid(email) {
    // Regular expression pattern for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    return emailPattern.test(email);
  }

  function emailOrPhoneChecker(emailOrPhone) {
    const email = isEmailValid(emailOrPhone);
    const phone = validateBangladeshiPhoneNumber(emailOrPhone);

    if (email) return 'EMAIL';
    if (phone) return 'PHONE';
    return 'INVALID';
  }

  // handle input change
  function handleInputChange(e) {
    const phoneOrEmail = e.target.value.trim();

    const type = emailOrPhoneChecker(phoneOrEmail);

    setUserInfo({
      ...userInfo,
      type,
      phoneOrEmail,
    });

    if (!phoneOrEmail) {
      return setError({});
    }

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (type === 'INVALID') {
        setError({
          ...error,
          phoneOrEmail: 'আপনার ইমেইল/ফোন সঠিক নয়',
        });
      } else {
        setError({});
      }
    }, 800);
  }

  // handleResetPassword
  function handleResetPassword(e) {
    e.preventDefault();
    if (userInfo.type !== 'INVALID') {
      setLoading(true);
      setError({});
      axiosClient
        .post('/auth/v1/reset', userInfo)
        .then(({ data }) => {
          setError({});
          setStep(STEPS.OTPFORM);
        })
        .catch(({ response }) => {
          const data = response && response.data;
          if (data && data.message) {
            setError({
              phoneOrEmail: data.message,
            });
          } else if (data && data.status === 'waiting') {
            timerDurationRef.current = data.duration;

            console.log(timerDurationRef.current);
            timerRef.current = setInterval(() => {
              if (timerDurationRef.current < 1) {
                clearInterval(timerRef.current);
                setError({});
              } else {
                timerDurationRef.current = timerDurationRef.current - 1;
                setError({
                  ...error,
                  phoneOrEmail: `Please wait ${timerDurationRef.current} seconds`,
                });
              }
            }, 1000);
          }
        })
        .finally(() => setLoading(false));
    } else {
      console.log('invalid', userInfo);
    }
  }

  return (
    <>
      <form onSubmit={handleResetPassword} className="w-100">
        <div className="title">
          <h2>রিসেট পাসওয়ার্ড</h2>
        </div>

        {/* <!-- email --> */}
        <div className="form_group mt_3">
          <label>মোবাইল অথবা ই-মেইল</label>
          <div className="input_container">
            <div className="input">
              <input
                type="text"
                placeholder="আপনার মোবাইল নম্বর অথবা ই-মেইল দিন"
                onChange={handleInputChange}
                value={userInfo.phoneOrEmail}
                name="phoneOrEmail"
              />
            </div>
          </div>
          {error.phoneOrEmail && (
            <div className="errorMsg">{error.phoneOrEmail}</div>
          )}
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
      </form>
    </>
  );
};

export default ResetFrom;
