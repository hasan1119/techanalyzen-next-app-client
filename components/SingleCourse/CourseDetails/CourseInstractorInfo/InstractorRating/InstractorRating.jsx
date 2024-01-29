import React from 'react';

const InstractorRating = () => {
  return (
    <div className="row mb-5">
      <div className="col-12 col-md-auto mb-5 mb-md-0 me-5">
        <div className="d-flex align-items-center">
          <div className="me-3 d-flex">
            {/* Icon */}
            <img src="/assets/images/svg/instructor-star.svg" alt="" />
          </div>
          <p className="ins_text">4.87 Instructor rating</p>
        </div>
      </div>

      <div className="col-12 col-md-auto mb-5 mb-md-0 me-5">
        <div className="d-flex align-items-center">
          <div className="me-3 d-flex">
            {/* Icon */}
            <img src="/assets/images/svg/instructor-review.svg" alt="" />
          </div>
          <p className="ins_text">1,533 reviews</p>
        </div>
      </div>

      <div className="col-12 col-md-auto mb-5 mb-md-0 me-5">
        <div className="d-flex align-items-center">
          <div className="me-3 d-flex">
            <img alt="" src="/assets/images/svg/instructor-students.svg" />
          </div>
          <p className="ins_text">23,912 students</p>
        </div>
      </div>

      <div className="col-12 col-md-auto mb-5 mb-md-0 me-5">
        <div className="d-flex align-items-center">
          <div className="me-3 d-flex">
            {/* Icon */}
            <img alt="" src="/assets/images/svg/accordion-play-btn.svg" />
          </div>
          <p className="ins_text">29 courses</p>
        </div>
      </div>
    </div>
  );
};

export default InstractorRating;
