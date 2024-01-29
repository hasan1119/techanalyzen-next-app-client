import Head from 'next/head';
import React from 'react';

const Recording = () => {
  return (
    <>
      <Head>
        <title>Class Recordings | Techanalyzen</title>
      </Head>
      <div className="dashboardContent">
        <div className="myCourses-container dashboardContent m-5">
          <h1>রেকর্ডেড কন্টেন্ট</h1>
          <hr />

          {<h3>আপনি এখনো কোন কোর্স কিনেন নি।</h3>}
        </div>
      </div>
    </>
  );
};

export default Recording;
