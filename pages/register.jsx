import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Header from '../components/Home/Banner/Header';
import Footer from './../components/Home/Footer/Footer';
import EmailForm from './../components/Register/EmailForm';
import EmailVerifyCodeFrom from './../components/Register/EmailOTP';
import Phone from './../components/Register/Phone';
import SMSOTP from './../components/Register/SMS_OTP';
// import bg from '/assets/images/auth/bg.svg';

const Register = () => {
  const [step, setStep] = useState('PHONE');
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    password: '',
    confirmPassword: '',
    emailOTP: '',
    phone: '',
    email: '',
    SMSOTP: '',
    username: '',
    referredBy: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    gender: '',
    password: '',
    confirmPassword: '',
  });

  const router = useRouter();
  const { referredBy } = router.query;

  useEffect(() => {
    console.log(`query-> ${referredBy}`);
    setUserInfo({ ...userInfo, referredBy });
  }, []);

  return (
    <>
      <Head>
        <title>Register | Techanalyzen</title>
      </Head>

      <Header />

      <div className="container">
        {step === 'PHONE' && (
          <Phone
            setStep={setStep}
            setUserInfo={setUserInfo}
            userInfo={userInfo}
            loading={loading}
            setLoading={setLoading}
            error={error}
            setError={setError}
          />
        )}

        {step === 'SMS_OTP' && (
          <SMSOTP
            setUserInfo={setUserInfo}
            userInfo={userInfo}
            setStep={setStep}
            error={error}
            setError={setError}
            loading={loading}
            setLoading={setLoading}
          />
        )}
        {step === 'EMAIL' && (
          <EmailForm
            userInfo={userInfo}
            setStep={setStep}
            setUserInfo={setUserInfo}
            error={error}
            setError={setError}
            loading={loading}
            setLoading={setLoading}
          />
        )}
        {step === 'EMAIL_OTP' && (
          <EmailVerifyCodeFrom
            setUserInfo={setUserInfo}
            userInfo={userInfo}
            error={error}
            setError={setError}
            setStep={setStep}
            loading={loading}
            setLoading={setLoading}
          />
        )}
      </div>

      <Footer />
    </>
  );
};

export default Register;
