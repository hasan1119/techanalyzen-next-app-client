import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';

const Overview = () => {
  const { user } = useSelector((state) => state.user);
  const { firstName, lastName, username, email, phone, avatar } = user;
  const fullName = `${firstName}  ${lastName}`;
  return (
    <>
      <Head>
        <title>Dashboard | Techanalyzen</title>
      </Head>
      <div className="dashboardContent">
        <div className="overview-container">
          <h1 className="text-center welcome">
            Hello <span className="name">{fullName}</span>, Welcome to
            dashboard!
          </h1>
          <div className="overview-content">
            <div className="user-profile">
              <div className="profile-image">
                <img
                  src={
                    avatar
                      ? `/files/thumb/profile/${avatar}`
                      : '/logo/profile-img.svg'
                  }
                  alt="user"
                />
              </div>
              <div className="profile-info">
                <p>
                  <span>Username:</span> {username}
                </p>
                <p>
                  <span>Full name:</span> {fullName}
                </p>
                <p>
                  <span>Email Address:</span> {email}
                </p>
                <p>
                  <span>Phone:</span> {phone}
                </p>
              </div>
            </div>
            <hr />
            {/* device activity */}
            <div className="device-activity">
              <h2>Device Activity</h2>
              <table className="table table-striped table-sm table-responsive">
                <thead className="table-head">
                  <tr>
                    <th scope="col">Serial</th>
                    <th scope="col">Platform</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Windows 10</td>
                    <td>25-04-2023 05:59 PM</td>
                    <td>
                      <button className="btn btn-small btn-danger">
                        Remove
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Windows 10</td>
                    <td>25-04-2023 05:59 PM</td>
                    <td>
                      <button className="btn btn-small btn-danger">
                        Remove
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Windows 10</td>
                    <td>25-04-2023 05:59 PM</td>
                    <td>
                      <button className="btn btn-small btn-danger">
                        Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <div className="assignment-marks">
              <h2>এসাইনমেন্ট মার্কস</h2>
              <table className="table table-striped table-sm table-responsive">
                <thead className="table-head">
                  <tr>
                    <th scope="col">সিরিয়াল</th>
                    <th scope="col">এসাইনমেন্ট</th>
                    <th scope="col">নাম্বার</th>
                    <th scope="col">জমার সময়</th>
                    <th scope="col">ডেডলাইন</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Batch 1 - Assignment 1 - Multi-counter Application</td>
                    <td>- / 50</td>
                    <td>জমা দেননি</td>
                    <td className="text-danger">
                      20 Aug 2022 12:00:00 AM (GMT+6)
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Batch 1 - Assignment 2 - Shopping Cart Application</td>
                    <td>- / 70</td>
                    <td>জমা দেননি</td>
                    <td className="text-danger">
                      20 Aug 2022 12:00:00 AM (GMT+6)
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td> Batch 1 - Assignment 3 - Simple Blog webpage</td>
                    <td>- / 50</td>
                    <td>জমা দেননি</td>
                    <td className="text-danger">
                      26 Aug 2022 11:59:00 PM (GMT+6)
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>
                      {' '}
                      Batch 1 - Assignment 4 - Add features to Todo Application
                    </td>
                    <td>- / 50</td>
                    <td>জমা দেননি</td>
                    <td className="text-danger">
                      20 Aug 2022 12:00:00 AM (GMT+6)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> */}
            {/* next todo*/}
            {/* <div className="next-todo mt-5">
              <h2 className="text-danger">
                <span className="me-2">
                  <BiTime />
                </span>
                ক্লাস শুরুর আর মাত্র ৭ দিন বাঁকি
              </h2>
              <div className="todo"></div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
