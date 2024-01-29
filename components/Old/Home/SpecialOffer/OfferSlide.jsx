import React from 'react';
const OfferSlide = () => {
  return (
    <div className="card offer-card swiper-slide">
      <div className="special_offer_course_item">
        <div className="image-box">
          <a href="/templates/pages/singleCourse/singleCourse.html">
            <img
              alt=""
              src="/assets/images/our-courses/featured-course-02.jpg"
              alt=""
            />
          </a>
        </div>

        <div className="offer_content">
          <h3 className="offer_course_title">
            <a href="/templates/pages/singleCourse/singleCourse.html">
              <span>The Complete Web Developer PHP framework Course 2.0</span>
            </a>
          </h3>
          <div className="course_reviews">
            <h4>4.6</h4>
            <div className="offer-course-rate">
              <img
                alt=""
                src="/assets/images/svg/fill-star.svg"
                alt="fill-star"
              />
              <img
                alt=""
                src="/assets/images/svg/fill-star.svg"
                alt="fill-star"
              />
              <img
                alt=""
                src="/assets/images/svg/fill-star.svg"
                alt="fill-star"
              />
              <img
                alt=""
                src="/assets/images/svg/fill-star.svg"
                alt="fill-star"
              />
              <img
                alt=""
                src="/assets/images/svg/half-star.svg"
                alt="half-star"
              />
            </div>
            <h6>(20)</h6>
          </div>
          <div className="profile-details">
            <div className="instructor_img">
              <a href="/templates/pages/singleCourse/singleCourse.html">
                <img
                  alt=""
                  src="/assets/images/our-courses/instructor.jpg"
                  alt=""
                />
              </a>

              <a href="/templates/pages/singleCourse/singleCourse.html">
                <h6 className="name">Selena Gomez</h6>
                <h4 className="job">Full Stack Developer</h4>
              </a>
            </div>
          </div>
          <div className="card_middle">
            <div className="offer-view">
              <span className="me-2">
                <a href="#">
                  <img src="/assets/images/svg/clock.svg" alt="duration" />
                </a>
              </span>
              <p>8hr 30min</p>
            </div>

            <div className="module_amount">
              <span className="me-2">
                <img src="/assets/images/svg/book.svg" alt="classes" />
              </span>
              <p>10+ Lesson</p>
            </div>
          </div>
          <div className="offer_discount">
            <p>50% Off</p>
            <h3>
              {' '}
              <span>$150.00</span> $<del>300.00</del>{' '}
            </h3>
          </div>
        </div>
      </div>
      <div className="offer-course-ovelay">
        <a
          href="/templates/pages/singleCourse/singleCourse.html"
          className="joing-course-btn"
        >
          Join Course
        </a>
      </div>
    </div>
  );
};

export default OfferSlide;
