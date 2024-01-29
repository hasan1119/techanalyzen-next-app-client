import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container main-footer-item">
        <div className="middle-part">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 me-auto">
              <Link href="/">
                <a className="footer-logo">
                  <img
                    className="footer_logo"
                    src="/logo/logo_white.png"
                    alt="Logo"
                  />
                </a>
              </Link>
              <p className="text-size-16 footer-text text-white">
                Unlock Your IT Potential: Empowering Excellence
              </p>

              <ul className="list-unstyled mb-0 social-icons d-block">
                <li className="circle me-3">
                  <a
                    href="https://www.facebook.com/techanalyzen"
                    target="_blank"
                  >
                    <img
                      alt=""
                      src="/assets/images/svg/facebook-svgrepo-com.svg"
                    />
                  </a>
                </li>
                <li className="circle me-3">
                  <a
                    href="https://www.linkedin.com/company/techanalzyen"
                    target="_blank"
                  >
                    <img
                      alt=""
                      src="/assets/images/svg/linkedin-svgrepo-com.svg"
                    />
                  </a>
                </li>
                <li className="circle me-3">
                  <a href="https://twitter.com/RokibulDev" target="_blank">
                    <img
                      alt=""
                      src="/assets/images/svg/twitter-svgrepo-com.svg"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="links footer-content-left">
                <h4 className="heading text-white">কুইক লিঙ্ক</h4>
                <ul className="list-unstyled mb-0 d-block">
                  <li>
                    <img
                      alt=""
                      src="/assets/images/svg/arrow-right-svgrepo-com.svg"
                    />
                    <a
                      href="./index.html"
                      className="text-size-16 text text-decoration-none"
                    >
                      আপকামিং লাইভ ব্যাচ
                    </a>
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/assets/images/svg/arrow-right-svgrepo-com.svg"
                    />
                    <a
                      href="./about.html"
                      className="text-size-16 text text-decoration-none"
                    >
                      ফ্রী লাইভ ক্লাস
                    </a>
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/assets/images/svg/arrow-right-svgrepo-com.svg"
                    />
                    <a
                      href="./service.html"
                      className="text-size-16 text text-decoration-none"
                    >
                      লাইভ ওয়ার্কশপ
                    </a>
                  </li>
                  <li>
                    <img
                      src="/assets/images/svg/arrow-right-svgrepo-com.svg"
                      alt=""
                    />
                    <a
                      href="./projects.html"
                      className="text-size-16 text text-decoration-none"
                    >
                      জয়েন করুন এক্সপার্টদের টিমে
                    </a>
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/assets/images/svg/arrow-right-svgrepo-com.svg"
                    />
                    <a
                      href="./contact.html"
                      className=" text-size-16 text text-decoration-none"
                    >
                      ব্লগ
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="links company footer-content-left">
                <h4 className="heading text-white">কোম্পানী</h4>
                <ul className="list-unstyled mb-0 d-block">
                  <li>
                    <img
                      alt=""
                      src="/assets/images/svg/arrow-right-svgrepo-com.svg"
                    />
                    <Link href="/about-us">
                      <a className=" text-size-16 text text-decoration-none">
                        আমাদের সম্পর্কে
                      </a>
                    </Link>
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/assets/images/svg/arrow-right-svgrepo-com.svg"
                    />
                    <Link href="/supported-browsers">
                      <a className=" text-size-16 text text-decoration-none">
                        সাপোর্টেড ব্রাউজার
                      </a>
                    </Link>
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/assets/images/svg/arrow-right-svgrepo-com.svg"
                    />
                    <Link href="/refund-policy">
                      <a className="text-size-16 text text-decoration-none">
                        রিফান্ড পলিসি
                      </a>
                    </Link>
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/assets/images/svg/arrow-right-svgrepo-com.svg"
                    />
                    <Link href="/privacy-policy">
                      <a className=" text-size-16 text text-decoration-none">
                        প্রাইভেসী পলিসি
                      </a>
                    </Link>
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/assets/images/svg/arrow-right-svgrepo-com.svg"
                    />
                    <Link href="/terms-and-conditions">
                      <a className=" text-size-16 text text-decoration-none">
                        টার্মস এবং শর্তাবলী
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="icon footer-content-left">
                <h4 className="heading text-white">যোগাযোগ</h4>
                <ul className="list-unstyled mb-0 position-relative d-block">
                  <li className="text">
                    <img src="/assets/images/svg/phone.svg" alt="phone" />
                    <a
                      href="tel:+4733378901"
                      className="mb-0 text text-decoration-none text-size-16"
                    >
                      +880 1763-251119
                    </a>
                  </li>
                  <li className="text">
                    <img src="/assets/images/svg/email.svg" alt="email" />
                    <a
                      href=""
                      className="mb-0 text text-decoration-none text-size-16"
                    >
                      support@techanalyzen.com
                    </a>
                  </li>
                  <li className="text address">
                    <img src="/assets/images/svg/location.svg" alt="address" />
                    <p className="text-size-16">
                      Mohsin Villa, Bihari Coloy, Ukilpara Road, Naogaon Sadar,
                      Naogaon - 6500
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="row">
            <div className="col-12">
              <p className="mb-0 text-white">
                Copyright 2023, Techanalyzen.com All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
