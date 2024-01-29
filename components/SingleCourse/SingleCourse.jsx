import React from 'react';
import CourseDetails from './CourseDetails/CourseDetails';
import EnrollCourseAndMoreCourse from './EnrollCourseAndMoreCourse/EnrollCourseAndMoreCourse';

const SingleCourse = () => {
  return (
    <main>
      <section className="single-course-detail">
        {/* course container */}
        <div className="container course-content-wrapper">
          <div className="row mb-5 course_content_row">
            {/* course Details */}
            <CourseDetails />
            {/* enroll course */}
            <EnrollCourseAndMoreCourse />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleCourse;
