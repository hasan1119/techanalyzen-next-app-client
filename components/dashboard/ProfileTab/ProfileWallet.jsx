import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ProfileWallet = () => {
  return (
    <div className="wallet mt-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="left_box">
              <h3>Your Techanalyzen Wallet</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae rerum veniam minus, fuga nesciunt pariatur!
              </p>
              <h6>You can withdraw your money</h6>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="right_box">
              <h4>Current Wallet Balance</h4>
              <div className="price mb-3">
                ৳ 0 <span>BDT</span>
              </div>
              <a href="#">
                Refer Techanalyzen to earn more <FaArrowRight />
              </a>
              <div className="note">* wallet balance is non-transferable</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileWallet;
