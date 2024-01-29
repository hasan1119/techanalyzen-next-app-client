import React from 'react';
import EnrollBox from './EnrollBox/EnrollBox';
import MoreLeatestCourses from './MoreLeatestCourses/MoreLeatestCourses';

const EnrollCourseAndMoreCourse = () => {
  return (
    <div className="col-lg-4 col-md-12 mt-5 course-enroll-box">
      {/* enrool box */}
      <EnrollBox />

      {/* leatest courses */}
      <MoreLeatestCourses />
    </div>
  );
};

export default EnrollCourseAndMoreCourse;
