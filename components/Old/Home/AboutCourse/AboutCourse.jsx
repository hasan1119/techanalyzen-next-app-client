import React from 'react';

const AboutCourse = () => {
  return (
    <section className="discussion-section px-md-5 px-sm-5">
      <div className="container">
        <div className="projects-header-title">
          <div className="project-icon">
            <img src="/assets/images/svg/discution.svg" alt="" />
          </div>
          <div className="projects-text">
            <h3>
              আমাদের কোর্স সম্পর্কে <span>বিস্তারিত</span> আলোচনা
            </h3>
          </div>
        </div>

        <div className="row" id="discuss">
          <div className="col-md-6 col-lg-4 mt-4">
            <div className="discussion-card-four">
              <div className="discussion-card-four__bg"></div>
              <div className="discussion-card-four__content">
                <div className="discussion-card-four__circle"></div>
                <img src="/assets/images/svg/discussVIdeo.svg" alt="" />
                <h3 className="discussion-card-four__title">
                  12 টি মডিউলে 135+ ভিডিও
                </h3>
                <p className="discussion-card-four__text">
                  আপনারা যেন ধাপে ধাপে শিখতে পারেন সেজন্য পুরো কোর্সটি 12টি
                  মডিউলে ও 135+ ভিডিওতে ভাগ করে সাজানো হয়েছে।
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-4">
            <div className="discussion-card-four">
              <div className="discussion-card-four__bg"></div>
              <div className="discussion-card-four__content">
                <div className="discussion-card-four__circle"></div>
                <img src="/assets/images/svg/discution2.svg" alt="" />
                <h3 className="discussion-card-four__title">
                  30 ঘণ্টার 15GB রেকোর্ডেড কন্টেন্ট
                </h3>
                <p className="discussion-card-four__text">
                  সময় এবং ব্যান্ডউইডথ খরচ এর বিষয়টি বিবেচনা করে ভিডিও সাইজ এবং
                  ডিউরেশন অপটিমাইজ করা হয়েছে।
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-4">
            <div className="discussion-card-four">
              <div className="discussion-card-four__bg"></div>
              <div className="discussion-card-four__content">
                <div className="discussion-card-four__circle"></div>
                <img src="/assets/images/svg/discuss3.svg" alt="" />
                <h3 className="discussion-card-four__title">120+ টি কুইজ</h3>
                <p className="discussion-card-four__text">
                  আপনারা যেন শেখার সাথে সাথে নিজেদের প্রোগ্রেস যাচাই করতে পারেন
                  সেজন্য প্রতিটি ভিডিও শেষে ব্যাখ্যা ও উত্তর সহ কুইজ থাকবে।
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-4">
            <div className="discussion-card-four">
              <div className="discussion-card-four__bg"></div>
              <div className="discussion-card-four__content">
                <div className="discussion-card-four__circle"></div>
                <img src="/assets/images/svg/discus4.svg" alt="" />
                <h3 className="discussion-card-four__title">
                  12 টি এসাইনমেন্ট
                </h3>
                <p className="discussion-card-four__text">
                  প্রতিটি মডিউল শেষেই থাকবে বড় এসাইনমেন্ট যেগুলো আপনারা নিজে
                  করবেন। প্রতিটি এসাইনমেন্ট এর সল্যুশন লাইভ সেশনে দেয়া হবে।
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-4">
            <div className="discussion-card-four">
              <div className="discussion-card-four__bg"></div>
              <div className="discussion-card-four__content">
                <div className="discussion-card-four__circle"></div>
                <img src="/assets/images/svg/discus5.svg" alt="" />
                <h3 className="discussion-card-four__title">5 টি লাইভ সেশন</h3>
                <p className="discussion-card-four__text">
                  সাপ্তাহিক লাইভ সেশনের ব্যবস্থা থাকছে যেখানে আমরা
                  গুরুত্ত্বপূর্ণ টপিক নিয়ে আলোচনার পাশাপাশি আপনাদের প্রশ্নের
                  উত্তর দিব।
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-4">
            <div className="discussion-card-four">
              <div className="discussion-card-four__bg"></div>
              <div className="discussion-card-four__content">
                <div className="discussion-card-four__circle"></div>
                <img src="/assets/images/svg/discus6.svg" alt="" />
                <h3 className="discussion-card-four__title">10 টি প্রজেক্ট</h3>
                <p className="discussion-card-four__text">
                  পুরো কোর্সটিতে আমরা প্রজেক্ট ভিত্তিক লার্নিং প্রসেস ফলো করেছি।
                  কোর্সে আমরা মিলেমিশে 10 টি প্রজেক্ট করবো।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
