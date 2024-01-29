import React from 'react';
import { FaCriticalRole } from 'react-icons/fa';

const Layout = () => {
  return (
    <div className="courses-category">
      <div className="course_top">
        <div className="container">
          <div className="course_heading">
            <div className="title">
              <h2>Course Category</h2>
              <h5>Instructory Course Directories</h5>
              <p>One Stop Solution For All of your on-demand courses.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="course_layout">
          <div className="row">
            <div className="col-xl-3 bg-light px-2">
              <div className="left_area h-100">
                <div className="search">
                  <svg
                    className="search_icon"
                    fill="#535353"
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="rotate(90)"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z"
                        fillRule="evenodd"
                      />
                    </g>
                  </svg>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search For Course"
                  />
                </div>

                <ul className="nav flex-column ms-0 flex-start1 pt-5">
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbarDropdownMenuLink"
                      role="button"
                      aria-expanded="false"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      aria-controls="collapseExample"
                    >
                      Marketplace
                    </a>
                    <ul
                      className="collapse"
                      aria-labelledby="navbarDropdownMenuLink"
                      id="collapseExample"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          - Fiver
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          - Upwork
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          - Frelancer
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      aria-expanded="false"
                      data-bs-toggle="collapse"
                      aria-controls="collapseExample2"
                    >
                      Marketplace
                    </a>
                    <ul
                      className="collapse"
                      aria-labelledby="navbarDropdownMenuLink"
                      id="collapseExample2"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          - Fiver
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          - Upwork
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          - Frelancer
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                    >
                      Marketplace
                    </a>
                    <ul
                      className="collapse"
                      aria-labelledby="navbarDropdownMenuLink"
                      id="collapseExample3"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          - Fiver
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          - Upwork
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          - Frelancer
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="collapse"
                      href="#collapseExample4"
                      aria-expanded="false"
                    >
                      Marketplace
                    </a>
                    <ul
                      className="collapse"
                      aria-labelledby="navbarDropdownMenuLink"
                      id="collapseExample4"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          - Fiver
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          - Upwork
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          - Frelancer
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="course_boxes px-4">
                <div className="top_title">
                  <h3>LEARN ANYTHING</h3>
                </div>
                <div className="courses_area mt-5 mb-5 pb-5 pt-5">
                  <div className="row">
                    <div className="col-xl-4">
                      <div className="card">
                        <div>
                          <div className="course-img">
                            <img
                              src="/assets/images/bg.png"
                              className="card-img-top img-fluid"
                              alt="..."
                            />
                            <FaCriticalRole className="course_icon" />
                          </div>

                          <div classname="card-body">
                            <div className="course_title">
                              <h4> Marketplace </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="card">
                        <div>
                          <div className="course-img">
                            <img
                              src="/assets/images/bg.png"
                              className="card-img-top img-fluid"
                              alt="..."
                            />
                            <FaCriticalRole className="course_icon" />
                          </div>

                          <div classname="card-body">
                            <div className="course_title">
                              <h4> Marketplace </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="card">
                        <div>
                          <div className="course-img">
                            <img
                              src="/assets/images/bg.png"
                              className="card-img-top img-fluid"
                              alt="..."
                            />
                            <FaCriticalRole className="course_icon" />
                          </div>

                          <div classname="card-body">
                            <div className="course_title">
                              <h4> Marketplace </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="card">
                        <div>
                          <div className="course-img">
                            <img
                              src="/assets/images/bg.png"
                              className="card-img-top img-fluid"
                              alt="..."
                            />
                            <FaCriticalRole className="course_icon" />
                          </div>

                          <div classname="card-body">
                            <div className="course_title">
                              <h4> Marketplace </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="card">
                        <div>
                          <div className="course-img">
                            <img
                              src="/assets/images/bg.png"
                              className="card-img-top img-fluid"
                              alt="..."
                            />
                            <FaCriticalRole className="course_icon" />
                          </div>

                          <div classname="card-body">
                            <div className="course_title">
                              <h4> Marketplace </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="card">
                        <div>
                          <div className="course-img">
                            <img
                              src="/assets/images/bg.png"
                              className="card-img-top img-fluid"
                              alt="..."
                            />
                            <FaCriticalRole className="course_icon" />
                          </div>

                          <div classname="card-body">
                            <div className="course_title">
                              <h4> Marketplace </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
