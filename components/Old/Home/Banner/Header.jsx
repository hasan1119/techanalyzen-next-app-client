import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const {
    user: { _id, firstName, username },
  } = useSelector((state) => state.user);

  useEffect(() => {
    // navbar open close js code
    let navbar = document.querySelector('.navbar');

    // sidebar open close js code
    let navLinks = document.querySelector('.nav-links');
    let menuOpenBtn = document.querySelector('.navbar .bx-menu');
    let menuCloseBtn = document.querySelector('.nav-links .bx-x');
    menuOpenBtn.onclick = function () {
      navLinks.style.left = '0';
    };
    menuCloseBtn.onclick = function () {
      navLinks.style.left = '-100%';
    };

    // sidebar submenu open close js code
    let courseArrow = document.querySelector('.course-arrow');
    courseArrow.onclick = function () {
      navLinks.classList.toggle('show1');
    };
    let moreArrow = document.querySelector('.more-arrow');
    moreArrow.onclick = function () {
      navLinks.classList.toggle('show2');
    };
    let useSvg = document.querySelector('.user-svg');
    useSvg &&
      (useSvg.onclick = function () {
        navLinks.classList.toggle('show3');
      });

    const navigation = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        // background: #fff;
        // box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        navigation.style.background = '#fff';
        navigation.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.2)';
      } else {
        navigation.style.background = 'transparent';
        navigation.style.boxShadow = 'none';
      }
    });
  }, []);

  return (
    <header>
      <nav id="navbar">
        <div className="navbar container">
          <img
            alt=""
            src="/assets/images/svg/menu.svg"
            className="bx bx-menu"
          />
          <div className="logo">
            <Link href="/">
              <h1>লোগো</h1>
            </Link>
          </div>
          <div className="nav-links">
            <div className="sidebar-logo">
              <span className="logo-name">
                <img src="" alt="" />
              </span>
              <img
                alt=""
                src="/assets/images/svg/cross.svg"
                className="bx bx-x"
              />
            </div>
            <ul className="links">
              <li>
                <a href="#">হোম</a>
              </li>
              <li className="courses-arrow">
                <a href="#">কোর্স</a>
                <img
                  alt=""
                  src="/assets/images/svg/down-arrow.svg"
                  className="bx bxs-chevron-down course-arrow arrow"
                />
                <ul className="htmlCss-sub-menu sub-menu">
                  <li>
                    <a href="#">WEB DESIGN</a>
                  </li>
                  <li>
                    <a href="#">SignIn FORMS</a>
                  </li>
                  <li>
                    <a href="#">CARD DESIGN</a>
                  </li>
                  <li className="more">
                    <span>
                      <a href="#">MORE</a>
                      <img
                        alt=""
                        src="/assets/images/svg/right-arrow.svg"
                        className="bx bxs-chevron-right arrow more-arrow"
                      />
                    </span>
                    <ul className="more-sub-menu sub-menu">
                      <li>
                        <a href="#">GRAPHICS DESIGN</a>
                      </li>
                      <li>
                        <a href="#">3D ANIMATION</a>
                      </li>
                      <li>
                        <a href="#">LINUX TESTING</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">আরো জানুন</a>
              </li>
              <li>
                <a href="#">যোগাযোগ করুন</a>
              </li>
              <li className="change-lan">
                <a href="#">
                  <img
                    className="me-3"
                    width="24"
                    src="/assets/images/american-flag.png"
                    alt="ENG"
                  />
                  ENG
                </a>
              </li>
              <li className="theme-mode-btn">
                <img src="/assets/images/svg/dark-theme.svg" alt="" />
              </li>

              {!_id ? (
                <li className="SignIn-btn">
                  <Link href="/signin">
                    <a>
                      <span className="SignIn-text">লগইন</span>
                    </a>
                  </Link>
                </li>
              ) : (
                <li>
                  <div>
                    <a href="#">হ্যালো, {firstName}</a>
                    <img
                      alt=""
                      src="/assets/images/svg/user.svg"
                      className="bx bxs-chevron-down user-svg user-icon"
                    />
                  </div>
                  <ul className="js-sub-menu sub-menu">
                    <li>
                      <a href="#" className="px-4">
                        ড্যাসবোর্ড
                      </a>
                      <img alt="" src="/assets/images/svg/dash-board.svg" />
                    </li>
                    <li>
                      <a href="#" className="px-4">
                        প্রোফাইল
                      </a>
                      <img src="/assets/images/svg/profile.svg" alt="" />
                    </li>
                    <li>
                      <a
                        href="./pages/notifications/notifications.html"
                        className="px-4"
                      >
                        নোটিফিকেশন
                      </a>
                      <img
                        alt=""
                        src="/assets/images/svg/notification-svgrepo-com.svg"
                      />
                    </li>
                    <li>
                      <a className="px-4">লগআউট</a>
                      <img src="/assets/images/svg/logout.svg" alt="" />
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
