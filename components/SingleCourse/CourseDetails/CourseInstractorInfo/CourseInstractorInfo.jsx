import React from 'react';
import InstractorRating from './InstractorRating/InstractorRating';
import InstractorSummary from './InstractorSummary/InstractorSummary';
import PreviewInstractor from './PreviewInstractor/PreviewInstractor';

const CourseInstractorInfo = () => {
  return (
    <div id="Instructor" className="instructor mb-5">
      <ul className="nav border-bottom h4 mb-5">
        <li className="nav-item">
          <a
            className="nav-link p-4"
            href="#Overview"
            data-bs-toggle="smooth-scroll"
            data-bs-offset="0"
          >
            {' '}
            {/* Overview  */} ওভারভিউ
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link p-4"
            href="#Curriculum"
            data-bs-toggle="smooth-scroll"
            data-bs-offset="0"
          >
            {' '}
            {/* Curriculum  */} কারিকুলাম
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link active p-4"
            href="#Instructor"
            data-bs-toggle="smooth-scroll"
            data-bs-offset="0"
          >
            {' '}
            {/* Instructor */} প্রশিক্ষক
          </a>
        </li>
      </ul>

      <h3 className="mb-5">About the instructor</h3>

      {/* instructor img and titile */}
      <PreviewInstractor />

      {/* instractor rating */}
      <InstractorRating />

      {/* instructor summary */}
      <InstractorSummary />
    </div>
  );
};

export default CourseInstractorInfo;
