import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/features/user/user';
import axiosClient from '../../utilities/axios';

const ResetFrom = ({
  userInfo,
  setUserInfo,
  error,
  setError,
  loading,
  setLoading,
}) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const passwordRef = useRef();
  const timerRef = useRef();
  const confirmPasswordRef = useRef();
  const dispatch = useDispatch();

  const router = useRouter();

  function isStrongPassword(password) {
    const passwordError = [];
    const status = true;

    if (!password) {
      passwordError.push('Password is required!');
      status = false;
      setError({ ...error, password: passwordError.join(', ') });
      return status;
    }

    // Check for minimum length of 8 characters
    if (password.length < 8) {
      passwordError.push('Password must contains 8 characters');
      status = false;
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      passwordError.push('1 lowercase');
      status = false;
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      passwordError.push('1 uppercase');
      status = false;
    }

    // Check for at least one number
    if (!/\d/.test(password)) {
      passwordError.push('a number');
      status = false;
    }

    // Check for at least one special character
    if (!/[~`!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/.test(password)) {
      passwordError.push('a special character');
      status = false;
    }

    // If all checks pass, return true
    if (passwordError.length) {
      setError({ ...error, password: passwordError.join(', ') + '!' });
    } else {
      setError({ ...error, password: '' });
    }
    return status;
  }

  // handle input change
  function handleInputChange(e) {
    const newUserInfo = { ...userInfo };
    setError({});
    const name = e.target.name;
    const val = e.target.value.trim();
    newUserInfo[name] = val;
    setUserInfo(newUserInfo);

    if (name === 'password' || name === 'confirmPassword') {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        if (name === 'password') {
          const isStrong = isStrongPassword(val);
          if (isStrong) {
            setError({ ...error, password: '' });
          }
        }

        if (name === 'confirmPassword') {
          if (userInfo.password !== val) {
            setError({ ...error, confirmPassword: "Password does't match" });
          } else {
            setError({ ...error, confirmPassword: '' });
          }
        }
      }, 800);
    }
  }

  // password show/hide toggler
  const passwordShowOrHide = (ref) => {
    if (ref === 'password') {
      visiblePassword
        ? (passwordRef.current.type = 'password')
        : (passwordRef.current.type = 'text');
      setVisiblePassword(!visiblePassword);
    } else {
      setVisibleConfirmPassword(!visibleConfirmPassword);
      visibleConfirmPassword
        ? (confirmPasswordRef.current.type = 'password')
        : (confirmPasswordRef.current.type = 'text');
    }
  };

  function handleResetPasswordAndLogin(e) {
    e.preventDefault();
    if (userInfo.password !== userInfo.confirmPassword) {
      setError({ ...error, confirmPassword: "Password doesn't match" });
    } else if (!error.password && !error.confirmPassword) {
      axiosClient
        .post('/auth/v1/passwordResetAndLogin', userInfo)
        .then(({ data }) => {
          if (data.status === 'success') {
            dispatch(login(data.user));
            router.push('/dashboard');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('something went wrong!');
    }
  }

  return (
    <>
      <form onSubmit={handleResetPasswordAndLogin} className="w-100">
        <div className="title">
          <h2>রিসেট পাসওয়ার্ড</h2>
        </div>

        {/* <!-- Password --> */}
        <div className="form_group mt_3">
          <label>পাসওয়ার্ড</label>
          <div className="input_container">
            <div className="input">
              <input
                type="password"
                ref={passwordRef}
                placeholder="নতুন পাসওয়ার্ড দিন"
                name="password"
                className="input"
                value={userInfo.password}
                onChange={handleInputChange}
              />
              {visiblePassword ? (
                <div
                  className="toggle_pass"
                  onClick={() => passwordShowOrHide('password')}
                >
                  <AiOutlineEyeInvisible />
                </div>
              ) : (
                <div
                  className="toggle_pass"
                  onClick={() => passwordShowOrHide('password')}
                >
                  <AiOutlineEye />
                </div>
              )}
            </div>
          </div>
          {error.password && <div className="errorMsg">{error.password}</div>}
        </div>

        {/* <!-- Password --> */}
        <div className="form_group mt_3">
          <label>কনফার্ম পাসওয়ার্ড</label>
          <div className="input_container">
            <div className="input">
              <input
                type="password"
                ref={confirmPasswordRef}
                placeholder="পুনরায় নতুন পাসওয়ার্ড দিন"
                name="confirmPassword"
                className="input"
                value={userInfo.confirmPassword}
                onChange={handleInputChange}
              />
              {visibleConfirmPassword ? (
                <div
                  className="toggle_pass"
                  onClick={() => passwordShowOrHide('confirmPassword')}
                >
                  <AiOutlineEyeInvisible />
                </div>
              ) : (
                <div
                  className="toggle_pass"
                  onClick={() => passwordShowOrHide('confirmPassword')}
                >
                  <AiOutlineEye />
                </div>
              )}
            </div>
          </div>
          {error.confirmPassword && (
            <div className="errorMsg">{error.confirmPassword}</div>
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
            'পাসওয়ার্ড রিসেট & লগিন'
          )}
        </button>
      </form>
    </>
  );
};

export default ResetFrom;
