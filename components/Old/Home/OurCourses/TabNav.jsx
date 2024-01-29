import React from 'react';

const TabNav = () => {
  return (
    <div className="tab_list_items">
      <div className="feature__course_menu">
        <button className="all_category_button">
          সকল ক্যাটাগরি
          <img
            alt=""
            className="ms-2"
            src="/assets/images/svg/tabcourse-down-arrow-icon.svg"
            alt=""
          />
          <ul>
            <li>
              <a href="#">Business Communication</a>
            </li>
            <li>
              <a href="#">Enlish Language</a>
            </li>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Web Development</a>
            </li>
          </ul>
        </button>
      </div>
      <div className="nav courses-tablist" role="tablist">
        <a
          className="nav-tab active"
          data-bs-toggle="tab"
          href="#ux-design-tab"
          role="tab"
          aria-selected="true"
        >
          {/* <!-- UI/UX Design --> */}ইউআই / ইউএক্স ডিজাইন
        </a>
        <a
          className="nav-tab"
          data-bs-toggle="tab"
          href="#development-tab"
          role="tab"
          aria-selected="false"
        >
          {/* <!-- Development -->  */}ডেভলপমেন্ট
        </a>
        <a
          className="nav-tab"
          data-bs-toggle="tab"
          href="#marketing-tab"
          role="tab"
          aria-selected="false"
        >
          {/* <!-- Marketing --> */} মার্কেটিং
        </a>
        <a
          className="nav-tab"
          data-bs-toggle="tab"
          href="#business-tab"
          role="tab"
          aria-selected="false"
        >
          {/* <!-- Business --> */} ব্যাবসা
        </a>
        <a
          className="nav-tab"
          data-bs-toggle="tab"
          href="#technology-tab"
          role="tab"
          aria-selected="false"
        >
          {/* <!-- Technology -->  */}টেকনোলোজি
        </a>
        {/* <a className="nav-tab" data-bs-toggle="tab" href="#all-category-tab" role="tab"
          aria-selected="false"> সকল ক্যাটাগরি</a> */}
      </div>
    </div>
  );
};

export default TabNav;
