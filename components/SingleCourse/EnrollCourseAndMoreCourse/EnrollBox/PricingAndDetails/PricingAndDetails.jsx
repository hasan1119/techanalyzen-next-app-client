import React from 'react';
import CourseEnrollBoxDetails from './CourseEnrollBoxDetails/CourseEnrollBoxDetails';

const PricingAndDetails = () => {
  return (
    <div className="pt-5 pb-4 px-5 px-lg-3 px-xl-5">
      {/* price */}
      <div className="d-flex align-items-center mb-2 price-of-course">
        <h2 className="mb-0"> {/* ৳5,000 */}৳৫,০০০</h2>
        <del className="ms-3"> {/* ৳8,000 */}৳৮,০০০</del>
        <div className="badge text-white ms-auto fw-normal">
          {' '}
          {/* 10% off */}২০% ছাড়
        </div>
      </div>

      <div className="d-flex align-items-center days-left mb-5">
        {/* Icon */}
        <img src="/assets/images/svg/offer-clock.svg" alt="" />
        <span className="ms-3">
          {' '}
          {/* Only 2 days left to start course */}মাত্র ২ দিন বাকি কোর্স শুরুর
        </span>
      </div>
      {/* buttons */}
      {/* buy now */}
      <button
        className="buy-btn btn btn-primary btn-block mb-3"
        type="button"
        name="button"
      >
        {' '}
        {/* BUY */}
        {/* NOW */}এখনি কিনুন
      </button>
      {/* enroll now */}
      <button
        className="enroll-btn btn btn-orange btn-block mb-5"
        type="button"
        name="button"
      >
        {' '}
        {/* ENROLL */} এনরোল
      </button>

      {/* course short details */}
      <CourseEnrollBoxDetails />
    </div>
  );
};

export default PricingAndDetails;
