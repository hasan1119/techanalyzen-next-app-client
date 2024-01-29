import React from 'react';

const CourseCard = () => {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <div className="course-box">
        <div className="products">
          <div className="product-img">
            <div className="img_top">
              <div className="featured">Featured</div>
            </div>
            <div
              className="img_top_wishlist"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Add Your Wishlist"
            >
              <img
                alt=""
                src="/assets/images/svg/tabcourse-wish-list-icon.svg"
                alt=""
              />
            </div>
            <a href="/templates/pages/singleCourse/singleCourse.html">
              <img
                alt=""
                className="img-fluid"
                alt=""
                src="/assets/images/our-courses/featured-course-01.jpg"
              />
            </a>
            <div className="img_bottom">
              <div className="left">
                <div className="badge">Most Popular</div>
                <div className="course_category">Web Developmnt</div>
              </div>
              <div className="course_discount">50% OFF</div>
            </div>
          </div>
          <div className="course_info">
            <div className="top_content">
              <div className="intructor">
                <a href="/templates/pages/singleCourse/singleCourse.html">
                  <img
                    src="/assets/images/our-courses/instructor2.jpg"
                    className="img-fluid rounded-circle"
                    alt=""
                  />
                </a>
                <div className="instructor_name">
                  <h4>
                    <a href="#">Jonath Poul</a>
                  </h4>
                  <p>Instructor</p>
                </div>
              </div>
              <div className="course_review">
                <div className="review_area">
                  <img
                    src="/assets/images/svg/tabcourse-review-star.svg"
                    alt=""
                  />
                  <span>5 (18)</span>
                </div>
              </div>
            </div>
            <div className="course_title">
              <a href="#">Full Stack Web Development with MERN</a>
            </div>
            <div className="middle_content">
              <div className="duration">
                <img
                  alt=""
                  src="/assets/images/svg/tabcourse-course-duration.svg"
                  alt=""
                />
                <p>8hr 30min</p>
              </div>
              <div className="lesson">
                <img
                  alt=""
                  src="/assets/images/svg/tabcourse-course-lesson.svg"
                  alt=""
                />
                <p>10+ Lesson</p>
              </div>
              <div className="level">
                <img
                  alt=""
                  src="/assets/images/svg/tabcourse-course-level.svg"
                  alt=""
                />
                <p>beginner</p>
              </div>
            </div>
            <div className="course_footer">
              <div className="radio_price_option">
                <div className="form-check">
                  <label className="radio">
                    <input type="radio" name="r" value="2" />{' '}
                    <span>Subscription</span>{' '}
                  </label>
                </div>
                <div className="course_fee">
                  <h3>
                    BDT 1,2000{' '}
                    <span className="text_muted text-decoration-line-through">
                      2,4000
                    </span>
                  </h3>
                </div>
              </div>
              <div className="radio_price_option">
                <div className="form-check">
                  <label className="radio">
                    <input type="radio" name="r" value="1" />{' '}
                    <span>Course Price </span>
                  </label>
                </div>
                <div className="course_fee">
                  <h3>
                    BDT 1,2000{' '}
                    <span className="ms-2 text_muted text-decoration-line-through">
                      2,4000
                    </span>
                  </h3>
                </div>
              </div>
              {/* <div>
                    <label className="radio">
                    <input type="radio" name="r" value="1" checked> <span>Male</span> </label>
                    <label className="radio">
                    <input type="radio" name="r" value="2"> <span>Female</span> </label>
                  </div>  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
