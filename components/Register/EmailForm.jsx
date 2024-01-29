import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import axiosClient from '../../utilities/axios';
import { validateEmail } from '../../utilities/helpers';

const EmailForm = ({ setStep, userInfo, setUserInfo, error, setError }) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [loading, setLoading] = useState(false);
  const timerRef = useRef();

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

  // data validator
  function validateData({
    firstName,
    lastName,
    email,
    password,
    gender,
    phone,
    confirmPassword,
    username,
    referredBy,
  }) {
    let status = true;
    const newError = { ...error };

    if (!firstName) {
      newError['firstName'] = 'First name is required!';
      status = false;
    }

    if (!lastName) {
      newError['lastName'] = 'Last name is required!';
      status = false;
    }

    if (!phone) {
      newError['phone'] = 'Phone is required!';
      status = false;
    }

    if (!email) {
      newError['email'] = 'Email is required!';
      status = false;
    } else {
      if (!validateEmail(email)) {
        newError['email'] = 'Email is not valid';
        status = false;
      }
    }

    if (!isStrongPassword(password)) {
      newError['password'] = 'Password is not strong!';
      status = false;
    }

    if (password !== confirmPassword) {
      newError['confirmPassword'] = "Password doesn't match!";
      status = false;
    }

    if (!gender) {
      newError['gender'] = 'Gender is required!';
      status = false;
    }

    if (!username) {
      newError['username'] = 'Username is required!';
      status = false;
    } else if (username.length < 3) {
      newError['username'] = 'Username must be at least 4 character!';
      status = false;
    }

    setError(newError);
    return status;
  }

  // Handle Register
  async function handleRegister(e) {
    e.preventDefault();
    const isValidated = validateData(userInfo);

    if (isValidated) {
      setLoading(true);
      axiosClient
        .post(`/auth/v1/send/email`, {
          ...userInfo,
        })
        .then(({ data }) => {
          if (data.status === 'success') {
            setUserInfo({ ...userInfo, ...data.userInfo });
            setStep('EMAIL_OTP');
          }
        })
        .catch(({ response: { data } }) => {
          if (data.status === 'error') {
            setError({ ...error, ...data });
          } else {
            console.log(data);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  function handleInputChange(e) {
    const name = e.target.name;
    const val = e.target.value;

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

    if (name === 'email') {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(async () => {
        try {
          const isValidEmail = validateEmail(val);
          if (isValidEmail) {
            const { data } = await axiosClient.post(`/auth/v1/check/email`, {
              email: val,
            });
            if (data.status === 'error') {
              setError({ ...error, email: data.email });
            } else if (data.status === 'success') {
              setError({ ...error, email: '' });
            } else {
              setError({ ...error, email: 'Something went wrong!' });
            }
          } else {
            setError({ ...error, email: 'Invalid email address' });
          }
        } catch (error) {
          console.log(error);
        }
      }, 800);
    }

    if (name === 'username') {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(async () => {
        try {
          const isValidUsername = val.length >= 3;
          if (isValidUsername) {
            const { data } = await axiosClient.post(`/auth/v1/check/username`, {
              username: val,
            });
            if (data.status === 'error') {
              setError({ ...error, username: data.username });
            } else if (data.status === 'success') {
              setError({ ...error, username: '' });
            } else {
              setError({ ...error, username: 'Something went wrong!' });
            }
          } else {
            setError({
              ...error,
              username: 'Username needs to be minimum 3 characters',
            });
          }
        } catch (error) {
          console.log(error);
        }
      }, 800);
    }

    const newError = { ...error };
    newError[e.target.name] = '';

    setError(newError);

    const newUserInfo = { ...userInfo };
    newUserInfo[name] = val;
    setUserInfo(newUserInfo);
  }

  // password show/hide toggler
  const passwordShowOrHide = (ref) => {
    if (ref === 'password') {
      console.log(passwordRef.current.type, visiblePassword);

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

  return (
    <div className="login_container">
      {/* <!-- left side --> */}
      <div className="img">
        <img src="/assets/images/auth/email-form-img.png" />
      </div>

      {/* <!-- right side --> */}
      <div className="login-content login-content-info">
        <form className="info_form" onSubmit={handleRegister}>
          <div className="title">
            <h2>ব্যক্তিগত তথ্য</h2>
          </div>

          <div className="row">
            {/* <!-- first name --> */}
            <div className="col-lg-6 my-3">
              <div className="form_group">
                <label>First name</label>
                <div className="input_container">
                  <div className="input">
                    <input
                      className="input"
                      onChange={handleInputChange}
                      value={userInfo.firstName || ''}
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Enter your first name"
                    />
                  </div>
                </div>
                {error.firstName && (
                  <div className="errorMsg">{error.firstName || ''}</div>
                )}
              </div>
            </div>

            {/* <!-- last name --> */}
            <div className="col-lg-6 my-3">
              <div className="form_group">
                <label>Last name</label>
                <div className="input_container">
                  <div className="input">
                    <input
                      className="input"
                      onChange={handleInputChange}
                      value={userInfo.lastName || ''}
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Enter your Last name"
                    />
                  </div>
                </div>
                {error.lastName && (
                  <div className="errorMsg">{error.lastName || ''}</div>
                )}
              </div>
            </div>

            {/* <!-- phone --> */}
            <div className="col-lg-6 my-3">
              <div className="form_group">
                <label htmlFor="phone">Phone</label>
                <div className="input_container">
                  <div className="input ">
                    <input
                      disabled
                      className="input disable"
                      onChange={handleInputChange}
                      type="number"
                      id="phone"
                      readOnly
                      value={userInfo.phone || ''}
                      name="phone"
                      placeholder="Enter your phone"
                    />
                  </div>
                </div>
                {error.phone && (
                  <div className="errorMsg">{error.phone || ''}</div>
                )}
              </div>
            </div>

            {/* <!-- username --> */}
            <div className="col-lg-6 my-3">
              <div className="form_group">
                <label htmlFor="username">Username</label>
                <div className="input_container">
                  <div className="input">
                    <input
                      className="input"
                      type="text"
                      id="username"
                      onChange={handleInputChange}
                      value={userInfo.username || ''}
                      name="username"
                      placeholder="Enter your username"
                    />
                  </div>
                </div>
                {error.username && (
                  <div className="errorMsg">{error.username || ''}</div>
                )}
              </div>
            </div>

            {/* <!-- email --> */}
            <div className="col-12 my-3">
              <div className="form_group">
                <label htmlFor="email">Email</label>
                <div className="input_container input_info">
                  <div className="input">
                    <input
                      className="input"
                      name="email"
                      type="text"
                      id="email"
                      onChange={handleInputChange}
                      value={userInfo.email || ''}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                {error.email && (
                  <div className="errorMsg">{error.email || ''}</div>
                )}
              </div>
            </div>

            {/* <!-- Password --> */}
            <div className="col-lg-6 my-3">
              <div className="form_group">
                <label>Password</label>
                <div className="input_container">
                  <div className="input ">
                    <input
                      type="password"
                      ref={passwordRef}
                      value={userInfo.password || ''}
                      name="password"
                      onChange={handleInputChange}
                      id="password"
                      placeholder="Enter password"
                      className="pass"
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
                {error.password && (
                  <div className="errorMsg">{error.password || ''}</div>
                )}
              </div>
            </div>

            {/* <!-- Confirm password --> */}
            <div className="col-lg-6 my-3">
              <div className="form_group">
                <label>Confirm password</label>
                <div className="input_container">
                  <div className="input">
                    <input
                      className="pass"
                      ref={confirmPasswordRef}
                      value={userInfo.confirmPassword || ''}
                      type="password"
                      id="confirmPassword"
                      onChange={handleInputChange}
                      name="confirmPassword"
                      placeholder="Enter password again"
                    />
                    {visibleConfirmPassword ? (
                      <div className="toggle_pass" onClick={passwordShowOrHide}>
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
                  <div className="errorMsg">{error.confirmPassword || ''}</div>
                )}
              </div>
            </div>

            {/* gender */}
            <div className="col-12 my-3">
              <div className="form-group ">
                <label>Gender</label>
                <div className="mt-3 d-flex ">
                  <div className="check_gender me-5">
                    <div className="maleBox ">
                      <input
                        defaultChecked={userInfo.gender === 'male'}
                        type="radio"
                        name="gender"
                        onChange={handleInputChange}
                        value="male"
                        id="male"
                      />
                      <label className="status-label" htmlFor="male">
                        Male
                      </label>
                    </div>
                  </div>
                  <div className="check_gender ">
                    <div className="femaleBox ">
                      <input
                        defaultChecked={userInfo.gender === 'female'}
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={handleInputChange}
                        id="female"
                      />
                      <label className="status-label" htmlFor="female">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                {error.gender && (
                  <div className="errorMsg">{error.gender || ''}</div>
                )}
              </div>
            </div>

            {/* Refer Code */}
            <div className="col-12 my-3">
              <div className="form_group">
                <label htmlFor="referredBy">Referral Code (Optional)</label>
                <div className="input_container pe-5">
                  <div className="input">
                    <input
                      value={userInfo.referredBy || ''}
                      type="text"
                      id="referredBy"
                      // required
                      onChange={handleInputChange}
                      className=""
                      name="referredBy"
                      placeholder="Enter ReferCode"
                    />
                  </div>
                  {error.referredBy && (
                    <div className="errorMsg">{error.referredBy || ''}</div>
                  )}
                  {/* <div className="errorMsg">{error.emailOTP || ''}</div> */}
                  {error.common && (
                    <div className="errorMsg">{error.common || ''}</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="common_btn">
            এগিয়ে যান
          </button>
          <p className="w-100 jump_to d-flex align-items-center justify-content-center">
            Already have an account?{' '}
            <Link href="/signin">
              <a>Login</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
