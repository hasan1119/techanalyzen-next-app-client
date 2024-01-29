import Head from 'next/head';
import React from 'react';
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaMap,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa';
import Header from '../components/Home/Banner/Header';
import Footer from '../components/Home/Footer/Footer';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us | Techanalyzen</title>
      </Head>
      <Header />
      <div className="about-banner">
        <h1 className="title">Techanalyzen</h1>
        <h3 className="tagline">
          "Unlock Your IT Potential: Empowering Excellence"
        </h3>
        <div className="social">
          <a href="https://www.facebook.com/techanalyzen" target="_blank">
            <FaFacebookF className="icon" />
          </a>

          <a
            href="https://www.linkedin.com/company/techanalzyen"
            target="_blank"
          >
            <FaLinkedinIn className="icon" />
          </a>
          <a href="https://twitter.com/RokibulDev" target="_blank">
            <FaTwitter className="icon" />
          </a>
          {/* <a href="#">
                  <FaWhatsapp className="icon" />
                </a> */}
        </div>
      </div>
      <div className="container about-us-container">
        <p>
          <span className="text-bold">টেকএনালাইজেন</span> জানুয়ারী ২০২৩ ইং সনে
          প্রতিষ্ঠা লাভ করা একটি বাংলাদেশী ওয়েব ডিজাইন এবং ডেভেলপমেন্ট সেবা
          প্রদানকারি প্রতিষ্ঠান। এটি ২০২৩ সালে প্রতিষ্ঠা লাভ করলেও এর
          কার্য্যক্রম শুরু হয় আরও ৫ বছর আগে এবং বিগত ৫ যাবত লোকাল এবং গ্লোবাল
          মার্কেটপ্লেসে সুনামের সাথে ওয়েব ডিজাইন এবং ডেভেলপ করে আসতেছে।
        </p>
        <div className="sub-heading">আমাদের লক্ষ্যঃ</div>
        <p>
          আমাদের লক্ষ্য হলো গ্রাহকদের প্রয়োজনীয় ওয়েবসাইট ডিজাইন এবং
          ডেভেলপমেন্ট সম্পর্কিত সমস্যার সমাধান প্রদান করা। আমরা যথা সময়ে
          সম্পূর্ণরূপে গ্রাহক এর চাহিদা অনুযায়ী ইউনিক এবং রেসপন্সিভ ওয়েব সাইট
          ডিজাইন এবং ডেভেলপ করে থাকি।
        </p>
        <div className="sub-heading">আমাদের উদ্দেশ্যঃ</div>
        <p>
          নিজেরা কাজ করার পাশাপাশি অন্যদের যথাযথ প্রশিক্ষণের মাধমে আইটি সেক্টরে
          দক্ষ জনবল তৈরী করা এবং মানুষের বেকারত্ব দূর করা।
        </p>
        <div className="sub-heading">আমাদের টিমঃ</div>
        <p>
          আমরা অভিজ্ঞ ওয়েব ডিজাইনার এবং ডেভেলপারদের সমন্বয়ে তৈরি করেছি
          টেকএনালাইজেন টিম, যারা ৫ বছরের বেশি সময় ধরে এই ফিল্ডে দক্ষতার সাথে কাজ
          করে আসছেন। আমাদের দলের প্রতিটি সদস্য সম্পূর্ণরূপে উচ্চশিক্ষায়
          প্রশিক্ষিত। আমরা প্রশিক্ষিত, প্রফেশনাল এবং সুসংগঠিত টিম মানসম্মত কাজ
          করতে প্রতিশ্রুতিবদ্ধ।
        </p>
        <div className="our-team">
          <div className="team-member card">
            <img src="/assets/images/team/rokib.jpg" alt="" />
            <div className="member-info">
              <div className="name">Md. Rokibul Hasan</div>
              <div className="designation">Founder, Director & Instructor</div>
            </div>
          </div>
          <div className="team-member card">
            <img src="/assets/images/team/ruhul.jpg" alt="" />
            <div className="member-info">
              <div className="name">Md. Ruhul Amin</div>
              <div className="designation">Support Instructor</div>
            </div>
          </div>
          <div className="team-member card">
            <img src="/assets/images/team/feerdous.jpg" alt="" />
            <div className="member-info">
              <div className="name">Feerdous Alam</div>
              <div className="designation">Support Instructor</div>
            </div>
          </div>
          <div className="team-member card">
            <img src="/assets/images/team/mostakim.jpg" alt="" />
            <div className="member-info">
              <div className="name">Mostakim Rahman</div>
              <div className="designation">Customer Support Executive</div>
            </div>
          </div>
        </div>
        <div className="sub-heading">ওয়েব ডেভেলপমেন্ট কোর্সঃ</div>
        <p>
          আমাদের উদ্দেশ্যকে সামনে রেখে আমাদের দীর্ঘ দিনের অভিজ্ঞতার আলোকে আমরা
          তৈরী করেছি "ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট কোর্স"। আমরা আশা করি আমাদের
          প্রশিক্ষণ দ্বারা প্রশিক্ষিত দক্ষ জনবল আইটি সেক্টরে গ্রাহকদের বিভিন্ন
          প্রয়োজনীয়তা পূরণ করবে ইনশাআল্লাহ।
        </p>
        <div className="sub-heading">প্রতিষ্ঠাতা এবং কোর্স ইন্সট্রাকটরঃ</div>
        <p>
          মোঃ রকিবুল হাসান, একজন ফুল স্ট্যাক ওয়েব ডিজাইনার এবং ডেভেলপার। নিজে
          শেখার পাশাপাশি তা অন্যদের মাঝে ছড়িয়ে দিতে তিনি প্রতিষ্ঠা করেন
          <a
            href="https://www.youtube.com/@CodingClubBangladesh"
            target="_blank"
            className="text-decoration-none"
          >
            {' '}
            Coding Club Bangladesh {''}
          </a>
          (ইউটিউব চ্যানেল)। যেখনে ওয়েব ডিজাইন এবং ডেভেলপমেন্ট সহ টেক রিলেটেড
          বিভিন্ন টিউটোরিয়াল ভিডিও রয়েছে। যেখানে অনলাইন কোর্স, ওয়েবিনার বা
          লাইভ ক্লাসের মাধ্যমে শিক্ষার্থীদের সহায়তা করা হয়।
        </p>
        <div className="sub-heading">যোগাযগের ঠিকানাঃ</div>
        <div className="contact">
          <div className="contact-info">
            <FaMap className="icon" />
            <span>
              Mohsin Villa, Bihari Coloy, Ukilpara Road, Naogaon Sadar, Naogaon
              - 6500
            </span>
          </div>
          <div className="contact-info">
            <FaPhone className="icon" />
            <span className="">+880 1763-251119</span>
          </div>
          <div className="contact-info">
            <FaEnvelope className="icon" />
            <span className="">support@techanalyzen.com</span>
          </div>

          <div className="social">
            <a href="https://www.facebook.com/techanalyzen" target="_blank">
              <FaFacebookF className="icon" />
            </a>

            <a
              href="https://www.linkedin.com/company/techanalzyen"
              target="_blank"
            >
              <FaLinkedinIn className="icon" />
            </a>
            <a href="https://twitter.com/RokibulDev" target="_blank">
              <FaTwitter className="icon" />
            </a>
            {/* <a href="#">
                  <FaWhatsapp className="icon" />
                </a> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
