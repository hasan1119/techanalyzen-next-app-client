import React from 'react';
import OrderHistory from './OrderHistory';
import ProfileDetail from './ProfileDetail';
import ProfileWallet from './ProfileWallet';

const ProfileContent = () => {
  return (
    <div>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <ProfileDetail />
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <OrderHistory />
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <ProfileWallet />
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
