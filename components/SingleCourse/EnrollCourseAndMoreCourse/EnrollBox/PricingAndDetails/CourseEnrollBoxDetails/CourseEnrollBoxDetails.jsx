import React from 'react';

const CourseEnrollBoxDetails = () => {
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item d-flex align-items-center py-3">
        <div className=" d-flex icon-uxs">
          {/* Icon */}
          <img
            alt=""
            src="/assets/images/svg/course-duration-clock.svg"
            alt=""
          />
        </div>
        <h6 className="mb-0 ms-3 me-auto"> {/* Duration */}সময়সীমা</h6>
        <span> {/* 43 weeks */} ৪৩ সপ্তাহ</span>
      </li>
      <li className="list-group-item d-flex align-items-center py-3">
        <div className=" d-flex icon-uxs">
          {/* Icon */}
          <img src="/assets/images/svg/course-lecture.svg" alt="" />
        </div>
        <h6 className="mb-0 ms-3 me-auto"> {/* Lectures */}লেকচার সংখ্যা</h6>
        <span> 32৩২</span>
      </li>
      <li className="list-group-item d-flex align-items-center py-3">
        <div className=" d-flex icon-uxs">
          {/* Icon */}
          <img src="/assets/images/svg/course-enroll.svg" alt="" />
        </div>
        <h6 className="mb-0 ms-3 me-auto"> {/* Enrolled */}নথিভুক্ত</h6>
        <span> {/* 100 students */}১০০ জন</span>
      </li>
      <li className="list-group-item d-flex align-items-center py-3">
        <div className=" d-flex icon-uxs">
          {/*   Icon */}
          <img src="/assets/images/svg/course-language.svg" alt="" />
        </div>
        <h6 className="mb-0 ms-3 me-auto"> {/* Language */}কোর্সের ভাষা</h6>
        <span> {/* English */}বাংলা</span>
      </li>
      <li className="list-group-item d-flex align-items-center py-3">
        <div className=" d-flex icon-uxs">
          {/* Icon */}
          <img src="/assets/images/svg/course-skill-level.svg" alt="" />
        </div>
        <h6 className="mb-0 ms-3 me-auto"> {/* Skill level */}দক্ষতা স্তর</h6>
        <span> {/* beginner */}শিক্ষানবিস</span>
      </li>
      <li className="list-group-item d-flex align-items-center py-3">
        <div className=" d-flex icon-uxs">
          {/* Icon */}
          <img src="/assets/images/svg/course-deadline.svg" alt="" />
        </div>
        <h6 className="mb-0 ms-3 me-auto"> {/* Deadline */}শেষ তারিখ</h6>
        <span> {/* 06 April 2020 */}০৬ এপ্রিল ২০২২</span>
      </li>
      <li className="list-group-item d-flex align-items-center py-3">
        <div className=" d-flex icon-uxs">
          {/*  Icon */}

          <img
            alt=""
            src="/assets/images/svg/course-certificate-badge.svg"
            alt=""
          />
        </div>
        <h6 className="mb-0 ms-3 me-auto"> {/* Certificate */}সনদপত্র</h6>
        <span> {/* Yes */}দেওয়া হবে</span>
      </li>
      <li className="list-group-item d-flex align-items-center py-4">
        <a href="#" className="mx-auto d-flex align-items-center mt-2">
          {/* Icon */}
          <img src="/assets/images/svg/share.svg" alt="" />
          <span className="ms-3">
            {' '}
            {/* Share this course */}এই কোর্স শেয়ার করুন
          </span>
        </a>
      </li>
    </ul>
  );
};

export default CourseEnrollBoxDetails;
