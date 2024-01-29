import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Home/Banner/Header';
import Footer from '../../components/Home/Footer/Footer';
import axiosClient from '../../utilities/axios';

const CourseView = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
  const [enrollLoading, setEnrollLoading] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState('fixed');
  const [courses, setCourses] = useState([]);

  function choosePackageHandler(e) {
    // e.preventDefault();
    setSelectedPackage(e.target.value);
    console.log(selectedPackage);
  }

  useEffect(() => {
    if (slug) {
      axiosClient
        .get(`/v1/courses/${slug}`)
        .then(({ data }) => {
          if (data._id) {
            setCourse(data);
          } else if (data.msg === 'notfound') {
            setCourse({ status: 'not-found' });
          }

          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(setLoading(false));
    }
  }, [slug]);

  useEffect(() => {
    axiosClient
      .get(`/v1/courses`)
      .then(({ data }) => {
        if (data.length) {
          setCourses(data);
        } else if (data.msg === 'notfound') {
          setCourses({ status: 'not-found' });
        }
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(setLoading(false));
  }, []);

  const {
    _id,
    title,
    description,
    instructor: { firstName, lastName, username, email, phone } = {},
    lessons,
    students,
    slug: courseSlug,
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

  const { user } = useSelector((state) => state.user);
  // enrollNow
  function enrollNow(e) {
    e.preventDefault();
    if (!user._id) {
      router.push(`/login?redirect=${router.asPath}`);
    } else {
      setEnrollLoading(true);
      axiosClient
        .post('/v1/courses/enroll', {
          id: _id,
          type: selectedPackage,
        })
        .then(({ data }) => {
          if (data?._id) {
            router.push(`/checkout/${data._id}`);
          } else {
            console.log(data);
          }
        })
        .catch(console.log)
        .finally(() => setEnrollLoading(false));
    }
  }

  if (loading) {
    return 'Loading.......';
  } else if (course._id) {
    return (
      <div>
        <Head>
          <title>Home | Techanalyzen</title>
        </Head>
        <Header />
        <main>
          <section className="single-course-detail">
            {/* course container */}
            <div className="hello"></div>
            <div className="container course-content-wrapper">
              <div className="row mb-5 course_content_row">
                {/* course Details */}
                <div className="col-lg-8  mt-5 mb-5 mb-lg-0 course-details-box">
                  {/* course title */}
                  <div className="course_top_title">
                    <h1 className="me-5 me-5 courses-header-title">{title}</h1>

                    {/* course short summary */}
                    <p className="me-5 mb-5 courses-paragraph">
                      {/* Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows. */}
                      <div dangerouslySetInnerHTML={{ __html: description }} />
                    </p>

                    {/* add to wishlist icon */}
                    <a href="#" className="heart-svg">
                      <img src="/assets/images/svg/heart.svg" />
                    </a>

                    {/*  course meta box  */}
                    <div className="course-meta-box d-md-flex align-items-center mb-5">
                      <div className="border rounded-circle d-inline-block mb-4 mb-md-0 me-md-5 me-lg-4 me-xl-5">
                        <div className="p-2 course-creator-img-box">
                          <img
                            src="/assets/images/banner/a.jpg"
                            className="rounded-circle"
                            width="68"
                            height="68"
                          />
                        </div>
                      </div>

                      <div className="mb-4 mb-md-0 me-md-8 me-lg-4 me-xl-5 course-creator-by-box">
                        <h6 className="mb-0">
                          {' '}
                          {/* Created by */} ইন্সট্রাক্টর
                        </h6>
                        <a href="#">
                          {' '}
                          {/* Alison Dawn */}
                          {`${firstName} ${lastName}`}
                        </a>
                      </div>

                      <div className="mb-4 mb-md-0 me-md-5 me-lg-4 me-xl-5 course-creator-category-box">
                        <h6 className="mb-0"> {/* Categories */} ক্যাটাগরি</h6>
                        <a href="#">
                          {' '}
                          {/* Design */}
                          {category?.title}
                        </a>
                      </div>

                      <div className="mb-4 mb-md-0 me-md-5 me-lg-4 me-xl-5 course-creator-review-box">
                        <h6 className="mb-0"> {/* Review */} রিভিউ</h6>
                        <div className="d-lg-flex align-items-center">
                          <div className="star-rating mb-2 mb-lg-0">
                            <img
                              src="/assets/images/svg/fill-star.svg"
                              alt="fill-star"
                            />
                            <img
                              src="/assets/images/svg/fill-star.svg"
                              alt="fill-star"
                            />
                            <img
                              src="/assets/images/svg/fill-star.svg"
                              alt="fill-star"
                            />
                            <img
                              src="/assets/images/svg/fill-star.svg"
                              alt="fill-star"
                            />
                            <img
                              src="/assets/images/svg/half-star.svg"
                              alt="half-star"
                            />
                          </div>

                          <div className=" ms-lg-3">
                            <span>
                              {' '}
                              {/* 4.5 (9.8k+ reviews) */} ৪.৫ (৯.৮হাজার+ রিভিউ)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* course over view info tab */}
                  <div id="Overview" className="overview mb-5">
                    <ul className="nav border-bottom h4 mb-5">
                      <li className="nav-item">
                        <a
                          className="nav-link p-4 active"
                          href="#Overview"
                          data-bs-toggle="smooth-scroll"
                          data-bs-offset="0"
                        >
                          {' '}
                          {/* Overview  */} ওভারভিউ
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link p-4"
                          href="#Curriculum"
                          data-bs-toggle="smooth-scroll"
                          data-bs-offset="0"
                        >
                          {' '}
                          {/* Curriculum */} কারিকুলাম
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link p-4"
                          href="#Instructor"
                          data-bs-toggle="smooth-scroll"
                          data-bs-offset="0"
                        >
                          {' '}
                          {/* Instructor */} প্রশিক্ষক
                        </a>
                      </li>
                    </ul>

                    {/* Course Description */}
                    <>
                      <h3 className="mt-5">
                        {' '}
                        {/* Course Description */} পাঠ্যসূচী বর্ণনা
                      </h3>

                      <div
                        dangerouslySetInnerHTML={{
                          __html: curriculumDescription,
                        }}
                      />
                    </>

                    {/* What you'll learn */}
                    <>
                      <h3 className="mb-5">
                        {' '}
                        {/* What you'll learn */} আপনি কী কী শিখবেন
                      </h3>
                      <div className="row row-cols-lg-2 mb-5">
                        <div className="w-100">
                          <ul className="list-style-v1 topics list-unstyled">
                            {topics?.map((topic, i) => (
                              <li key={topic + i}>
                                <img
                                  className="tick-inc"
                                  src="/assets/images/svg/tick-mark.svg"
                                />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>

                    {/* Requirements */}
                    <>
                      <h3 className="mb-5">
                        {' '}
                        {/* Requirements */} যা যা লাগবে
                      </h3>
                      <ul className="list-style-v2 list-unstyled">
                        {requirements?.map((requirement) => (
                          <li>
                            <img
                              className="dot-inc"
                              src="/assets/images/svg/dot-icon.svg"
                            />
                            <p></p>
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </>
                  </div>

                  {/*  course info tab */}
                  <div id="Curriculum" className="curriculum mb-5">
                    <ul className="nav border-bottom mb-5">
                      <li className="nav-item">
                        <a
                          className="nav-link p-4"
                          href="#Overview"
                          data-bs-toggle="smooth-scroll"
                          data-bs-offset="0"
                        >
                          {' '}
                          {/* Overview  */} ওভারভিউ
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link active p-4"
                          href="#Curriculum"
                          data-bs-toggle="smooth-scroll"
                          data-bs-offset="0"
                        >
                          {' '}
                          {/* Curriculum  */} কারিকুলাম
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link p-4"
                          href="#Instructor"
                          data-bs-toggle="smooth-scroll"
                          data-bs-offset="0"
                        >
                          {/*  Instructor  */} প্রশিক্ষক
                        </a>
                      </li>
                    </ul>

                    {/* accordion */}
                    <div id="accordionCurriculum">
                      <>
                        <div className="border rounded shadow mb-5 overflow-hidden">
                          <div
                            className="d-flex align-items-center"
                            id="curriculumheadingOne"
                          >
                            <h5 className="mb-0 w-100">
                              <button
                                className="d-flex align-items-center p-5 collapse-accordion-toggle  collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#CurriculumcollapseOne"
                                aria-expanded="false"
                                aria-controls="CurriculumcollapseOne"
                              >
                                <span className="me-4 d-flex">
                                  {/*  Icon */}

                                  {/*   Plus icon */}
                                  <img src="/assets/images/svg/accordion-plus.svg" />

                                  {/* minus icon */}
                                  {/* <img  src="/assets/images/svg/accordion-minus.svg"
                                          /> */}
                                </span>
                                Introduction
                              </button>
                            </h5>
                          </div>

                          <div
                            id="CurriculumcollapseOne"
                            className="collapse"
                            aria-labelledby="curriculumheadingOne"
                            data-parent="#accordionCurriculum"
                          >
                            <div className="border-top px-5 py-4  d-md-flex align-items-center">
                              <div className="d-flex align-items-center me-auto mb-4 mb-md-0">
                                <div className=" d-flex">
                                  <img src="/assets/images/svg/doc-info.svg" />
                                </div>

                                <div className="accordion-title ms-4">
                                  Introduction to the course
                                </div>
                              </div>

                              <div className="d-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all">
                                <div className="badge me-5 py-2">
                                  3 question
                                </div>
                                <div className="badge me-5 py-2">30 min</div>
                                <a href="#" className=" d-flex">
                                  {/*    Icon */}

                                  <img src="/assets/images/svg/accordion-play-btn.svg" />
                                </a>
                              </div>
                            </div>

                            <div className="border-top px-5 py-4  d-md-flex align-items-center ">
                              <div className="d-flex align-items-center me-auto mb-4 mb-md-0">
                                <div className=" d-flex">
                                  <img src="/assets/images/svg/doc-info.svg" />
                                </div>

                                <div className="accordion-title ms-4">
                                  Introduction
                                </div>
                              </div>

                              <div className="d-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all">
                                <div className=" d-flex">
                                  {/*    Icon */}
                                  <img src="/assets/images/svg/accordion-lock.svg" />
                                </div>
                              </div>
                            </div>

                            <div className="border-top px-5 py-4  d-md-flex align-items-center">
                              <div className="d-flex align-items-center me-auto mb-4 mb-md-0">
                                <div className=" d-flex">
                                  <img src="/assets/images/svg/accordion-clock.svg" />
                                </div>

                                <div className="accordion-title ms-4">
                                  Structure of the course
                                </div>
                              </div>

                              <div className="d-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all">
                                <div className="badge  me-5  py-2">30 min</div>
                                <a href="#" className="">
                                  {/*      Icon */}
                                  <img src="/assets/images/svg/accordion-play-btn.svg" />
                                </a>
                              </div>
                            </div>

                            <div className="border-top px-5 py-4  d-md-flex align-items-center ">
                              <div className="d-flex align-items-center me-auto mb-4 mb-md-0">
                                <div className=" d-flex">
                                  <img src="/assets/images/svg/accordion-clock.svg" />
                                </div>

                                <div className="accordion-title ms-4">
                                  Required Tools
                                </div>
                              </div>

                              <div className="d-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all">
                                <div className="badge me-5 ">12 lectures</div>
                                <div className="badge  me-5  py-2">30 min</div>

                                <div className=" d-flex">
                                  {/*      Icon */}
                                  <img src="/assets/images/svg/accordion-play-btn.svg" />
                                </div>
                              </div>
                            </div>

                            <div className="border-top px-5 py-4  d-md-flex align-items-center">
                              <div className="d-flex align-items-center me-auto mb-4 mb-md-0">
                                <div className=" d-flex">
                                  <img src="/assets/images/svg/doc-info.svg" />
                                </div>

                                <div className="accordion-title ms-4">
                                  Get Your Free E-book
                                </div>
                              </div>

                              <div className="d-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all">
                                <div className="badge me-5  py-2">
                                  3 question
                                </div>
                                <div className="badge  me-5  py-2">30 min</div>
                                <a href="#" className="">
                                  {/*       Icon */}
                                  <img src="/assets/images/svg/accordion-play-btn.svg" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border rounded shadow mb-5 overflow-hidden">
                          <div
                            className="d-flex align-items-center"
                            id="curriculumheadingTwo"
                          >
                            <h5 className="mb-0 w-100">
                              <button
                                className="d-flex align-items-center p-5 collapse-accordion-toggle  collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#CurriculumcollapseTwo"
                                aria-expanded="false"
                                aria-controls="CurriculumcollapseTwo"
                              >
                                <span className="me-4  d-flex">
                                  {/*   Icon */}

                                  {/*     Plus icon */}
                                  <img src="/assets/images/svg/accordion-plus.svg" />

                                  {/*  minus icon */}
                                  {/*  <img  src="/assets/images/svg/accordion-minus.svg"
                                      /> */}
                                </span>
                                Design Basics
                              </button>
                            </h5>
                          </div>

                          <div
                            id="CurriculumcollapseTwo"
                            className="collapse"
                            aria-labelledby="curriculumheadingTwo"
                            data-parent="#accordionCurriculum"
                          >
                            <div className="border-top px-5 py-4  d-md-flex align-items-center">
                              <div className="d-flex align-items-center me-auto mb-4 mb-md-0">
                                <div className=" d-flex">
                                  <img src="/assets/images/svg/doc-info.svg" />
                                </div>

                                <div className="accordion-title ms-4">
                                  Intro to Design Basics
                                </div>
                              </div>

                              <div className="d-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all">
                                <div className="badge  me-5  py-2">30 min</div>
                                <a href="#" className="">
                                  {/* Icon */}
                                  <img src="/assets/images/svg/accordion-play-btn.svg" />
                                </a>
                              </div>
                            </div>

                            <div className="border-top px-5 py-4  d-md-flex align-items-center ">
                              <div className="d-flex align-items-center me-auto mb-4 mb-md-0">
                                <div className=" d-flex">
                                  <img src="/assets/images/svg/doc-info.svg" />
                                </div>

                                <div className="accordion-title ms-4">
                                  Layout
                                </div>
                              </div>

                              <div className="d-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all">
                                <div className="badge me-5 ">12 lectures</div>
                                <div className="badge me-5  py-2">
                                  5 question
                                </div>
                                <div className="badge  me-5  py-2">45 min</div>
                                <div className=" d-flex">
                                  {/*     Icon */}
                                  <img src="/assets/images/svg/accordion-play-btn.svg" />
                                </div>
                              </div>
                            </div>

                            <div className="border-top px-5 py-4  d-md-flex align-items-center">
                              <div className="d-flex align-items-center me-auto mb-4 mb-md-0">
                                <div className=" d-flex">
                                  <img src="/assets/images/svg/accordion-clock.svg" />
                                </div>

                                <div className="accordion-title ms-4">
                                  Visual hierarchy
                                </div>
                              </div>

                              <div className="d-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all">
                                <div className="badge me-5 py-1">30 min</div>
                                <a href="#" className="">
                                  {/*   Icon */}
                                  <img src="/assets/images/svg/accordion-play-btn.svg" />
                                </a>
                              </div>
                            </div>

                            <div className="border-top px-5 py-4  d-md-flex align-items-center ">
                              <div className="d-flex align-items-center me-auto mb-4 mb-md-0">
                                <div className=" d-flex">
                                  <img src="/assets/images/svg/accordion-clock.svg" />
                                </div>

                                <div className="accordion-title ms-4">
                                  Visual noise
                                </div>
                              </div>

                              <div className="d-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all">
                                <div className="badge me-5 ">12 lectures</div>
                                <div className="badge me-5  py-2">
                                  5 question
                                </div>
                                <div className="badge  me-5  py-2">45 min</div>

                                <div className=" d-flex">
                                  {/*    Icon */}
                                  <img src="/assets/images/svg/accordion-lock.svg" />
                                </div>
                              </div>
                            </div>

                            <div className="border-top px-5 py-4  d-md-flex align-items-center">
                              <div className="d-flex align-items-center me-auto mb-4 mb-md-0">
                                <div className=" d-flex">
                                  <img src="/assets/images/svg/doc-info.svg" />
                                </div>

                                <div className="accordion-title ms-4">
                                  Iconography
                                </div>
                              </div>

                              <div className="d-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all">
                                <a href="#" className="">
                                  {/*   Icon */}
                                  <img src="/assets/images/svg/accordion-play-btn.svg" />
                                </a>
                              </div>
                            </div>

                            <div className="border-top px-5 py-4  d-md-flex align-items-center ">
                              <div className="d-flex align-items-center me-auto mb-4 mb-md-0">
                                <div className=" d-flex">
                                  <img src="/assets/images/svg/accordion-clock.svg" />
                                </div>

                                <div className="accordion-title ms-4">
                                  Typography
                                </div>
                              </div>

                              <div className="d-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all">
                                <div className=" d-flex">
                                  {/*   Icon */}
                                  <img src="/assets/images/svg/accordion-lock.svg" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    </div>
                  </div>

                  {/* instractor info */}
                  <div id="Instructor" className="instructor mb-5">
                    <ul className="nav border-bottom h4 mb-5">
                      <li className="nav-item">
                        <a
                          className="nav-link p-4"
                          href="#Overview"
                          data-bs-toggle="smooth-scroll"
                          data-bs-offset="0"
                        >
                          {' '}
                          {/* Overview  */} ওভারভিউ
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link p-4"
                          href="#Curriculum"
                          data-bs-toggle="smooth-scroll"
                          data-bs-offset="0"
                        >
                          {' '}
                          {/* Curriculum  */} কারিকুলাম
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link active p-4"
                          href="#Instructor"
                          data-bs-toggle="smooth-scroll"
                          data-bs-offset="0"
                        >
                          {' '}
                          {/* Instructor */} প্রশিক্ষক
                        </a>
                      </li>
                    </ul>

                    <h3 className="mb-5">About the instructor</h3>

                    {/* instructor img and titile */}
                    <div className="d-flex align-items-center mb-5">
                      <div className="d-inline-block rounded-circle border me-5 p-2">
                        <div className="avatar">
                          <img
                            alt=""
                            src="/assets/images/banner/a.jpg"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="media-body">
                        <h4 className="mb-2">Md. Rokibul Hasan</h4>
                        <span>Full Stack Web Designer &amp; Developer</span>
                      </div>
                    </div>

                    {/* instractor rating */}
                    <div className="row mb-5">
                      <div className="col-12 col-md-auto mb-5 mb-md-0 me-5">
                        <div className="d-flex align-items-center">
                          <div className="me-3 d-flex">
                            {/* Icon */}
                            <img
                              src="/assets/images/svg/instructor-star.svg"
                              alt=""
                            />
                          </div>
                          <p className="ins_text">4.87 Instructor rating</p>
                        </div>
                      </div>

                      <div className="col-12 col-md-auto mb-5 mb-md-0 me-5">
                        <div className="d-flex align-items-center">
                          <div className="me-3 d-flex">
                            {/* Icon */}
                            <img
                              src="/assets/images/svg/instructor-review.svg"
                              alt=""
                            />
                          </div>
                          <p className="ins_text">1,533 reviews</p>
                        </div>
                      </div>

                      <div className="col-12 col-md-auto mb-5 mb-md-0 me-5">
                        <div className="d-flex align-items-center">
                          <div className="me-3 d-flex">
                            <img
                              alt=""
                              src="/assets/images/svg/instructor-students.svg"
                            />
                          </div>
                          <p className="ins_text">23,912 students</p>
                        </div>
                      </div>

                      <div className="col-12 col-md-auto mb-5 mb-md-0 me-5">
                        <div className="d-flex align-items-center">
                          <div className="me-3 d-flex">
                            {/* Icon */}
                            <img
                              alt=""
                              src="/assets/images/svg/accordion-play-btn.svg"
                            />
                          </div>
                          <p className="ins_text">29 courses</p>
                        </div>
                      </div>
                    </div>

                    {/* instructor summary */}
                    <>
                      <div>
                        <p className="mb-4 ins-summary">
                          Hello, I'm Md. Rokibul Hasan, a highly skilled and
                          experienced full stack web designer and developer with
                          over 5 years of industry experience. Throughout my
                          career, I have successfully delivered exceptional web
                          experiences and solved complex problems using
                          innovative solutions. I am also the proud founder of
                          "Coding Club Bangladesh," a YouTube channel where I
                          create video lessons to empower and educate students
                          in the field of web development.
                        </p>
                        <p className="mb-4 ins-summary">
                          Skills: Front-end Development: Proficient in HTML,
                          CSS, JavaScript, and modern front-end frameworks like
                          React.js, Angular, or Vue.js. I possess a deep
                          understanding of responsive design, cross-browser
                          compatibility, and web accessibility best practices.
                        </p>
                        <p className="mb-4 ins-summary">
                          Back-end Development: Experienced in server-side
                          technologies such as Node.js, Express.js. I have
                          hands-on experience with RESTful APIs, database
                          management (SQL and NoSQL), and efficient server
                          deployment.
                        </p>
                      </div>
                    </>
                  </div>
                </div>
                {/* enroll course */}
                <div className="col-lg-4 col-md-12  mt-5 course-enroll-box">
                  {/* enrool box */}
                  <div className="course-des d-block border p-2 shadow mb-5">
                    {/* course img */}
                    <a
                      href="https://www.youtube.com/c/codingclubbangladesh?sub_confirmation=1"
                      className="d-block sk-thumbnail rounded mb-1"
                      target="_blank"
                      data-fancybox=""
                    >
                      <div className="play-video rounded-circle bg-white size-20-all d-inline-flex align-items-center justify-content-center position-absolute center ">
                        {/* Icon */}
                        <img src="/assets/images/svg/video-play.svg" alt="" />
                      </div>
                      {/* course thumbnail */}
                      <img
                        className="rounded shadow-light-lg"
                        src="/assets/images/single-course/single-product.jpg"
                        alt="..."
                      />
                    </a>
                    {/*  price, off and days left with details*/}
                    <div className="pt-5 pb-4 px-5 px-lg-3 px-xl-5">
                      <div className="d-flex align-items-center days-left mb-5">
                        {/* Icon */}
                        <img src="/assets/images/svg/offer-clock.svg" alt="" />
                        <span className="ms-3">{startWithIn}</span>
                      </div>
                      {subscription.status === 'Off' ? (
                        <>
                          <h2 className="mb-3">কোর্স ফিঃ</h2>
                          {discount.status === 'On' ? (
                            <div className="d-flex align-items-center mb-2 price-of-course">
                              <h2 className="mb-0">৳ {price}</h2>
                              <del className="ms-3">৳ {discount.price}</del>
                              <div className="badge text-white ms-auto fw-normal">
                                {discount.percentage}% ছাড়
                              </div>
                            </div>
                          ) : (
                            <label htmlFor="fixedPackage">
                              <div className="d-flex align-items-center mb-2 price-of-course">
                                <h2 className="mb-0">
                                  {' '}
                                  <input
                                    type="radio"
                                    checked={selectedPackage === 'fixed'}
                                    value="fixed"
                                    name="package"
                                    hidden
                                    id="fixedPackage"
                                  />
                                  ৳ {price} টাকা মাত্র
                                </h2>
                              </div>
                            </label>
                          )}
                        </>
                      ) : (
                        <>
                          <h2 className="mb-3">কোর্স ফিঃ</h2>
                          {discount.status === 'On' ? (
                            <button className="btn w-100">
                              <label
                                className="w-100"
                                htmlFor="packageFixedPrice"
                              >
                                <div className="d-flex align-items-center mb-2 price-of-course">
                                  <h2 className="mb-0">
                                    <input
                                      type="radio"
                                      checked={selectedPackage === 'fixed'}
                                      value="fixed"
                                      name="package"
                                      id="packageFixedPrice"
                                      onChange={choosePackageHandler}
                                    />{' '}
                                    ৳ {price}
                                  </h2>
                                  <del className="ms-3">৳ {discount.price}</del>
                                  <div className="badge text-white ms-auto fw-normal">
                                    {discount.percentage}% ছাড়
                                  </div>
                                </div>
                              </label>
                            </button>
                          ) : (
                            <div className="d-flex align-items-center mb-2 price-of-course">
                              <button className="btn">
                                <label
                                  style={{ cursor: 'pointer' }}
                                  htmlFor="fixedPrice"
                                >
                                  <h2 className="mb-0">
                                    <input
                                      type="radio"
                                      checked={selectedPackage === 'fixed'}
                                      onChange={choosePackageHandler}
                                      value="fixed"
                                      name="selectedPackage"
                                      id="fixedPrice"
                                    />
                                    ৳ {price} টাকা মাত্র
                                  </h2>
                                </label>
                              </button>
                            </div>
                          )}

                          <h2 className="mt-4">সাবস্ক্রিপশনঃ</h2>
                          <div className="d-flex align-items-cente mb-2 mt-3 price-of-course price_of_course_subscription">
                            {/* <h2 className="mb-0">৳৭,৯৯৯</h2> */}
                            {subscription?.packages?.map((p) => (
                              <div className="subscription_radio d-grid">
                                <button
                                  className="btn"
                                  style={{
                                    width: '100%',
                                    outline: 'none',
                                    border: 'none',
                                  }}
                                >
                                  <label
                                    htmlFor={p.name}
                                    style={{
                                      cursor: 'pointer',
                                      width: '100%',
                                    }}
                                  >
                                    <div className="radio_box">
                                      <div className="d-flex align-items-center mb-2">
                                        <input
                                          type="radio"
                                          checked={selectedPackage === p.name}
                                          onChange={choosePackageHandler}
                                          value={p.name}
                                          name="selectedPackage"
                                          id={p.name}
                                        />
                                        <p className="mb-0 s_name">
                                          Name: {p.name}
                                        </p>
                                      </div>
                                      <div className="d-flex justify-content-between s_font">
                                        <p>
                                          মোট মূল্য: <b>৳{p.totalPrice}</b>
                                        </p>
                                        <p>
                                          ইউনিট মূল্য: <b>৳{p.unitPrice}</b>
                                        </p>
                                      </div>
                                      <div className="d-flex justify-content-between s_font">
                                        <p>
                                          কিস্তি: <b>{p.installments}</b>
                                        </p>
                                        <p>
                                          প্রকার: <b>{p.type}</b>
                                        </p>
                                      </div>
                                    </div>
                                  </label>
                                </button>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {/* buttons */}

                      {/* enroll now */}
                      <button
                        className="buy-btn btn btn-primary btn-block mb-3"
                        type="button"
                        name="button"
                        onClick={enrollNow}
                      >
                        এনরোল করুন
                      </button>

                      {/* course short details */}
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex align-items-center py-3">
                          <div className=" d-flex icon-uxs">
                            {/* Icon */}
                            <img
                              src="/assets/images/svg/course-duration-clock.svg"
                              alt=""
                            />
                          </div>
                          <h6 className="mb-0 ms-3 me-auto">
                            {' '}
                            {/* Duration */}সময়সীমা
                          </h6>
                          <span>
                            {' '}
                            {/* 43 weeks */} {duration}
                          </span>
                        </li>
                        <li className="list-group-item d-flex align-items-center py-3">
                          <div className=" d-flex icon-uxs">
                            {/* Icon */}
                            <img
                              src="/assets/images/svg/course-lecture.svg"
                              alt=""
                            />
                          </div>
                          <h6 className="mb-0 ms-3 me-auto">
                            {' '}
                            {/* Lectures */}লেকচার সংখ্যা
                          </h6>
                          <span>{totalClass}</span>
                        </li>
                        <li className="list-group-item d-flex align-items-center py-3">
                          <div className=" d-flex icon-uxs">
                            {/* Icon */}
                            <img
                              src="/assets/images/svg/course-enroll.svg"
                              alt=""
                            />
                          </div>
                          <h6 className="mb-0 ms-3 me-auto">
                            {' '}
                            {/* Enrolled */}নথিভুক্ত
                          </h6>
                          <span>
                            {' '}
                            {/* 100 students */}
                            {students?.length} জন
                          </span>
                        </li>
                        <li className="list-group-item d-flex align-items-center py-3">
                          <div className=" d-flex icon-uxs">
                            {/*   Icon */}
                            <img
                              src="/assets/images/svg/course-language.svg"
                              alt=""
                            />
                          </div>
                          <h6 className="mb-0 ms-3 me-auto">
                            {' '}
                            {/* Language */}কোর্সের ভাষা
                          </h6>
                          <span> {/* English */}বাংলা</span>
                        </li>
                        <li className="list-group-item d-flex align-items-center py-3">
                          <div className=" d-flex icon-uxs">
                            {/* Icon */}
                            <img
                              src="/assets/images/svg/course-skill-level.svg"
                              alt=""
                            />
                          </div>
                          <h6 className="mb-0 ms-3 me-auto">
                            {/* Skill level */}দক্ষতা স্তর
                          </h6>
                          <span>
                            {' '}
                            {/* beginner */}
                            {level}
                          </span>
                        </li>
                        <li className="list-group-item d-flex align-items-center py-3">
                          <div className=" d-flex icon-uxs">
                            {/* Icon */}
                            <img
                              src="/assets/images/svg/course-deadline.svg"
                              alt=""
                            />
                          </div>
                          <h6 className="mb-0 ms-3 me-auto">
                            {/* Deadline */}শেষ তারিখ
                          </h6>
                          <span>
                            {' '}
                            {/* 06 April 2020 */}
                            {endDate}
                          </span>
                        </li>
                        <li className="list-group-item d-flex align-items-center py-3">
                          <div className=" d-flex icon-uxs">
                            {/*  Icon */}

                            <img
                              src="/assets/images/svg/course-certificate-badge.svg"
                              alt=""
                            />
                          </div>
                          <h6 className="mb-0 ms-3 me-auto">
                            {/* Certificate */}সনদপত্র
                          </h6>
                          <span>
                            {' '}
                            {/* Yes */}
                            {certificate}
                          </span>
                        </li>
                        <li className="list-group-item d-flex align-items-center py-4">
                          <a
                            href="#"
                            className="mx-auto d-flex align-items-center mt-2"
                          >
                            {/* Icon */}
                            <img src="/assets/images/svg/share.svg" alt="" />
                            <span className="ms-3">
                              {/* Share this course */}এই কোর্স শেয়ার করুন
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* leatest courses */}
                  <div className="d-block p-5 shadow leatest-course-box">
                    <h3 className="mb-5">
                      {/* Latest Courses */}সর্বাধিক পছন্দকৃত কোর্সসমূহ
                    </h3>
                    <ul className="list-group list-group-flush">
                      {courses.map((course) => (
                        <Link href={`/courses/${course.slug}`}>
                          <a className="text-decoration-none">
                            <li className="media d-flex align-items-center mb-5">
                              <div
                                className="w-100p d-block me-4"
                                style={{ maxWidth: '150px' }}
                              >
                                <img
                                  alt=""
                                  src={`/files/thumb/course/${course.thumbnail}`}
                                  className="avatar-img w-100 rounded"
                                />
                              </div>
                              <div className="media-body flex-grow-1">
                                <div className="d-block">
                                  <h6 className=" mb-3">{course.title}</h6>
                                </div>
                                <del className="me-4 mb-5">
                                  {course.discount.price}
                                </del>
                                <ins className="mb-5 "> ৳ {course.price}</ins>
                              </div>
                            </li>
                          </a>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
};

export default CourseView;
