import React from 'react';

const CourseMetaBox = () => {
  return (
    <div className="course-meta-box d-md-flex align-items-center mb-5">
      <div className="border rounded-circle d-inline-block mb-4 mb-md-0 me-md-5 me-lg-4 me-xl-5">
        <div className="p-2 course-creator-img-box">
          <img
            alt=""
            src="/assets/images/banner/a.jpg"
            className="rounded-circle"
            width="68"
            height="68"
          />
        </div>
      </div>

      <div className="mb-4 mb-md-0 me-md-8 me-lg-4 me-xl-5 course-creator-by-box">
        <h6 className="mb-0"> {/* Created by */} প্রস্তুতকারক</h6>
        <a href="#"> {/* Alison Dawn */} রনি ভাউ</a>
      </div>

      <div className="mb-4 mb-md-0 me-md-5 me-lg-4 me-xl-5 course-creator-category-box">
        <h6 className="mb-0"> {/* Categories */} ক্যাটাগরি</h6>
        <a href="#"> {/* Design */} ডিজাইন</a>
      </div>

      <div className="mb-4 mb-md-0 me-md-5 me-lg-4 me-xl-5 course-creator-review-box">
        <h6 className="mb-0"> {/* Review */} রিভিউ</h6>
        <div className="d-lg-flex align-items-center">
          <div className="star-rating mb-2 mb-lg-0">
            <img src="/assets/images/svg/fill-star.svg" alt="fill-star" />
            <img src="/assets/images/svg/fill-star.svg" alt="fill-star" />
            <img src="/assets/images/svg/fill-star.svg" alt="fill-star" />
            <img src="/assets/images/svg/fill-star.svg" alt="fill-star" />
            <img src="/assets/images/svg/half-star.svg" alt="half-star" />
          </div>

          <div className=" ms-lg-3">
            <span> {/* 4.5 (9.8k+ reviews) */} ৪.৫ (৯.৮হাজার+ রিভিউ)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMetaBox;
