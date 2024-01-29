import React from 'react';
import Contact from '../components/Home/Contact/Contact';
import Header from '../components/Home/Banner/Header';
import Footer from '../components/Home/Footer/Footer';
import Head from 'next/head';

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Techanalyzen</title>
      </Head>
      <Header />
      <div className="" style={{ marginTop: '70px' }}>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
