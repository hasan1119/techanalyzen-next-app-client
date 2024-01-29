import React from 'react';

const Outcome = () => {
  return (
    <section className="after-course-section px-md-5 px-sm-5">
      <div className="after-course-content"></div>
      <div className="container">
        <div className="after-course-header">
          <div className="after-course-icon">
            <img src="/assets/images/svg/achievement-award.svg" alt="" />
          </div>
          <div className="after-course-text">
            <h3>
              কোর্সের পর যা <span>অর্জন</span> করবেন
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 py-md-2 py-sm-2 after-course-card-item">
            <div className="card-inner-item">
              <div className="front-card">
                <div className="achievement-card-icon">
                  <img src="/assets/images/svg/liftime-access.svg" alt="" />
                </div>

                <div className="achievement-card-title">
                  <h3>লাইফ টাইম এক্সেস</h3>
                </div>
              </div>
              <div className="back-card">
                <p>
                  টেকএনাইলজেন এর যেকোনো কোর্স-এ যারা এনরোল করবেন, তারা কোর্সের
                  সকল কন্টেন্ট এর লাইফটাইম এক্সেস পাবেন এবং ভবিষ্যতের সকল আপডেট
                  পেতে থাকবেন। এছাড়া প্রাইভেট সাপোর্ট চ্যানেলে আজীবন এক্সেস থেকে
                  যাবে যেখানে প্রশ্ন করলে আমরা উত্তর দেয়ার চেষ্টা করবো।
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 py-md-2 py-sm-2 after-course-card-item">
            <div className="card-inner-item">
              <div className="front-card">
                <div className="achievement-card-icon">
                  <img
                    src="/assets/images/svg/certificate-svgrepo-com.svg"
                    alt=""
                  />
                </div>

                <div className="achievement-card-title">
                  <h3>কোর্স সম্পন্নের সনদপত্র</h3>
                </div>
              </div>
              <div className="back-card">
                <p>
                  যারা কোর্সের সবগুলো এসাইনমেন্ট & ফাইনাল পরীক্ষায় অংশগ্রহণ করে
                  কমপক্ষে <span className="text-warning">50% মার্ক পাবেন </span>
                  তারা কোর্স সার্টিফিকেট পাবেন। সার্টিফিকেটটির সফট কপি অনলাইনেই
                  ডাউনলোড করতে পারবেন। কোন প্রিন্টেড কপি দেয়া হবে না।
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 py-md-2 py-sm-2 after-course-card-item">
            <div className="card-inner-item">
              <div className="front-card">
                <div className="achievement-card-icon">
                  <img src="/assets/images/svg/work-svgrepo-com.svg" alt="" />
                </div>

                <div className="achievement-card-title">
                  <h3>জব বা ইন্টার্ন করার সুযোগ</h3>
                </div>
              </div>
              <div className="back-card">
                <p>
                  কোর্সের শিক্ষার্থীদের মধ্য থেকে উপযুক্ত কাউকে পছন্দ হলে আমরা
                  যাচাই বাছাই করে আমাদের কোম্পানিতে পেইড ইন্টার্নশিপের সুযোগ
                  দিতে পারি। তারা টেকএনাইলজেন এর ফাউন্ডার মোঃ রকিবুল হাসান এর
                  সাথে সরাসরি কাজ করার সুযোগ পাবেন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcome;
