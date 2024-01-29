import Link from 'next/link';
import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/features/user/user';
import axiosClient from '../../utilities/axios';

import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

const SignInForm = ({
  userInfo,
  setUserInfo,
  error,
  setError,
  loading,
  setLoading,
}) => {
  const dispatch = useDispatch();

  const [visiblePassword, setVisiblePassword] = useState(false);
  const passwordRef = useRef();

  const router = useRouter();

  // handle input change
  function handleInputChange(e) {
    const newUserInfo = { ...userInfo };
    setError({});
    newUserInfo[e.target.name] =
      e.target.name === 'remember' ? e.target.checked : e.target.value;
    setUserInfo(newUserInfo);
  }

  // handle signin
  function handleSignIn(e) {
    e.preventDefault();

    const newError = { ...error };
    if (!userInfo.username) {
      newError['username'] = 'Email/ Phone / Username is required!';
    } else {
      newError['username'] = '';
    }

    if (!userInfo.password) {
      newError['password'] = 'Password is required!';
    } else {
      newError['password'] = '';
    }

    setError(newError);

    if (userInfo.username && userInfo.password) {
      setError({
        username: '',
        password: '',
        limit: null,
      });
      setLoading(true);
      axiosClient
        .post(`/auth/v1/login`, userInfo)
        .then(({ data }) => {
          const redirect = router.query.redirect;

          if (redirect) {
            router.push(redirect);
          }
          dispatch(login(data.user));

          setError({
            username: '',
            password: '',
            limit: null,
          });
        })
        .catch(({ response: { data } = {} }) => {
          if (data.status === 'device-limit-reached') {
            console.log('line 65', data);
            setError({ ...error, limit: data });
          } else {
            console.log('line 68', data);
            setError({ ...error, ...data, limit: null });
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  // password show/hide toggler
  const passwordShowOrHide = (ref) => {
    if (ref === 'password') {
      visiblePassword
        ? (passwordRef.current.type = 'password')
        : (passwordRef.current.type = 'text');
      setVisiblePassword(!visiblePassword);
    }
  };

  return (
    <>
      <form onSubmit={handleSignIn} className="w-100" action="index.html">
        <div className="title">
          <h2>লগইন</h2>
        </div>

        {/* <!-- email --> */}
        <div className="form_group mt_3">
          <label>মোবাইল অথবা ই-মেইল</label>
          <div className="input_container">
            <div className="input">
              <input
                type="email"
                placeholder="আপনার মোবাইল অথবা ই-মেইল দিন"
                onChange={handleInputChange}
                value={userInfo.username}
                name="username"
              />
            </div>
          </div>
          {error.username && <div className="errorMsg">{error.username}</div>}
        </div>

        {/* <!-- Password --> */}
        <div className="form_group mt_3">
          <label>পাসওয়ার্ড</label>
          <div className="input_container">
            <div className="input">
              <input
                type="password"
                placeholder="আপনার পাসওয়ার্ড দিন"
                name="password"
                className="input"
                onChange={handleInputChange}
                value={userInfo.password}
                ref={passwordRef}
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
          <Link className="forgot_password" href="/reset">
            <a>পাসওয়ার্ড ভুলে গেছেন?</a>
          </Link>
        </div>

        <button type="submit" className="common_btn">
          {loading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            'লগিন করুন'
          )}
        </button>

        <p className="w-100 jump_to d-flex align-items-center justify-content-center">
          New user?{' '}
          <Link href="/register">
            <a>Register now</a>
          </Link>
        </p>
      </form>
    </>
  );
};

export default SignInForm;
