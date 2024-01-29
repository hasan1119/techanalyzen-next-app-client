import React from 'react';
import PricingAndDetails from './PricingAndDetails/PricingAndDetails';

const EnrollBox = () => {
  return (
    <div className="course-des d-block border p-2 shadow mb-5">
      {/* course img */}
      <a
        href="https://www.youtube.com/watch?v=9I-Y6VQ6tyI"
        className="d-block sk-thumbnail rounded mb-1"
        target="_blank"
        data-fancybox=""
      >
        <div className="play-video rounded-circle bg-white size-20-all d-inline-flex align-items-center justify-content-center position-absolute center ">
          {/* Icon */}
          <img src="/assets/images/svg/video-play.svg" alt="" />
        </div>
        {/* course thumbnail */}
        <img
          alt=""
          className="rounded shadow-light-lg"
          src="/assets/images/single-course/single-product.jpg"
          alt="..."
        />
      </a>
      {/*  price, off and days left with details*/}
      <PricingAndDetails />
    </div>
  );
};

export default EnrollBox;
