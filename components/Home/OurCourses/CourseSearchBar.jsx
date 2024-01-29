import React from 'react';

const CourseSearchBar = () => {
  return (
    <div className="row height d-flex justify-content-center align-items-center course_search">
      <div className="col-md-8">
        <div className="search">
          <svg
            className="search_icon"
            fill="#535353"
            width="16px"
            height="16px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(90)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z"
                fillRule="evenodd"
              ></path>
            </g>
          </svg>
          <input
            type="text"
            className="form-control"
            placeholder="Search For Course"
          />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
    </div>
  );
};

export default CourseSearchBar;
