import React from 'react';
import CourseOverViewDescription from '../CourseOverViewDivisions/CourseOverViewDescription';
import CourseOverViewLearningList from '../CourseOverViewDivisions/CourseOverViewLearningList';
import CourseWhatYouNeed from '../CourseOverViewDivisions/CourseWhatYouNeed';

const CourseOverView = () => {
  return (
    <div id="Overview" className="overview mb-5">
      <ul className="nav border-bottom h4 mb-5">
        <li className="nav-item">
          <a
            className="nav-link p-4 active"
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
            {/* Curriculum */} কারিকুলাম
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link p-4"
            href="#Instructor"
            data-bs-toggle="smooth-scroll"
            data-bs-offset="0"
          >
            {' '}
            {/* Instructor */} প্রশিক্ষক
          </a>
        </li>
      </ul>

      {/* Course Description */}
      <CourseOverViewDescription />

      {/* What you'll learn */}
      <CourseOverViewLearningList />

      {/* Requirements */}
      <CourseWhatYouNeed />
    </div>
  );
};

export default CourseOverView;
