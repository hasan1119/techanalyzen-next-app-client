import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Home/Banner/Header';
import Footer from '../components/Home/Footer/Footer';
import LimitReached from '../components/SignIn/LimitReached';
import SignInForm from '../components/SignIn/SignInForm';

const SignIn = () => {
  const router = useRouter();
  const { user = {} } = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    // remember: true,
  });

  const [error, setError] = useState({
    username: '',
    password: '',
    limit: null,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user._id) {
      router.push('/dashboard');
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Sign In | Techanalyzen</title>
      </Head>
      <Header />

      <div className="container">
        <div className="login_container">
          {/* <!-- left side --> */}
          <div className="img">
            <img src="/assets/images/auth/login.png" />
          </div>

          {/* <!-- right side --> */}
          {error?.limit?.status === 'device-limit-reached' ? (
            <LimitReached
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              error={error}
              setError={setError}
              loading={loading}
              setLoading={setLoading}
            />
          ) : (
            <div className="login-content login-form">
              <SignInForm
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                error={error}
                setError={setError}
                loading={loading}
                setLoading={setLoading}
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
