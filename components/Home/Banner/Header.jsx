import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/features/user/user';
import axiosClient from '../../../utilities/axios';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuTogglerRef = useRef();
  const mobileNavbar = useRef();
  const closeRef = useRef();
  const navbarRef = useRef();
  const logoRef = useRef();
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    user: { _id, firstName, username, lastName, avatar },
  } = useSelector((state) => state.user);

  useEffect(() => {
    // menu toggler open and close
    menuTogglerRef.current.onclick = function () {
      if (!isOpen) {
        mobileNavbar.current.style.left = '0%';
        setIsOpen(!isOpen);
      } else {
        mobileNavbar.current.style.left = '-100%';
        setIsOpen(!isOpen);
      }
    };

    // mobile navbar inner close
    closeRef.current.onclick = function () {
      mobileNavbar.current.style.left = '-100%';
      setIsOpen(!isOpen);
    };

    // scroll navigation
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 50) {
        navbarRef.current && (navbarRef.current.style.background = '#fff');
        navbarRef.current &&
          (navbarRef.current.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.2)');
        logoRef.current &&
          (window.location.pathname == '/'
            ? (logoRef.current.src = '/logo/logo_black.png')
            : (logoRef.current.src = '/logo/logo_black.png'));
      } else {
        navbarRef.current &&
          (navbarRef.current.style.background = 'transparent');
        navbarRef.current && (navbarRef.current.style.boxShadow = 'none');
        logoRef.current &&
          (window.location.pathname == '/'
            ? (logoRef.current.src = '/logo/logo_white.png')
            : (logoRef.current.src = '/logo/logo_black.png'));
      }
    });
  }, [isOpen]);

  // mobile side navbar close
  function openShow() {
    mobileNavbar.current.style.left = '-100%';
    setIsOpen(!isOpen);
  }

  // logout handler
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
    <>
      <div className="devMsg">
        <marquee behavior="" direction="left">
          The website is currently under development. some of the functionality
          might not work perfectly. it can take 2-3 days to complete, please
          call us if you need any help
        </marquee>
      </div>
      <header>
        <nav className="d-flex" ref={navbarRef}>
          <div className="navbar container">
            <button className="menu-toggler-btn" ref={menuTogglerRef}>
              <FaBars className="" />
            </button>
            <div className="logo">
              <Link href="/">
                <img
                  ref={logoRef}
                  src={
                    window.location.pathname == '/'
                      ? '/logo/logo_white.png'
                      : '/logo/logo_black.png'
                  }
                  alt="Logo"
                />
              </Link>
            </div>

            <ul className="nav-public-menu">
              <li className="menu-item">
                <Link href="/">
                  <a>হোম</a>
                </Link>
              </li>
              {/* <li className="menu-item">
                <Link href="/courses">
                  <a>কোর্সসমুহ</a>
                </Link>
              </li> */}
              <li className="menu-item">
                <Link href="/about-us">
                  <a>আমাদের সম্পর্কে</a>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/contact-us">
                  <a>যোগাযোগ করুন</a>
                </Link>
              </li>
            </ul>

            <ul className="nav-auth-menu">
              {!_id ? (
                <>
                  <li className=" menu-item">
                    <Link href="/register">
                      <a>
                        <span className="register-btn">রেজিষ্টার</span>
                      </a>
                    </Link>
                  </li>
                  <li className="menu-item signin">
                    <Link href="/login">
                      <a>
                        <span className="signin-btn">লগইন</span>
                      </a>
                    </Link>
                  </li>
                </>
              ) : (
                <li className="auth-profile menu-item">
                  <div className="profile_icon">
                    <a href="#">
                      হ্যালো, {firstName} {lastName}
                    </a>
                    <img
                      alt=""
                      src={
                        avatar
                          ? `/files/thumb/profile/${avatar}`
                          : '/assets/images/svg/user.svg'
                      }
                      className="ms-2"
                    />
                  </div>
                  <ul className="auth-sub-menu">
                    <div className="profileImg">
                      <img
                        src={
                          avatar
                            ? `/files/thumb/profile/${avatar}`
                            : '/assets/images/svg/user.svg'
                        }
                        alt="Profile"
                      />
                    </div>
                    <h3 className="displayName">
                      {firstName} {lastName}
                    </h3>

                    <li className="sub-menu-item">
                      <Link href="/dashboard">
                        <a className="">ড্যাসবোর্ড</a>
                      </Link>
                      <img alt="" src="/assets/images/svg/dash-board.svg" />
                    </li>
                    <li className="sub-menu-item">
                      <Link href="/dashboard/profile">
                        <a className="">প্রোফাইল</a>
                      </Link>
                      <img src="/assets/images/svg/profile.svg" alt="" />
                    </li>
                    <li className="sub-menu-item">
                      <Link href="/notification">
                        <a href="#" className="">
                          নোটিফিকেশন
                        </a>
                      </Link>
                      <img
                        alt=""
                        src="/assets/images/svg/notification-svgrepo-com.svg"
                      />
                    </li>
                    <li className="sub-menu-item" onClick={logoutHandler}>
                      <a className="">লগআউট</a>
                      <img src="/assets/images/svg/logout.svg" alt="" />
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>

          <div className="mobile-navbar container" ref={mobileNavbar}>
            <div className="mobile-nav-logo">
              <span className="m-logo">
                <img src="/logo/logo_black.png" alt="Logo" />
              </span>
              <img
                alt=""
                src="/assets/images/svg/cross.svg"
                className=""
                ref={closeRef}
              />
            </div>
            <ul className="mobile-menu">
              <li onClick={() => openShow()}>
                <a href="#">হোম</a>
              </li>
              <li onClick={() => openShow()}>
                <Link href="/dashboard">
                  <a className="">ড্যাসবোর্ড</a>
                </Link>
              </li>
              <li onClick={() => openShow()}>
                <a href="#" className="">
                  প্রোফাইল
                </a>
              </li>
              <li onClick={() => openShow()}>
                <a href="./pages/notifications/notifications.html" className="">
                  নোটিফিকেশন
                </a>
              </li>

              <li onClick={() => openShow()}>
                <a href="#">আরো জানুন</a>
              </li>
              <li>
                <a href="#">যোগাযোগ করুন</a>
              </li>
              {!_id ? (
                <>
                  {' '}
                  <li className="register-btn" onClick={() => openShow()}>
                    <Link href="/register">
                      <a>
                        <span className="register-text">রেজিষ্টার</span>
                      </a>
                    </Link>
                  </li>
                  <li className="SignIn-btn" onClick={() => openShow()}>
                    <Link href="/login">
                      <a>
                        <span className="signin-btn">লগইন</span>
                      </a>
                    </Link>
                  </li>
                </>
              ) : (
                <li onClick={logoutHandler}>
                  <button className="logout-btn">লগআউট</button>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
