import Head from 'next/head';
import React from 'react';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import OfferSlider from './OfferSlider';

const SpecialOffer = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
        />
        <script src="https://kit.fontawesome.com/4fa42c0453.js"></script>
      </Head>
      <section className="offer_section">
        <div className="container">
          <div className="offer_icon">
            <img src="/assets/images/svg/gifts-svgrepo-com.svg" alt="" />
          </div>

          <div className="special_offer_title">
            <h3>
              স্পেশাল <span>অফার</span>
            </h3>
          </div>
          <OfferSlider />
        </div>
      </section>
    </>
  );
};

export default SpecialOffer;
