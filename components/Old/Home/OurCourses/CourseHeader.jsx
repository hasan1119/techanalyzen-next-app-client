import React from 'react';

const CourseHeader = () => {
  return (
    <div className="courses-header-title">
      <div className="courses-Icon">
        <img src="/assets/images/svg/tag.svg" alt="" />
      </div>
      <div className="courses-header-text">
        <h2>
          আমাদের <span>কোর্স</span> সমূহ
        </h2>
        <p>বেছে নিন আপনার পছন্দ মতন</p>
      </div>
    </div>
  );
};

export default CourseHeader;
