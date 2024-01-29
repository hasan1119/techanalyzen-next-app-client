import Head from 'next/head';
import React from 'react';

const MyCourses = () => {
  return (
    <>
      <Head>
        <title>My Courses | Techanalyzen</title>
      </Head>
      <div className="myCourses-container dashboardContent m-5">
        <h1>আমার কোর্স</h1>
        <hr />

        {<h3>আপনি এখনো কোন কোর্স কিনেন নি।</h3>}

        {/* <div className="myCourses-inner-container p-5">
          <h2 className="pb-4 ">কোর্স সমূহ</h2>
          <div className="card-container">
            <div className="card course-card">
              <div className="card-img">
                <img
                  src="/assets/images/single-course/single-product.jpg"
                  className="card-img-top p-0"
                  alt=""
                />
              </div>
              <div className="card-body p-4">
                <h5 className="card-title">This is Card title</h5>
                <p className="card-description">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. build on the card title and
                  make up the bulk of the card's content.
                </p>
                <div className="course-btns ">
                  <Link href="">
                    <a className="btn btn-success">View course</a>
                  </Link>
                  <Link href="">
                    <a className="btn btn-secondary">Edit course</a>
                  </Link>
                </div>
              </div>
            </div>{' '}
            <div className="card course-card">
              <div className="card-img">
                <img
                  src="/assets/images/single-course/single-product.jpg"
                  className="card-img-top p-0"
                  alt=""
                />
              </div>
              <div className="card-body p-4">
                <h5 className="card-title">This is Card title</h5>
                <p className="card-description">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. build on the card title and
                  make up the bulk of the card's content.
                </p>
                <div className="course-btns ">
                  <Link href="">
                    <a className="btn btn-success">View course</a>
                  </Link>
                  <Link href="">
                    <a className="btn btn-secondary">Edit course</a>
                  </Link>
                </div>
              </div>
            </div>{' '}
            <div className="card course-card">
              <div className="card-img">
                <img
                  src="/assets/images/single-course/single-product.jpg"
                  className="card-img-top p-0"
                  alt=""
                />
              </div>
              <div className="card-body p-4">
                <h5 className="card-title">This is Card title</h5>
                <p className="card-description">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. build on the card title and
                  make up the bulk of the card's content.
                </p>
                <div className="course-btns ">
                  <Link href="">
                    <a className="btn btn-success">View course</a>
                  </Link>
                  <Link href="">
                    <a className="btn btn-secondary">Edit course</a>
                  </Link>
                </div>
              </div>
            </div>{' '}
            <div className="card course-card">
              <div className="card-img">
                <img
                  src="/assets/images/single-course/single-product.jpg"
                  className="card-img-top p-0"
                  alt=""
                />
              </div>
              <div className="card-body p-4">
                <h5 className="card-title">This is Card title</h5>
                <p className="card-description">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. build on the card title and
                  make up the bulk of the card's content.
                </p>
                <div className="course-btns ">
                  <Link href="">
                    <a className="btn btn-success">View course</a>
                  </Link>
                  <Link href="">
                    <a className="btn btn-secondary">Edit course</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default MyCourses;
