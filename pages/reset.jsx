import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Home/Banner/Header';
import Footer from '../components/Home/Footer/Footer';
import CreatePassword from '../components/Reset/CreatePassword';
import EmailOrPhone from '../components/Reset/EmailOrPhone';
import OTPForm from '../components/Reset/OTPForm';

export const STEPS = {
  EMAILORPHONE: 'EmailOrPhone',
  OTPFORM: 'OTPForm',
  CREATEPASSWORD: 'CreatePassword',
};

const Reset = () => {
  const router = useRouter();
  const { user: { _id } = {} } = useSelector((state) => state.user);
  const [step, setStep] = useState(STEPS.EMAILORPHONE); // |EmailOrPhone| OTPForm | CreatePassword

  const [userInfo, setUserInfo] = useState({
    phoneOrEmail: '',
    type: 'INVALID',
    password: '',
    confirmPassword: '',
    OTP: '',
  });

  const [error, setError] = useState({
    phoneOrEmail: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);

  if (_id) {
    router.push('/');
    return;
  }

  return (
    <>
      <Head>
        <title>Reset | Techanalyzen</title>
      </Head>
      <Header />

      <div className="container">
        <div className="login_container">
          {/* <!-- left side --> */}
          <div className="img">
            <img src="/assets/images/auth/reset-password.png" />
          </div>

          <div className="login-content login-form">
            {step === STEPS.EMAILORPHONE && (
              <EmailOrPhone
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                error={error}
                setError={setError}
                loading={loading}
                setLoading={setLoading}
                setStep={setStep}
              />
            )}

            {step === STEPS.OTPFORM && (
              <OTPForm
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                error={error}
                setError={setError}
                loading={loading}
                setLoading={setLoading}
                setStep={setStep}
              />
            )}

            {step === STEPS.CREATEPASSWORD && (
              <CreatePassword
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                error={error}
                setError={setError}
                loading={loading}
                setLoading={setLoading}
                setStep={setStep}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reset;
