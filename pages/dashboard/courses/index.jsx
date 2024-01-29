import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axiosClient from '../../../utilities/axios';

const AllCourse = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axiosClient
      .get('/v1/courses')
      .then(({ data }) => {
        setCourses(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Head>
        <title>My Courses | Techanalyzen</title>
      </Head>
      <div className="myCourses-container dashboardContent m-5">
        <h2 className="pb-4 ">কোর্স সমূহ</h2>
        <hr />

        <div className="myCourses-inner-container p-5">
          <div className="card-container">
            {courses.map(({ title, description, thumbnail, _id: courseId }) => (
              <div className="card course-card">
                <div className="card-img">
                  <img
                    src={`/files/thumb/course/${thumbnail}`}
                    className="card-img-top p-0"
                    alt=""
                  />
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-description">
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                  </p>
                  <div className="course-btns ">
                    <Link href={`/dashboard/courses/view/${courseId}`}>
                      <a className="btn btn-success">View course</a>
                    </Link>
                    <Link href={`/dashboard/courses/edit/${courseId}`}>
                      <a className="btn btn-secondary">Edit course</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCourse;
