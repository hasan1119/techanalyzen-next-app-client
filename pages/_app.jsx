import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'cropperjs/dist/cropper.css';
import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/swiper-bundle.min.css';
import Spinner from '../components/Spinner';
import '../public/css/main.min.css';
import store from '../redux/app/store';
import { login } from '../redux/features/user/user';
import axiosClient from '../utilities/axios';
// import './../components/Home/swiper-style.css';
// Import Swiper styles
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import DashboardLayout from '../components/dashboard/Layout';

function MyApp({ Component, pageProps }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const path = router.pathname;
  const dashboardRegExp = new RegExp('dashboard', 'ig');
  const isDashboard = dashboardRegExp.test(path);

  if (!user._id && loading) {
    axiosClient
      .get(`/auth/v1/check/login`)
      .then(({ data }) => {
        dispatch(login(data));
      })
      .catch((err) => {
        console.log('Logged out user');
      })
      .finally(() => {
        setLoading(false);
      });
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <>
      {isDashboard ? (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <Component {...pageProps} />
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <MyApp Component={Component} pageProps={pageProps} />
      </Provider>
    </>
  );
}
