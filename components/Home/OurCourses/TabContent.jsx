import React, { useEffect, useState } from 'react';
import axiosClient from '../../../utilities/axios';
import CourseCard from './CourseCard';

const TabContent = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axiosClient
      .get('/v1/courses')
      .then(({ data }) => {
        setCourses(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="ux-design">
        <div className="row">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
      {/*  ux-design-tab  */}
      {/* <div className="tab-pane fade active" id="ux-design-tab">
        <div className="ux-design">
          <div className="row">
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div> */}
      {/*  development-tab  */}
      {/* <div className="tab-pane fade show active" id="development-tab">
        <div className="ux-design">
          <div className="row">
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div> */}
      {/*  marketing-tab */}
      {/* <div className="tab-pane fade active" id="marketing-tab">
        <div className="ux-design">
          <div className="row">
            <CourseCard />
          </div>
        </div>
      </div> */}
      {/*  business-tab */}
      {/* <div className="tab-pane fade active" id="business-tab">
        <div className="ux-design">
          <div className="row">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div> */}
      {/*  technology-tab */}
      {/* <div className="tab-pane fade active" id="technology-tab">
        <div className="ux-design">
          <div className="row">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default TabContent;
