import Link from 'next/link';
import React from 'react';
const Banner = () => {
  return (
    <section className="banner-section canvas_container">
      {/* <div className="particles d-none d-lg-block"></div>
      <div className="particles d-none d-lg-block"></div>
      <div className="particles d-none d-lg-block"></div> */}

      <div className="container">
        <div className="banner-wrapper mt-5">
          <div className="row g-5 align-items-center justify-content-center">
            <div className="col-lg-5">
              <div className="bannner_content">
                <h4>
                  <span>শুরু করুন</span> একজন ওয়েব ডেভেলপার হতে চান ?
                </h4>
                <h1>
                  একজন ফুল-স্ট্যাক ডেভেলপার হিসেবে আপনার ক্যারিয়ার গড়ে তুলুন
                  আমাদের সাথে
                </h1>
                <p>
                  আউটসোর্সিং বা ফ্রিল্যান্সিং এর জন্যও এই সেক্টরের খুব চাহিদা।
                  আপনার যদি প্রোগ্রামিং এর প্রতি অনুরাগ থাকে তবে আপনি ওয়েব
                  ডেভেলপমেন্ট কোর্স করে একটি দুর্দান্ত ক্যারিয়ার তৈরি করতে
                  পারেন।
                </p>
                <div className="banner_link">
                  <ul>
                    <li className="browse_button">
                      <Link href="#our-courses">
                        <a>
                          <span>ব্রাউজ কোর্স</span>
                        </a>
                      </Link>
                    </li>
                    <li className="contact_button">
                      <Link href="#contact">
                        <a>
                          <span>যোগাযোগ করুন</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="banner_img">
                <img
                  // src="/assets/images/banner/banner5.png"
                  src="/assets/images/banner/bannervideo.png"
                  // src="/assets/images/banner/slider-img1.png"
                  alt="IMG"
                  className="img-fluid"
                />
                {/* <VideoModal /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
