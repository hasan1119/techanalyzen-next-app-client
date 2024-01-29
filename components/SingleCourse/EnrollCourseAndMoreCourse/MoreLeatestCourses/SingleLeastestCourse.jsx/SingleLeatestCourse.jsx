import React from 'react';

const SingleLeatestCourse = () => {
  return (
    <li className="media d-flex mb-5">
      <a href="#" className="w-100p d-block me-4">
        <img
          alt=""
          src="/assets/images/single-course/single-product.jpg"
          alt="..."
          className="avatar-img w-100p"
        />
      </a>
      <div className="media-body flex-grow-1">
        <a href="#" className="d-block">
          <h6 className=" mb-3">
            {/*  Web Development  and Design */}
            ওয়েব ডেভেলপমেন্ট এবং ডিজাইন
          </h6>
        </a>
        <del className="me-4 mb-5"> {/* ৳5,000 */}৳৫,০০০</del>
        <ins className="mb-5 "> {/* ৳8,000৳ */}৮,০০০</ins>
      </div>
    </li>
  );
};

export default SingleLeatestCourse;
