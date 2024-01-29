import React from 'react';

const CourseWhatYouNeed = () => {
  return (
    <>
      <h3 className="mb-5"> {/* Requirements */} যা যা লাগবে</h3>
      <ul className="list-style-v2 list-unstyled">
        <li>
          <img
            alt=""
            className="dot-inc"
            src="/assets/images/svg/dot-icon.svg"
          />
          <p>
            {' '}
            {/* We do not
                    require any previous experience or pre-defined skills to take this course.
                    A great orientation would be enough to master UI/UX design. */}{' '}
          </p>
          এই কোর্সটি করার জন্য আমাদের কোনো পূর্ব অভিজ্ঞতা বা পূর্বনির্ধারিত
          দক্ষতার প্রয়োজন নেই। UI/UX ডিজাইন আয়ত্ত করার জন্য একটি দুর্দান্ত
          অভিযোজন যথেষ্ট হবে।
        </li>
        <li>
          <img
            alt=""
            className="dot-inc"
            src="/assets/images/svg/dot-icon.svg"
          />
          <p>
            {/* A
                    computer with a good internet connection. */}
            একটি ভাল ইন্টারনেট সংযোগ সহ কম্পিউটার।
          </p>
        </li>
        <li>
          <img
            alt=""
            className="dot-inc"
            src="/assets/images/svg/dot-icon.svg"
          />
          <p>
            {/* Adobe
                    Photoshop (OPTIONAL) */}
            অ্যাডোব ফটোশপ (ঐচ্ছিক)
          </p>
        </li>
      </ul>
    </>
  );
};

export default CourseWhatYouNeed;
