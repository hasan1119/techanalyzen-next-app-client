import Head from 'next/head';
import React from 'react';

const Pricing = () => {
  return (
    <>
      <Head></Head>
      <section className="pricing-section px-md-5 px-sm-5">
        <div className="container">
          <div className="pricing-header">
            <div className="pricing-icon">
              <img src="/assets/images/svg/price.svg" alt="" />
            </div>
            <div className="pricing-header-text">
              <h3>প্রাইসিং</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 pricing-card-item">
              <div className="pricingTable one">
                <div className="pricingTable-header">
                  <div className="price-value">
                    <span className="amount">৳৫৯৯৯</span>
                    <span className="duration">অনলাইন</span>
                  </div>
                  <h3 className="title">লাইভ ক্লাস</h3>
                </div>
                <div className="pricingTable-signup">
                  <a href="#">এনরোল করুন</a>
                </div>
                <ul className="pricing-content">
                  <li>লাইফ টাইম এক্সেস</li>
                  <li>লাইভ সাপোর্ট সেশন</li>
                  <li>কমিউনিটি এক্সেস</li>
                  <li>ইন্টার্নের সুযোগ</li>
                  <li>সার্টিফিকেট</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 pricing-card-item">
              <div className="pricingTable two">
                <div className="pricingTable-header">
                  <div className="price-value">
                    <span className="amount">৳৬৯৯৯</span>
                    <span className="duration">অফলাইন</span>
                  </div>
                  <h3 className="title">স্থানীয় প্রশিক্ষণ কেন্দ্র</h3>
                </div>
                <div className="pricingTable-signup">
                  <a href="#">এনরোল করুন</a>
                </div>
                <ul className="pricing-content">
                  <li>লাইফ টাইম এক্সেস</li>
                  <li>লাইভ সাপোর্ট সেশন</li>
                  <li>কমিউনিটি এক্সেস</li>
                  <li>ইন্টার্নের সুযোগ</li>
                  <li>সার্টিফিকেট</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 pricing-card-item">
              <div className="pricingTable three">
                <div className="pricingTable-header">
                  <div className="price-value">
                    <span className="amount">৳৬৫০০</span>
                    <span className="duration">প্রি-রেকর্ডেড</span>
                  </div>
                  <h3 className="title">প্রি-রেকর্ডেড মডিউল</h3>
                </div>
                <div className="pricingTable-signup">
                  <a href="#">এনরোল করুন</a>
                </div>
                <ul className="pricing-content">
                  <li>লাইফ টাইম এক্সেস</li>
                  <li>লাইভ সাপোর্ট সেশন</li>
                  <li>কমিউনিটি এক্সেস</li>
                  <li>ইন্টার্নের সুযোগ</li>
                  <li>সার্টিফিকেট</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
