import React from 'react';
import SingleLeatestCourse from './SingleLeastestCourse.jsx/SingleLeatestCourse';

const MoreLeatestCourses = () => {
  return (
    <div className="d-block p-5 shadow leatest-course-box">
      <h3 className="mb-5">
        {' '}
        {/* Latest Courses */}সর্বাধিক পছন্দকৃত কোর্সসমূহ
      </h3>
      <ul className="list-group list-group-flush">
        <SingleLeatestCourse />
        <SingleLeatestCourse />
        <SingleLeatestCourse />
      </ul>
    </div>
  );
};

export default MoreLeatestCourses;
