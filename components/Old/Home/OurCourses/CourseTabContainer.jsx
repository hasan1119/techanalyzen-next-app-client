import React from 'react';
import CourseSearchBar from './CourseSearchBar';
import TabContent from './TabContent';
import TabNav from './TabNav';

const CourseTabContainer = () => {
  return (
    <div className="row">
      <div className="featured-courses-tab">
        <div className="tab-content">
          <TabNav />
          <CourseSearchBar />
          <TabContent />
        </div>
      </div>
    </div>
  );
};

export default CourseTabContainer;
