import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { useLottie } from 'lottie-react';
import notfound from '/public/assets/images/404/notfound.json';
import { AiOutlineRollback } from 'react-icons/ai';

const notFoundPage = () => {
  const options = {
    animationData: notfound,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <>
      <Head>
        <title>404 | Techanalyzen</title>
      </Head>
      <div className="notfound-container ">
        <div className="notfound-content container">
          {/* <h1>
            4<span>0</span>4
          </h1> */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '300px',
                textAlign: 'center',
                marginTop: '-100px',
              }}
            >
              {View}
            </div>
          </div>
          <h2>Page Not Found!</h2>

          <Link href="/">
            <button style={{ marginTop: '' }}>
              Back to Home <AiOutlineRollback />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default notFoundPage;
