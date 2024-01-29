import React from 'react';
import CourseInfo from './CourseInfo/CourseInfo';
import CourseInstractorInfo from './CourseInstractorInfo/CourseInstractorInfo';
import CourseMetaBox from './CourseMetaBox/CourseMetaBox';
import CourseOverView from './CourseOverView/CourseOverView';

const CourseDetails = () => {
  return (
    <div className="col-lg-8  mt-5 mb-5 mb-lg-0 course-details-box">
      {/* course title */}
      <h1 className="me-5 me-5 courses-header-title">
        ফিগমা শিখুন: ইউজার ইন্টারফেস ডিজাইনের প্রয়োজনীয়তা - UI/UX ডিজাইন
      </h1>

      {/* course short summary */}
      <p className="me-5 mb-5 courses-paragraph">
        {/* Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows. */}
        ফিগমা হল ইন্টারফেস ডিজাইনের জন্য একটি সহযোগী ওয়েব অ্যাপ্লিকেশন, যেখানে
        অতিরিক্ত অফলাইন বৈশিষ্ট্যগুলি ম্যাকওএস এবং উইন্ডোজের জন্য ডেস্কটপ
        অ্যাপ্লিকেশন দ্বারা সক্রিয় করা হয়েছে।
      </p>

      {/* add to wishlist icon */}
      <a href="#" className="heart-svg">
        <img src="/assets/images/svg/heart.svg" alt="" />
      </a>

      {/*  course meta box  */}
      <CourseMetaBox />

      {/* course over view info tab */}
      <CourseOverView />

      {/*  course info tab */}
      <CourseInfo />

      {/* instractor info */}
      <CourseInstractorInfo />
    </div>
  );
};

export default CourseDetails;
