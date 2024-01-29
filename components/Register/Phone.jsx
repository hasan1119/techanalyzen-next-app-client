import Link from 'next/link';
import React, { useRef } from 'react';
import axiosClient from '../../utilities/axios';
import { validateBangladeshiPhoneNumber } from '../../utilities/helpers';

const Phone = ({
  setStep,
  setUserInfo,
  userInfo,
  device,
  error,
  loading,
  setLoading,
  setError,
}) => {
  // states

  const timerRef = useRef();
  const timerDurationRef = useRef();

  // Handle Register
  async function handleRegister(e) {
    e.preventDefault();
    const isValidNumber = validateBangladeshiPhoneNumber(userInfo.phone);

    if (isValidNumber) {
      setLoading(true);
      await axiosClient
        .post(`/auth/v1/send/sms`, {
          phone: userInfo.phone,
        })
        .then(({ data }) => {
          console.log(data);
          setUserInfo({ ...userInfo, ...data.userInfo });
          setStep('SMS_OTP');
        })
        .catch(({ response }) => {
          const { data } = response;

          if (data.status === 'waiting') {
            timerDurationRef.current = data.duration;
            timerRef.current = setInterval(() => {
              if (timerDurationRef.current < 1) {
                clearInterval(timerRef.current);
                setError({
                  ...error,
                  phone: '',
                });
              } else {
                timerDurationRef.current = timerDurationRef.current - 1;
                setError({
                  ...error,
                  phone: `Please wait ${timerDurationRef.current} seconds`,
                });
              }
            }, 1000);
          } else if (data.status === 'exist') {
            setError({
              ...error,
              phone: 'User already exist with the number! please login',
            });
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setError({ ...error, phone: 'Invalid Phone Number' });
    }
  }

  const checkNumber = (number) => {
    let typingTimer;
    const doneTypingInterval = 800;
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      const isValidNumber = validateBangladeshiPhoneNumber(number);
      if (!isValidNumber) {
        setError({ ...error, phone: 'Phone number is not valid' });
      } else {
        setError({ ...error, phone: '' });
      }
    }, doneTypingInterval);
  };

  function handlePhoneInput(e) {
    const val = e.target.value;
    setUserInfo((prevState) => ({
      ...prevState,
      phone: val,
    }));
    setError({});
    checkNumber(val);
  }

  return (
    <div className="login_container">
      {/* <!-- left side --> */}
      <div className="img">
        <img src="/assets/images/auth/bg.svg" />
      </div>

      {/* <!-- right side --> */}
      <div className="login-content">
        <form onSubmit={handleRegister} className="login_form">
          <div className="title">
            <h2>শেখার নতুন জগতে স্বাগতম</h2>
          </div>

          <div className="form_group">
            <label htmlFor="">
              মোবাইল নম্বর
              <span>*</span>
            </label>
            <div className="input_container">
              <div className="flag">
                <img src="/assets/images/auth/bd-flag.png" alt="" />
                <span>+88</span>
              </div>
              <div className="input">
                <input
                  placeholder="মোবাইল নম্বর দিন"
                  className="input"
                  value={userInfo.phone}
                  onChange={handlePhoneInput}
                  type="number"
                  name="phone"
                  maxLength={11}
                  required
                />
              </div>
            </div>
          </div>
          {error.phone && <div className="errorMsg">{error.phone}</div>}

          <button className="common_btn btn-primary formBtn" type="submit">
            {loading ? (
              <div
                className="spinner-border spinner-border-md"
                role="status"
              ></div>
            ) : (
              'এগিয়ে যান'
            )}
          </button>
          <p className="w-100 jump_to d-flex align-items-center justify-content-center">
            Already have an account?{' '}
            <Link href="/login">
              <a>Login</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Phone;
