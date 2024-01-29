import Head from 'next/head';
import React from 'react';
import SingleCoursePage from '../pages/../components/SingleCourse/SingleCourse';
import Header from './../components/Home/Banner/Header';
import Footer from './../components/Home/Footer/Footer';

const SingleCourse = () => {
  return (
    <>
      <Head>
        <title>Home | Techanalyzen</title>
      </Head>
      <Header />
      <SingleCoursePage />
      <Footer />
    </>
  );
};

export default SingleCourse;
