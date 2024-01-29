import React from 'react';
import CourseHeader from './CourseHeader';
import CourseTabContainer from './CourseTabContainer';

const OurCourses = () => {
  return (
    <section className="our-courses-section px-md-5 px-sm-5" id="our-courses">
      <div className="container">
        <CourseHeader />
        <CourseTabContainer />
      </div>
    </section>
  );
};

export default OurCourses;
