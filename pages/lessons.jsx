import Link from 'next/link';
import React, { useState } from 'react';
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
  AiOutlineCopyright,
  AiOutlinePlayCircle,
  AiOutlineStop,
} from 'react-icons/ai';
import { BiSolidVideoOff } from 'react-icons/bi';
import { CiKeyboard, CiSearch } from 'react-icons/ci';
import { HiLockClosed } from 'react-icons/hi';
import { MdLaunch } from 'react-icons/md';
import { VscPassFilled } from 'react-icons/vsc';
import Header from '../components/Home/Banner/Header';
import Footer from '../components/Home/Footer/Footer';

const Lessons = () => {
  const [tab, setTab] = useState('one');
  function tabUpdate(tab, id) {
    setTab(tab);

    const select = document.getElementById(id);
    select.style.borderBottom = '2px solid green';
    if (id === 'tab-item-one') {
      document.getElementById('tab-item-two').style.borderBottom = 'none';
    } else {
      document.getElementById('tab-item-one').style.borderBottom = 'none';
    }
  }
  return (
    <>
      <Header />

      <div className="container lessons-container mt-5">
        <div className="video-content">
          <div className="video-player">
            <video src="" width="100%" controls></video>
          </div>
          <div className="lessons-btn">
            <button>
              <AiOutlineArrowLeft />
              <span className="mt-1 ms-2">আগের লেসন</span>
            </button>
            <button>
              <span className="mt-1 me-2">পরের লেসন</span>
              <AiOutlineArrowRight />
            </button>
          </div>
          <div className="instructions">
            <div className="instruction-item">
              <span className="icon">
                <AiOutlineCopyright />
              </span>
              <span
                className="instruction-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalToggle"
              >
                কপিরাইট
              </span>
            </div>
            <div className=" instruction-item keyboard">
              <span className="icon">
                <CiKeyboard />
              </span>
              <span
                className="instruction-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalKeyboard"
              >
                কিবোর্ড শর্টকাট
              </span>
            </div>
            <div className=" instruction-item">
              <span className="icon">
                <BiSolidVideoOff />
              </span>
              <Link href="/supported-browsers">
                <a className="instruction-btn" target="_blank">
                  ভিডিও চলছেনা?
                </a>
              </Link>
            </div>
            <div className=" instruction-item">
              <span className="icon">
                <AiOutlineStop />
              </span>
              <span className="instruction-btn">কুইজ নেই</span>
            </div>
          </div>
          <div className="tab-nav">
            <ul className="p-0 m-0">
              <li
                className="tab-item"
                id="tab-item-one"
                onClick={() => tabUpdate('one', 'tab-item-one')}
                style={{ borderBottom: '2px solid green' }}
              >
                ভিডিও ডেসক্রিপশন
              </li>
              <li
                className="tab-item"
                id="tab-item-two"
                onClick={() => tabUpdate('two', 'tab-item-two')}
              >
                রেফারেন্স
              </li>
            </ul>
          </div>
          <div className="tab-content">
            {tab === 'one' && (
              <>
                <div
                  className="accordion tab-content-accordion"
                  id="accordionExampleTwo"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTabOne"
                        aria-expanded="false"
                        aria-controls="collapseTabOne"
                      >
                        <div>
                          <strong>Introduction to course</strong>
                          <span>
                            Official course promo and introduction video for
                            this course
                          </span>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapseTabOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <hr />
                        <p>
                          টেকএনালাইজেন নিয়ে এসেছে তাদের প্রফেশনাল পেইড
                          রিয়্যাক্ট-রিডাক্স কোর্স "থিংক ইন এ রিডাক্স ওয়ে" -
                          "Think in a Redux way" Batch 2। সাথে থাকছে রিডাক্স
                          টুলকিট, আর.টি.কে কুয়ারি এবং থাংক। রিডাক্স এর মৌলিক এবং
                          আবশ্যিক বিষয়সমূহ বুঝার পাশাপাশি এই কোর্সের প্রজেক্ট
                          ভিত্তিক শেখানোর পদ্ধতি আপনাকে একজন দক্ষ রিডাক্স
                          প্রোগ্রামার হয়ে উঠতে সাহায্য করবে বলে আমাদের বিশ্বাস।
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-content-non-accordion">
                  <strong>Introduction to course</strong>
                  <span>
                    Official course promo and introduction video for this course
                  </span>
                  <hr />
                  <p>
                    টেকএনালাইজেন নিয়ে এসেছে তাদের প্রফেশনাল পেইড
                    রিয়্যাক্ট-রিডাক্স কোর্স "থিংক ইন এ রিডাক্স ওয়ে" - "Think in
                    a Redux way" Batch 2। সাথে থাকছে রিডাক্স টুলকিট, আর.টি.কে
                    কুয়ারি এবং থাংক। রিডাক্স এর মৌলিক এবং আবশ্যিক বিষয়সমূহ বুঝার
                    পাশাপাশি এই কোর্সের প্রজেক্ট ভিত্তিক শেখানোর পদ্ধতি আপনাকে
                    একজন দক্ষ রিডাক্স প্রোগ্রামার হয়ে উঠতে সাহায্য করবে বলে
                    আমাদের বিশ্বাস।
                  </p>
                </div>
              </>
            )}
            {tab === 'two' && (
              <>
                <strong> লেসন সম্পর্কিত গুরুত্বপূর্ণ লিঙ্ক</strong>
                <hr />
                <div className="lesson-link">
                  <span className="lesson-icon">
                    <MdLaunch />
                  </span>
                  <Link href="#">
                    <a target="_blank">এনরোল করুন</a>
                  </Link>
                </div>
                <div className="lesson-link">
                  <span className="lesson-icon">
                    <MdLaunch />
                  </span>
                  <Link href="#">
                    <a target="_blank">কিভাবে এনরোল করবেন</a>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="lessons-content">
          <div className="mb-3 search-bar">
            <label id="label" htmlFor="input" className="search-icon">
              <CiSearch />
            </label>
            <input
              type="text"
              className="form-control search-box"
              placeholder="কোর্স লেসন সার্চ করুন"
              aria-label="search"
            />
          </div>
          <div className="module-progress">
            <div className="progress-text">
              <span className="progress-mod">
                4 / 14 টি মডিউল শেষ করেছেন · অগ্রগতি 28.57%
              </span>
              <span className="progress-cer">
                সার্টিফিকেট পেতে সবগুলো মডিউল শেষ করুন
              </span>
            </div>
            <div
              className="progress progressbar"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-success"
                style={{ width: '25%' }}
              ></div>
            </div>
          </div>
          <div className="accordion all-modules" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed module-item"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <span className="module">
                    <span className="module-title">
                      Module 1 : Portfolio Design
                    </span>
                    <span className="module-sub-title">
                      <span className="module-duration">2:34:32 hours</span>
                      <span>|</span>
                      <span className="module-deadline ">
                        ডেডলাইনঃ 23 Feb 2024 12:00:00 AM
                      </span>
                    </span>
                  </span>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="lesson-item">
                    <div className="video-icon">
                      <AiOutlinePlayCircle />
                    </div>

                    <div className="video-title">
                      <div className="lesson-item-top">
                        <span className="title">Video Title</span>

                        <span className="title-icon">
                          <span className="locked-icon">
                            <HiLockClosed />
                          </span>
                          <span className="complete-icon">
                            <VscPassFilled />
                          </span>
                        </span>
                      </div>
                      <div className="lesson-item-bottom">
                        <span className="duration">2:43 minute</span>
                      </div>
                    </div>
                  </div>
                  <div className="lesson-item">
                    <div className="video-icon">
                      <AiOutlinePlayCircle />
                    </div>

                    <div className="video-title">
                      <div className="lesson-item-top">
                        <span className="title">Video Title</span>
                        <span className="title-icon">
                          <span className="locked-icon">
                            <HiLockClosed />
                          </span>
                          <span className="complete-icon">
                            <VscPassFilled />
                          </span>
                        </span>
                      </div>
                      <div className="lesson-item-bottom">
                        <span className="duration">2:43 minute</span>
                      </div>
                    </div>
                  </div>
                  <div className="lesson-item">
                    <div className="video-icon">
                      <AiOutlinePlayCircle />
                    </div>

                    <div className="video-title">
                      <div className="lesson-item-top">
                        <span className="title">Video Title</span>
                        <span className="title-icon">
                          <span className="locked-icon">
                            <HiLockClosed />
                          </span>
                          <span className="complete-icon">
                            <VscPassFilled />
                          </span>
                        </span>
                      </div>
                      <div className="lesson-item-bottom">
                        <span className="duration">2:43 minute</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed module-item"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <span className="module">
                    <span className="module-title">
                      Module 1 : Portfolio Design
                    </span>
                    <span className="module-sub-title">
                      <span className="module-duration">2:34:32 hours</span>
                      <span>|</span>
                      <span className="module-deadline ">
                        ডেডলাইনঃ 23 Feb 2024 12:00:00 AM
                      </span>
                    </span>
                  </span>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="lesson-item">
                    <div className="video-icon">
                      <AiOutlinePlayCircle />
                    </div>

                    <div className="video-title">
                      <div className="lesson-item-top">
                        <span className="title">Video Title</span>
                        <span className="title-icon">
                          <span className="locked-icon">
                            <HiLockClosed />
                          </span>
                          <span className="complete-icon">
                            <VscPassFilled />
                          </span>
                        </span>
                      </div>
                      <div className="lesson-item-bottom">
                        <span className="duration">2:43 minute</span>
                      </div>
                    </div>
                  </div>
                  <div className="lesson-item">
                    <div className="video-icon">
                      <AiOutlinePlayCircle />
                    </div>

                    <div className="video-title">
                      <div className="lesson-item-top">
                        <span className="title">Video Title</span>
                        <span className="title-icon">
                          <span className="locked-icon">
                            <HiLockClosed />
                          </span>
                          <span className="complete-icon">
                            <VscPassFilled />
                          </span>
                        </span>
                      </div>
                      <div className="lesson-item-bottom">
                        <span className="duration">2:43 minute</span>
                      </div>
                    </div>
                  </div>
                  <div className="lesson-item">
                    <div className="video-icon">
                      <AiOutlinePlayCircle />
                    </div>

                    <div className="video-title">
                      <div className="lesson-item-top">
                        <span className="title">Video Title</span>
                        <span className="title-icon">
                          <span className="locked-icon">
                            <HiLockClosed />
                          </span>
                          <span className="complete-icon">
                            <VscPassFilled />
                          </span>
                        </span>
                      </div>
                      <div className="lesson-item-bottom">
                        <span className="duration">2:43 minute</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed module-item"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <span className="module">
                    <span className="module-title">
                      Module 1 : Portfolio Design
                    </span>
                    <span className="module-sub-title">
                      <span className="module-duration">2:34:32 hours</span>
                      <span>|</span>
                      <span className="module-deadline ">
                        ডেডলাইনঃ 23 Feb 2024 12:00:00 AM
                      </span>
                    </span>
                  </span>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="lesson-item">
                    <div className="video-icon">
                      <AiOutlinePlayCircle />
                    </div>

                    <div className="video-title">
                      <div className="lesson-item-top">
                        <span className="title">Video Title</span>
                        <span className="title-icon">
                          <span className="locked-icon">
                            <HiLockClosed />
                          </span>
                          <span className="complete-icon">
                            <VscPassFilled />
                          </span>
                        </span>
                      </div>
                      <div className="lesson-item-bottom">
                        <span className="duration">2:43 minute</span>
                      </div>
                    </div>
                  </div>
                  <div className="lesson-item">
                    <div className="video-icon">
                      <AiOutlinePlayCircle />
                    </div>

                    <div className="video-title">
                      <div className="lesson-item-top">
                        <span className="title">Video Title</span>
                        <span className="title-icon">
                          <span className="locked-icon">
                            <HiLockClosed />
                          </span>
                          <span className="complete-icon">
                            <VscPassFilled />
                          </span>
                        </span>
                      </div>
                      <div className="lesson-item-bottom">
                        <span className="duration">2:43 minute</span>
                      </div>
                    </div>
                  </div>
                  <div className="lesson-item">
                    <div className="video-icon">
                      <AiOutlinePlayCircle />
                    </div>

                    <div className="video-title">
                      <div className="lesson-item-top">
                        <span className="title">Video Title</span>
                        <span className="title-icon">
                          <span className="locked-icon">
                            <HiLockClosed />
                          </span>
                          <span className="complete-icon">
                            <VscPassFilled />
                          </span>
                        </span>
                      </div>
                      <div className="lesson-item-bottom">
                        <span className="duration">2:43 minute</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed module-item"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <span className="module">
                    <span className="module-title">
                      Module 1 : Portfolio Design
                    </span>
                    <span className="module-sub-title">
                      <span className="module-duration">2:34:32 hours</span>
                      <span>|</span>
                      <span className="module-deadline ">
                        ডেডলাইনঃ 23 Feb 2024 12:00:00 AM
                      </span>
                    </span>
                  </span>
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="lesson-item">
                    <div className="video-icon">
                      <AiOutlinePlayCircle />
                    </div>

                    <div className="video-title">
                      <div className="lesson-item-top">
                        <span className="title">Video Title</span>
                        <span className="title-icon">
                          <span className="locked-icon">
                            <HiLockClosed />
                          </span>
                          <span className="complete-icon">
                            <VscPassFilled />
                          </span>
                        </span>
                      </div>
                      <div className="lesson-item-bottom">
                        <span className="duration">2:43 minute</span>
                      </div>
                    </div>
                  </div>
                  <div className="lesson-item">
                    <div className="video-icon">
                      <AiOutlinePlayCircle />
                    </div>

                    <div className="video-title">
                      <div className="lesson-item-top">
                        <span className="title">Video Title</span>
                        <span className="title-icon">
                          <span className="locked-icon">
                            <HiLockClosed />
                          </span>
                          <span className="complete-icon">
                            <VscPassFilled />
                          </span>
                        </span>
                      </div>
                      <div className="lesson-item-bottom">
                        <span className="duration">2:43 minute</span>
                      </div>
                    </div>
                  </div>
                  <div className="lesson-item">
                    <div className="video-icon">
                      <AiOutlinePlayCircle />
                    </div>

                    <div className="video-title">
                      <div className="lesson-item-top">
                        <span className="title">Video Title</span>
                        <span className="title-icon">
                          <span className="locked-icon">
                            <HiLockClosed />
                          </span>
                          <span className="complete-icon">
                            <VscPassFilled />
                          </span>
                        </span>
                      </div>
                      <div className="lesson-item-bottom">
                        <span className="duration">2:43 minute</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed module-item"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <span className="module">
                    <span className="module-title">
                      Module 1 : Portfolio Design
                    </span>
                    <span className="module-sub-title">
                      <span className="module-duration">2:34:32 hours</span>
                      <span>|</span>
                      <span className="module-deadline ">
                        ডেডলাইনঃ 23 Feb 2024 12:00:00 AM
                      </span>
                    </span>
                  </span>
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="lesson-item">
                    <div className="video-icon">
                      <AiOutlinePlayCircle />
                    </div>

                    <div className="video-title">
                      <div className="lesson-item-top">
                        <span className="title">Video Title</span>
                        <span className="title-icon">
                          <span className="locked-icon">
                            <HiLockClosed />
                          </span>
                          <span className="complete-icon">
                            <VscPassFilled />
                          </span>
                        </span>
                      </div>
                      <div className="lesson-item-bottom">
                        <span className="duration">2:43 minute</span>
                      </div>
                    </div>
                  </div>
                  <div className="lesson-item">
                    <div className="video-icon">
                      <AiOutlinePlayCircle />
                    </div>

                    <div className="video-title">
                      <div className="lesson-item-top">
                        <span className="title">Video Title</span>
                        <span className="title-icon">
                          <span className="locked-icon">
                            <HiLockClosed />
                          </span>
                          <span className="complete-icon">
                            <VscPassFilled />
                          </span>
                        </span>
                      </div>
                      <div className="lesson-item-bottom">
                        <span className="duration">2:43 minute</span>
                      </div>
                    </div>
                  </div>
                  <div className="lesson-item">
                    <div className="video-icon">
                      <AiOutlinePlayCircle />
                    </div>

                    <div className="video-title">
                      <div className="lesson-item-top">
                        <span className="title">Video Title</span>
                        <span className="title-icon">
                          <span className="locked-icon">
                            <HiLockClosed />
                          </span>
                          <span className="complete-icon">
                            <VscPassFilled />
                          </span>
                        </span>
                      </div>
                      <div className="lesson-item-bottom">
                        <span className="duration">2:43 minute</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed module-item"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  <span className="module">
                    <span className="module-title">
                      Module 1 : Portfolio Design
                    </span>
                    <span className="module-sub-title">
                      <span className="module-duration">2:34:32 hours</span>
                      <span>|</span>
                      <span className="module-deadline ">
                        ডেডলাইনঃ 23 Feb 2024 12:00:00 AM
                      </span>
                    </span>
                  </span>
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="lesson-item">
                    <div className="video-icon">
                      <AiOutlinePlayCircle />
                    </div>

                    <div className="video-title">
                      <div className="lesson-item-top">
                        <span className="title">Video Title</span>
                        <span className="title-icon">
                          <span className="locked-icon">
                            <HiLockClosed />
                          </span>
                          <span className="complete-icon">
                            <VscPassFilled />
                          </span>
                        </span>
                      </div>
                      <div className="lesson-item-bottom">
                        <span className="duration">2:43 minute</span>
                      </div>
                    </div>
                  </div>
                  <div className="lesson-item">
                    <div className="video-icon">
                      <AiOutlinePlayCircle />
                    </div>

                    <div className="video-title">
                      <div className="lesson-item-top">
                        <span className="title">Video Title</span>
                        <span className="title-icon">
                          <span className="locked-icon">
                            <HiLockClosed />
                          </span>
                          <span className="complete-icon">
                            <VscPassFilled />
                          </span>
                        </span>
                      </div>
                      <div className="lesson-item-bottom">
                        <span className="duration">2:43 minute</span>
                      </div>
                    </div>
                  </div>
                  <div className="lesson-item">
                    <div className="video-icon">
                      <AiOutlinePlayCircle />
                    </div>

                    <div className="video-title">
                      <div className="lesson-item-top">
                        <span className="title">Video Title</span>
                        <span className="title-icon">
                          <span className="locked-icon">
                            <HiLockClosed />
                          </span>
                          <span className="complete-icon">
                            <VscPassFilled />
                          </span>
                        </span>
                      </div>
                      <div className="lesson-item-bottom">
                        <span className="duration">2:43 minute</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* copyright modal */}
        <div
          className="modal fade copyrightModal"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header pb-5">
                <h3 className="modal-title" id="exampleModalToggleLabel">
                  কপিরাইট ওয়ার্নিং
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  টেকএনালাইজেন কর্তৃপক্ষের অনুমতি ব্যতীত যে কোনো কোর্স
                  ম্যাটেরিয়াল (ভিডিও, অডিও, ছবি অথবা যেকোন ডকুমেন্ট) ফ্রি অথবা
                  পেইড ডিস্ট্রিবিউশন করা সম্পূর্ণরূপে নিষিদ্ধ এবং আইনত দন্ডনীয়
                  অপরাধ। এরকম কিছু করা হলে এবং আমরা সেটি বুঝতে পারলে, বাংলাদেশের
                  আইন অনুযায়ী ব্যবস্থা গ্রহণ করার অধিকার আমরা রাখি। আমরা আশা
                  করি, এ ব্যাপারে আপনি সতর্ক থাকবেন।{' '}
                </p>
                <p>
                  টেকএনালাইজেন প্লাটফর্মের প্রতিটি পেইড ভিডিও কন্টেন্ট এ
                  টেকএনালাইজেন - এর রেজিস্টার্ড লোগো ওয়াটারমার্ক হিসেবে দেয়া
                  থাকে। এছাড়া প্রতিটি ভিডিওতে ইউজার এর ইমেইল আইডি ডায়নামিকভাবে
                  প্রদর্শন করার অধিকার টেকএনালাইজেন এর থাকবে। উক্ত ভিডিওটির
                  মেধাস্বত্ত অধিকার (ইন্টেলেকচুয়াল প্রোপার্টি রাইট) সম্পূর্ণরূপে
                  টেকএনালাইজেন এর। যিনি কোর্স বা ভিডিও কিনছেন, তিনি শুধু ভিডিওটি
                  দেখার অনুমতি পাবেন। কিন্তু সেটিতে কোনভাবেই তার ব্যক্তিগত
                  মেধাস্বত্ব অধিকার থাকবেনা। তাই সেই কন্টেন্টটি কোনভাবেই ফ্রি
                  অথবা পেইড ডিস্ট্রিবিউশন করার অধিকার ইউজার এর থাকবেনা। এরকম
                  কিছু করা হলে, উক্ত ইউজার এর বিরুদ্ধে গণপ্রজাতন্ত্রী বাংলাদেশ
                  এর আইন অনুযায়ী ব্যবস্থা গ্রহণ করার অধিকার টেকএনালাইজেন এর
                  থাকবে। তাই একজন দায়িত্বশীল নাগরিক হিসেবে এই বিষয়ে সতর্ক থাকার
                  আহবান জানাচ্ছি। আমরা কোনভাবেই চাইনা, এই ভুলের জন্য একজন
                  লার্নার এর ক্যারিয়ার ক্ষতিগ্রস্থ হোক। তাই নিজের ক্যারিয়ারের
                  কথা চিন্তা করে এবং সামগ্রিকভাবে কমিউনিটির পরিবেশ রক্ষার্থে
                  আপনার সহযোগিতা আমাদের একান্ত কাম্য।
                </p>
                <p>
                  টেকএনালাইজেন - এর কোর্স সম্পর্কিত যেকোনো ভিডিও, টেক্সট বা
                  কনটেন্ট টেকএনালাইজেন কর্তৃপক্ষের থেকে লিখিত অনুমতি ছাড়া অন্য
                  কারও সাথে অর্থের বিনিময়ে বা বিনামূল্যে আদান-প্রদান বা শেয়ার
                  করা আইনত দন্ডনীয় অপরাধ। গুগল ড্রাইভ, ফেইসবুক, ইউটিউব, কিংবা
                  কোনো পেনড্রাইভ, সিডি, ডিভিডি বা অন্য কোন মাধ্যমে শেয়ার করলে
                  "টেকএনালাইজেন" কর্তৃপক্ষ বা আইনানুগ প্রতিনিধি গণপ্রজাতন্ত্রী
                  বাংলাদেশ সরকার এর কপিরাইট আইন, কপিরাইট এক্ট ২০০০, কপিরাইট এক্ট
                  ২০০৫ সংশোধন: সেকশন ৮৪, ডিজিটাল কপিরাইট আইন, Digital Security
                  Act, 2018, Digital Security Act, 2018 (সেকশন ১৯) এবং সাইবার
                  সিকিউরিটি বা উপযুক্ত আইন অনুসারে প্রয়োজনীয় পদক্ষেপ নিতে পারবে।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* keyboard shortcut modal */}
        <div
          className="modal fade keyboardShortcutModal"
          id="exampleModalKeyboard"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header pb-5">
                <h3 className="modal-title" id="exampleModalToggleLabel">
                  কি-বোর্ড শর্টকাট
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr className="">
                      <th scope="col" className="">
                        ফিচার
                      </th>
                      <th scope="col" className="text-center">
                        কি-বোর্ড শর্টকাট
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ভিডিও ফরওয়ার্ড</td>
                      <td className="text-center">
                        <button>
                          <AiOutlineArrowRight />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>ভিডিও ব্যাকওয়ার্ড</td>
                      <td className="text-center">
                        <button>
                          <AiOutlineArrowLeft />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>ভিডিও প্লে/পজ</td>
                      <td className="text-center">
                        <button>Space</button>
                      </td>
                    </tr>

                    <tr>
                      <td>ভিডিও ফুল স্ক্রিন</td>
                      <td className="text-center">
                        <button>F</button>
                      </td>
                    </tr>
                    <tr>
                      <td>ভলিউম বাড়ান</td>
                      <td className="text-center">
                        <button>
                          <AiOutlineArrowUp />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>ভলিউম কমান</td>
                      <td className="text-center">
                        <button>
                          <AiOutlineArrowDown />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-5">
                  ** কি-বোর্ড শর্টকাট গুলো শুধুমাত্র ভিডিওতে ফোকাস করলে কাজ
                  করবে। যদি কাজ না করে, তাহলে ভিডিও প্লেয়ার এর উপর একটি ক্লিক
                  করে আগে ফোকাস করে নিন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Lessons;
