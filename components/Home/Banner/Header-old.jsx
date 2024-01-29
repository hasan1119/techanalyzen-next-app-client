import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/features/user/user';
import axiosClient from '../../../utilities/axios';

const Header = () => {
  const {
    user: { _id, firstName, username, lastName },
  } = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const logoRef = useRef();

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
        logoRef.current && (logoRef.current.src = '/logo/logo_black.png');
      } else {
        navigation.style.background = 'transparent';
        navigation.style.boxShadow = 'none';
        logoRef.current && (logoRef.current.src = '/logo/logo_white.png');
      }
    });
  }, []);

  const logoutHandler = () => {
    axiosClient
      .get('/auth/v1/logout')
      .then(({ data }) => {
        if (data.status === 'ok') {
          dispatch(logout());
          router.push('/login');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <header>
      <nav id="navbar">
        <div className="navbar container">
          <button className="bx bx-menu bg-transparent border-0 menu-toggler">
            <FaBars className="" />
          </button>
          <div className="logo">
            <Link href="/">
              <img ref={logoRef} src="/logo/logo_white.png" alt="Logo" />
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
            <ul className="links menu_bar_left">
              <li>
                <a href="#">হোম</a>
              </li>
              <li>
                <a href="#">আরো জানুন</a>
              </li>
              <li>
                <a href="#">যোগাযোগ করুন</a>
              </li>
            </ul>

            <ul className="links getting_started">
              {!_id ? (
                <>
                  <li className="register-btn">
                    <Link href="/register">
                      <a>
                        <span className="register-text">রেজিষ্টার</span>
                      </a>
                    </Link>
                  </li>
                  <li className="SignIn-btn">
                    <Link href="/login">
                      <a>
                        <span className="SignIn-text">লগইন</span>
                      </a>
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <div>
                    <a href="#">
                      হ্যালো, {firstName} {lastName}
                    </a>
                    <img
                      alt=""
                      src="/assets/images/svg/user.svg"
                      className="bx bxs-chevron-down user-svg user-icon"
                    />
                  </div>
                  <ul className="js-sub-menu sub-menu">
                    <div className="profile_img">
                      <img src="/assets/images/svg/user.svg" alt="Profile" />
                    </div>
                    <h3 className="displayName">
                      {firstName} {lastName}
                    </h3>
                    <li>
                      <Link href="/dashboard">
                        <a className="px-4">ড্যাসবোর্ড 2</a>
                      </Link>
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
                    <li onClick={logoutHandler}>
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
