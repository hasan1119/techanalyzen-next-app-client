import React from 'react';
import CourseCard from './CourseCard';

const TabContent = () => {
  return (
    <>
      {/*  ux-design-tab  */}
      <div className="tab-pane fade active show" id="ux-design-tab">
        <div className="ux-design">
          <div className="row">
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>
      {/*  development-tab  */}
      <div className="tab-pane fade active" id="development-tab">
        <div className="ux-design">
          <div className="row">
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>
      {/*  marketing-tab */}
      <div className="tab-pane fade active" id="marketing-tab">
        <div className="ux-design">
          <div className="row">
            <CourseCard />
          </div>
        </div>
      </div>
      {/*  business-tab */}
      <div className="tab-pane fade active" id="business-tab">
        <div className="ux-design">
          <div className="row">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>
      {/*  technology-tab */}
      <div className="tab-pane fade active" id="technology-tab">
        <div className="ux-design">
          <div className="row">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default TabContent;
