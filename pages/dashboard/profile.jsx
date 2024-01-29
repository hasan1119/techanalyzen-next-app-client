import Head from 'next/head';
import React from 'react';
import ProfileContent from '../../components/dashboard/ProfileTab/ProfileContent';
import ProfileTab from '../../components/dashboard/ProfileTab/ProfileTab';

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile | Techanalyzen</title>
      </Head>
      <div className="dashboardContent">
        <div className="container px-4">
          <div className="dashboard_profile">
            <ProfileTab />
            <ProfileContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
