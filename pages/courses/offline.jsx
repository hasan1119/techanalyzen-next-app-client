import Head from 'next/head';
import React from 'react';
import Header from '../../components/Home/Banner/Header';
import Footer from '../../components/Home/Footer/Footer';

const Offline = () => {
  return (
    <div>
      <Head>
        <title>Home | Techanalyzen</title>
      </Head>
      <Header />
      <main>
        <section className="single-course-detail">
          {/* course container */}
          <div className="container course-content-wrapper">
            <div className="row mb-5 course_content_row">
              {/* course Details */}
              <div className="col-lg-8  mt-5 mb-5 mb-lg-0 course-details-box">
                {/* course title */}
                <h1 className="me-5 me-5 courses-header-title">
                  ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট উইথ মার্ন (অফলাইন ক্লাশ)
                </h1>

                {/* course short summary */}
                <p className="me-5 mb-5 courses-paragraph">
                  {/* Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows. */}
                  এই কোর্সটি অফলাইন ক্লাশের মাধ্যমে সম্পন্ন করা হবে। এই প্যাকেজ
                  এর আওতাভুক্ত শিক্ষার্থীরা সরাসরি মেন্টর এর সাথে টেকএনালাইজেন
                  এর ক্লাশরুমে বসে ক্লাশ করতে পারবেন।
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
                    <h6 className="mb-0"> {/* Created by */} প্রস্তুতকারক</h6>
                    <a href="#"> {/* Alison Dawn */}মোঃ রকিবুল হাসান</a>
                  </div>

                  <div className="mb-4 mb-md-0 me-md-5 me-lg-4 me-xl-5 course-creator-category-box">
                    <h6 className="mb-0"> {/* Categories */} ক্যাটাগরি</h6>
                    <a href="#"> {/* Design */}ওয়েব ডেভেলপমেন্ট</a>
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
                    <p className="mb-5 ">
                      {' '}
                      {/* Do you want to become a UI/UX designer but you don't know
                            where to start? This course will allow you to develop your user interface design skills
                            and you can add UI designer to your CV and start getting clients for your skills. */}
                      আপনি কি ওয়েব ডিজাইনার/ডেভেলপার হতে চান কিন্তু আপনি জানেন
                      না কোথা থেকে শুরু করে হবে? এই কোর্সটি আপনাকে আপনার ওয়েব
                      ডিজাইন এবং ডেভেলপমেন্ট এ দক্ষতা অর্জন করে দেশে এবং দেশের
                      বাইরে লোকাল অথবা ফ্রিল্যান্স মার্কেটপ্লেস এ কাজ করতে
                      পারেন।
                    </p>
                    <p className="mb-5 ">
                      {' '}
                      {/* Hi everyone. I'm Arash and I'm a UI/UX designer. In this
                            course, I will help you learn and master Figma app comprehensively from scratch. Figma
                            is an innovative and brilliant tool for User Interface design. It's used by everyone
                            from entrepreneurs and start-ups to Apple, Airbnb, Facebook, etc. */}
                      সবাই কেমন আছেন. আমি মোঃ রকিবুল হাসান এবং আমি একজন ফুল
                      স্ট্যাক ওয়েব ডিজাইনার এবং ডেভেলপার। এই কোর্সে অবশ্যই আমি
                      আপনাকে স্ক্র্যাচ থেকে ব্যাপকভাবে ওয়েব ডিজাইন এবং
                      ডেভেলপমেন্ট শিখতে এবং মাস্টার করতে সাহায্য করব এবং আমরা
                      একসাথে ফেসবুক, টুইটার বা দারাজ এর মত ওয়েব সাইট তৈরি করা
                      শিখবো।
                    </p>
                  </>

                  {/* What you'll learn */}
                  <>
                    <h3 className="mb-5">
                      {' '}
                      {/* What you'll learn */} আপনি কী কী শিখবেন
                    </h3>
                    <div className="row row-cols-lg-2 mb-5">
                      <div className="col-md">
                        <ul className="list-style-v1 list-unstyled">
                          <li>
                            <img
                              className="tick-inc"
                              src="/assets/images/svg/tick-mark.svg"
                            />
                            {/* Become a UI/UX designer. */}
                            এইচটিএমএল
                          </li>
                          <li>
                            <img
                              className="tick-inc"
                              src="/assets/images/svg/tick-mark.svg"
                            />{' '}
                            {/* You will be able to start earning money skills. */}
                            সিএসএস
                          </li>
                          <li>
                            <img
                              className="tick-inc"
                              src="/assets/images/svg/tick-mark.svg"
                            />{' '}
                            {/* Build a UI project from beginning to end. */}
                            শুরু থেকে শেষ পর্যন্ত পূর্নাঙ্গ ওয়েবসাইট তৈরি
                          </li>
                          <li>
                            <img
                              className="tick-inc"
                              src="/assets/images/svg/tick-mark.svg"
                            />
                            {/* Work with colors and fonts. */}
                            সিএসএস প্রি-প্রোসেসর (SASS/LESS)
                          </li>
                          <li>
                            <img
                              className="tick-inc"
                              src="/assets/images/svg/tick-mark.svg"
                            />
                            {/* You will create your own UI Kit. */}
                            সিএসএস ফ্রেমওয়ার্ক (বুথস্ট্র্যাপ, টেইলউইন্ড সিএসএস)
                          </li>
                        </ul>
                      </div>

                      <div className="col-md">
                        <ul className="list-style-v1 list-unstyled ms-xl-6">
                          <li>
                            <img
                              className="tick-inc"
                              src="/assets/images/svg/tick-mark.svg"
                            />{' '}
                            {/* Build and test a complete mobile app. */}
                            রিয়েক্ট
                          </li>
                          <li>
                            <img
                              className="tick-inc"
                              src="/assets/images/svg/tick-mark.svg"
                            />{' '}
                            {/* Learn to design mobile apps and websites. */}
                            মোবাইল অ্যাপ এবং ওয়েবসাইট ডিজাইন
                          </li>
                          <li>
                            <img
                              className="tick-inc"
                              src="/assets/images/svg/tick-mark.svg"
                            />
                            {/* Design 3 different logos. */}
                            নোড, এক্সপ্রেস
                          </li>
                          <li>
                            <img
                              className="tick-inc"
                              src="/assets/images/svg/tick-mark.svg"
                            />
                            {/* Create low-fidelity wireframe. */}
                            মঙ্গোডিবি, MySQL ডাটাবেজ
                          </li>
                          <li>
                            <img
                              className="tick-inc"
                              src="/assets/images/svg/tick-mark.svg"
                            />{' '}
                            {/* Downloadable exercise files. */}
                            একজন দক্ষ ওয়েব ডিজাইনার এবং ডেভেলপার হিসেবে দক্ষতা
                            অর্জন
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>

                  {/* Requirements */}
                  <>
                    <h3 className="mb-5"> {/* Requirements */} যা যা লাগবে</h3>
                    <ul className="list-style-v2 list-unstyled">
                      <li>
                        <img
                          className="dot-inc"
                          src="/assets/images/svg/dot-icon.svg"
                        />
                        <p>
                          {' '}
                          {/* We do not
                    require any previous experience or pre-defined skills to take this course.
                    A great orientation would be enough to master UI/UX design. */}{' '}
                        </p>
                        এই কোর্সটি করার জন্য আমাদের কোনো পূর্ব অভিজ্ঞতা বা
                        পূর্বনির্ধারিত দক্ষতার প্রয়োজন নেই। শুধু কম্পিউটার
                        ফান্ডামেন্টাল জানা থাকাই যথেষ্ট হবে।
                      </li>
                      <li>
                        <img
                          className="dot-inc"
                          src="/assets/images/svg/dot-icon.svg"
                        />
                        <p>
                          {/* A
                    computer with a good internet connection. */}
                          একটি ভাল ইন্টারনেট সংযোগ সহ কম্পিউটার।
                        </p>
                      </li>
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
                              <div className="badge me-5 py-2">3 question</div>
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
                              <div className="badge me-5  py-2">3 question</div>
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

                              <div className="accordion-title ms-4">Layout</div>
                            </div>

                            <div className="d-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all">
                              <div className="badge me-5 ">12 lectures</div>
                              <div className="badge me-5  py-2">5 question</div>
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
                              <div className="badge me-5  py-2">5 question</div>
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
                        experiences and solved complex problems using innovative
                        solutions. I am also the proud founder of "Coding Club
                        Bangladesh," a YouTube channel where I create video
                        lessons to empower and educate students in the field of
                        web development.
                      </p>
                      <p className="mb-4 ins-summary">
                        Skills: Front-end Development: Proficient in HTML, CSS,
                        JavaScript, and modern front-end frameworks like
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
              <div className="col-lg-4 col-md-12 mt-5 course-enroll-box">
                {/* enrool box */}
                <div className="course-des d-block border p-2 shadow mb-5">
                  {/* course img */}
                  <a
                    href="https://www.youtube.com/watch?v=9I-Y6VQ6tyI"
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
                    {/* price */}
                    <div className="d-flex align-items-center mb-2 price-of-course">
                      <h2 className="mb-0"> {/* ৳5,000 */}৳৭,৯৯৯</h2>
                      <del className="ms-3"> {/* ৳8,000 */}৳৯,৯৯৯</del>
                      <div className="badge text-white ms-auto fw-normal">
                        {' '}
                        {/* 10% off */}২৫% ছাড়
                      </div>
                    </div>

                    <div className="d-flex align-items-center days-left mb-5">
                      {/* Icon */}
                      <img src="/assets/images/svg/offer-clock.svg" alt="" />
                      <span className="ms-3">
                        {' '}
                        {/* Only 2 days left to start course */}মাত্র ২ দিন বাকি
                        কোর্স শুরুর
                      </span>
                    </div>
                    {/* buttons */}
                    {/* buy now */}
                    <button
                      className="buy-btn btn btn-primary btn-block mb-3"
                      type="button"
                      name="button"
                    >
                      {/* BUY */}
                      {/* NOW */}এখনি কিনুন
                    </button>
                    {/* enroll now */}
                    <button
                      className="enroll-btn btn btn-orange btn-block mb-5"
                      type="button"
                      name="button"
                    >
                      {' '}
                      {/* ENROLL */} এনরোল
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
                        <span> {/* 43 weeks */} ৪৩ সপ্তাহ</span>
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
                        <span>৩২</span>
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
                        <span> {/* 100 students */}১০০ জন</span>
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
                        <span> {/* beginner */}শিক্ষানবিস</span>
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
                        <span> {/* 06 April 2020 */}০৬ এপ্রিল ২০২২</span>
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
                        <span> {/* Yes */}দেওয়া হবে</span>
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
                    <li className="media d-flex mb-5">
                      <a href="#" className="w-100p d-block me-4">
                        <img
                          src="/assets/images/single-course/single-product.jpg"
                          alt="..."
                          className="avatar-img w-100p"
                        />
                      </a>
                      <div className="media-body flex-grow-1">
                        <a href="#" className="d-block">
                          <h6 className=" mb-3">
                            {/*  Web Development  and Design */}
                            ফুল স্ট্যাক ওয়েব ডিজাইন এবং ডেভেলপমেন্ট (অফলাইন)
                          </h6>
                        </a>
                        <del className="me-4 mb-5"> {/* ৳5,000 */}৯,৯৯৯</del>
                        <ins className="mb-5 "> {/* ৳8,000৳ */}৭,৯৯৯</ins>
                      </div>
                    </li>
                    <li className="media d-flex mb-5">
                      <a href="#" className="w-100p d-block me-4">
                        <img
                          src="/assets/images/single-course/single-product.jpg"
                          alt="..."
                          className="avatar-img w-100p"
                        />
                      </a>
                      <div className="media-body flex-grow-1">
                        <a href="#" className="d-block">
                          <h6 className=" mb-3">
                            {/*  Web Development  and Design */}
                            ফুল স্ট্যাক ওয়েব ডিজাইন এবং ডেভেলপমেন্ট (লাইভ
                            ক্লাশ)
                          </h6>
                        </a>
                        <del className="me-4 mb-5"> {/* ৳5,000 */}৳৮,৭৫০</del>
                        <ins className="mb-5 "> {/* ৳8,000৳ */}৬,৯৯৯</ins>
                      </div>
                    </li>
                    <li className="media d-flex mb-5">
                      <a href="#" className="w-100p d-block me-4">
                        <img
                          alt=""
                          src="/assets/images/single-course/single-product.jpg"
                          className="avatar-img w-100p"
                        />
                      </a>
                      <div className="media-body flex-grow-1">
                        <a href="#" className="d-block">
                          <h6 className=" mb-3">
                            {/*  Web Development  and Design */}
                            ফুল স্ট্যাক ওয়েব ডিজাইন এবং ডেভেলপমেন্ট
                            (প্রি-রেকর্ডেড)
                          </h6>
                        </a>
                        <del className="me-4 mb-5"> {/* ৳5,000 */}৳৭,৪৯৯</del>
                        <ins className="mb-5 "> {/* ৳8,000৳ */}৫,৯৯৯</ins>
                      </div>
                    </li>
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
};

export default Offline;
