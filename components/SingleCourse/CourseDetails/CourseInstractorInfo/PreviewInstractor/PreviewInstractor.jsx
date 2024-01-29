import React from 'react';

const PreviewInstractor = () => {
  return (
    <div className="d-flex align-items-center mb-5">
      <div className="d-inline-block rounded-circle border me-5 p-2">
        <div className="avatar">
          <img
            alt=""
            src="/assets/images/banner/a.jpg"
            className="avatar-img rounded-circle"
          />
        </div>
      </div>
      <div className="media-body">
        <h4 className="mb-2">Lauren Handerson</h4>
        <span>iOS Developer &amp; UI Designer</span>
      </div>
    </div>
  );
};

export default PreviewInstractor;
