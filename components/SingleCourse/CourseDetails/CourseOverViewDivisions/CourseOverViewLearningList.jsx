import React from 'react';

const CourseOverViewLearningList = () => {
  return (
    <>
      <h3 className="mb-5"> {/* What you'll learn */} আপনি কী কী শিখবেন</h3>
      <div className="row row-cols-lg-2 mb-5">
        <div className="col-md">
          <ul className="list-style-v1 list-unstyled">
            <li>
              <img
                alt=""
                className="tick-inc"
                src="/assets/images/svg/tick-mark.svg"
              />
              {/* Become a UI/UX designer. */}
              একজন UI/UX ডিজাইনার হয়ে উঠুন।
            </li>
            <li>
              <img
                alt=""
                className="tick-inc"
                src="/assets/images/svg/tick-mark.svg"
              />{' '}
              {/* You will be able to start earning money skills. */}
              আপনি অর্থ উপার্জন শুরু করতে সক্ষম হবেন দক্ষতা.
            </li>
            <li>
              <img
                alt=""
                className="tick-inc"
                src="/assets/images/svg/tick-mark.svg"
              />{' '}
              {/* Build a UI project from beginning to end. */}
              শুরু থেকে শেষ পর্যন্ত একটি UI প্রকল্প তৈরি করুন।
            </li>
            <li>
              <img
                alt=""
                className="tick-inc"
                src="/assets/images/svg/tick-mark.svg"
              />
              {/* Work with colors and fonts. */}
              রং এবং ফন্ট সঙ্গে কাজ.
            </li>
            <li>
              <img
                alt=""
                className="tick-inc"
                src="/assets/images/svg/tick-mark.svg"
              />
              {/* You will create your own UI Kit. */}
              আপনি নিজের UI কিট তৈরি করবেন।
            </li>
          </ul>
        </div>

        <div className="col-md">
          <ul className="list-style-v1 list-unstyled ms-xl-6">
            <li>
              <img
                alt=""
                className="tick-inc"
                src="/assets/images/svg/tick-mark.svg"
              />{' '}
              {/* Build and test a complete mobile app. */}
              একটি সম্পূর্ণ মোবাইল অ্যাপ তৈরি করুন এবং পরীক্ষা করুন।
            </li>
            <li>
              <img
                alt=""
                className="tick-inc"
                src="/assets/images/svg/tick-mark.svg"
              />{' '}
              {/* Learn to design mobile apps and websites. */}
              মোবাইল অ্যাপ এবং ওয়েবসাইট ডিজাইন করতে শিখুন।
            </li>
            <li>
              <img
                alt=""
                className="tick-inc"
                src="/assets/images/svg/tick-mark.svg"
              />
              {/* Design 3 different logos. */}
              ৩টি ভিন্ন লোগো ডিজাইন করুন।
            </li>
            <li>
              <img
                alt=""
                className="tick-inc"
                src="/assets/images/svg/tick-mark.svg"
              />
              {/* Create low-fidelity wireframe. */}
              লো-ফিডেলিটি ওয়্যারফ্রেম তৈরি করুন।
            </li>
            <li>
              <img
                alt=""
                className="tick-inc"
                src="/assets/images/svg/tick-mark.svg"
              />{' '}
              {/* Downloadable exercise files. */}
              ডাউনলোডযোগ্য ফাইল.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CourseOverViewLearningList;
