import React from 'react';

const CourseAccordion = () => {
  return (
    <>
      <div className="border rounded shadow mb-5 overflow-hidden">
        <div className="d-flex align-items-center" id="curriculumheadingOne">
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

              <div className="accordion-title ms-4">Introduction</div>
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

              <div className="accordion-title ms-4">Required Tools</div>
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

              <div className="accordion-title ms-4">Get Your Free E-book</div>
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
        <div className="d-flex align-items-center" id="curriculumheadingTwo">
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

              <div className="accordion-title ms-4">Intro to Design Basics</div>
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

              <div className="accordion-title ms-4">Visual hierarchy</div>
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

              <div className="accordion-title ms-4">Visual noise</div>
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

              <div className="accordion-title ms-4">Iconography</div>
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

              <div className="accordion-title ms-4">Typography</div>
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
  );
};

export default CourseAccordion;
