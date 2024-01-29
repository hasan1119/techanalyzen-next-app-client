import React, { useEffect } from 'react';
// Import Swiper React components
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation, Pagination } from 'swiper';
import OfferSlide from './OfferSlide';

const OfferSlider = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 15,
      sliderPerGroup: 4,
      loop: true,
      centerSlide: 'true',
      fade: 'true',
      grabCursor: 'true',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-navBtn',
        prevEl: '.swiper-navBtn',
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 4,
        },
      },
    });
  }, []);
  return (
    <ReactSwiper
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      slidesPerView={4}
      spaceBetween={16}
      freeMode={true}
      modules={[Pagination, Navigation]}
      className="offerSlider"
    >
      <div className="slide-container">
        <div className="card-wrapper">
          <SwiperSlide>
            <OfferSlide />
          </SwiperSlide>
          <SwiperSlide>
            <OfferSlide />
          </SwiperSlide>
          <SwiperSlide>
            <OfferSlide />
          </SwiperSlide>
          <SwiperSlide>
            <OfferSlide />
          </SwiperSlide>
          <SwiperSlide>
            <OfferSlide />
          </SwiperSlide>
        </div>
      </div>
    </ReactSwiper>
  );
};

export default OfferSlider;
