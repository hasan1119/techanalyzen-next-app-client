import React from 'react';

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-wrapper">
        <div className="banner-content"></div>
        <div className="banner-content-wrapper">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-4 col-md-12 col-sm-12 left-side-banner">
                <h5>দেশ সেরা আইটি ট্রেনিং ইনস্টিটিউটে</h5>
                <h1>
                  ক্যারিয়ার শুরু হোক <br /> <span>দক্ষতার আত্মবিশ্বাসে</span>
                </h1>

                <p>
                  অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে টেকএনালাইজেন
                  ইনস্টিটিউট প্রস্তুত আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়। আমাদের
                  ৩০টিরও বেশি ট্রেন্ডি কোর্স থেকে আজই বেছে নিন আপনার পছন্দের
                  কোর্স।
                </p>

                <a href="#">
                  <button type="button">
                    <span>
                      <img
                        src="/assets/images/svg/braces-asterisk.svg"
                        alt=""
                      />
                    </span>
                    ব্রাউজ কোর্স
                  </button>
                </a>
              </div>

              <div className="col-lg-8 col-md-12 col-sm-12 right-side-banner">
                <div className="banner-image-right">
                  <img src="/assets/images/banner/e.jpg" alt="" />
                </div>
                <div className="instructor">
                  <div className="instructor-image">
                    <img src="/assets/images/banner/b.jpg" alt="" />
                  </div>
                  <p>Instructor</p>
                </div>
                <div className="freelancer">
                  <div className="freelancer-image">
                    <img src="/assets/images/banner/a.jpg" alt="" />
                  </div>
                  <p>Freelancer</p>
                </div>

                <div className="learner">
                  <div className="learner-image">
                    <img src="/assets/images/banner/d.jpg" alt="" />
                  </div>
                  <p>Learner</p>
                </div>

                <div className="developer">
                  <div className="developer-image">
                    <img src="/assets/images/banner/c.jpg" alt="" />
                  </div>
                  <p>Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
