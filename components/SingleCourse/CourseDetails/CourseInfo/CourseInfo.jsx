import React from 'react';
import CourseAccordion from './CourseAccordion/CourseAccordion';

const CourseInfo = () => {
  return (
    <div id="Curriculum" className="curriculum mb-5">
      <ul className="nav border-bottom mb-5">
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
            className="nav-link active p-4"
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
            className="nav-link p-4"
            href="#Instructor"
            data-bs-toggle="smooth-scroll"
            data-bs-offset="0"
          >
            {/*  Instructor  */} প্রশিক্ষক
          </a>
        </li>
      </ul>

      {/* accordion */}
      <div id="accordionCurriculum">
        <CourseAccordion />
      </div>
    </div>
  );
};

export default CourseInfo;
