import Link from 'next/link';
import React from 'react';

const CourseCard = ({ course }) => {
  const {
    title,
    description,
    instructor,
    lessons,
    students,
    slug,
    status,
    category,
    subCategory,
    curriculumDescription,
    language,
    courseLength,
    totalLesson,
    totalClass,
    topics,
    startWithIn,
    requirements,
    price,
    subscription,
    paidOrFree,
    courseType,
    level,
    endDate,
    duration,
    discount,
    certificate,
    attribute,
    thumbnail,
    rating,
    reviews,
  } = course;

  return (
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <div className="course-box">
        <div className="products">
          <div className="product-img">
            <div className="img_top">
              <div className="featured">{attribute}</div>
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
              />
            </div>
            <a href="/templates/pages/singleCourse/singleCourse.html">
              <img
                alt=""
                className="img-fluid"
                src={`https://techanalyzen.libertysailingschool.net/files/thumb/course/${thumbnail}`}
              />
            </a>
            <div className="img_bottom">
              <div className="left">
                <div className="badge">Most Popular</div>
                <div className="course_category">{category.title}</div>
              </div>
              <div className="course_discount">{discount.percentage}% OFF</div>
            </div>
          </div>
          <div className="course_info">
            <div className="top_content">
              <div className="intructor">
                <a href="/templates/pages/singleCourse/singleCourse.html">
                  <img
                    src={`https://techanalyzen.libertysailingschool.net/files/thumb/profile/${instructor.avatar}`}
                    className="img-fluid rounded-circle"
                    alt=""
                  />
                </a>
                <div className="instructor_name">
                  <h4>
                    <Link href="#">
                      <a>{instructor.firstName + ' ' + instructor.lastName}</a>
                    </Link>
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
                  <span>
                    {rating} ({rating})
                  </span>
                </div>
              </div>
            </div>
            <div className="course_title">
              <a href="#">{title}</a>
            </div>
            <div className="middle_content">
              <div className="duration">
                <img
                  alt=""
                  src="/assets/images/svg/tabcourse-course-duration.svg"
                />
                <p>{duration}</p>
              </div>
              <div className="lesson">
                <img
                  alt=""
                  src="/assets/images/svg/tabcourse-course-lesson.svg"
                />
                <p>{totalLesson}</p>
              </div>
              <div className="level">
                <img
                  alt=""
                  src="/assets/images/svg/tabcourse-course-level.svg"
                />
                <p>{level}</p>
              </div>
            </div>
            <div className="course_footer">
              <div className="radio_price_option">
                <div className="form-check">
                  <label className="radio">
                    {/* <input type="radio" name="r" value="2" />{' '} */}
                    <span>Subscription</span>{' '}
                  </label>
                </div>
                <div className="course_fee">
                  <h3>
                    {/* BDT {subscription}{' '} */}
                    {/* <span className="text_muted text-decoration-line-through">
                      2,4000
                    </span> */}
                    {subscription.status === 'On' ? 'Available' : 'Unavailable'}
                  </h3>
                </div>
              </div>
              <div className="radio_price_option">
                <div className="form-check">
                  <label className="radio">
                    {/* <input type="radio" name="r" value="1" />{' '} */}
                    <span>Course Price </span>
                  </label>
                </div>
                <div className="course_fee">
                  <h3>
                    BDT {price}{' '}
                    <span className="ms-2 text_muted text-decoration-line-through">
                      {discount.price}
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="course_button">
              <Link href={`/courses/${slug}`}>
                <a className="course_detail">Course Detail</a>
              </Link>
              <Link href={`/courses/${slug}`}>
                <a className="course_buy">Buy Now</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
