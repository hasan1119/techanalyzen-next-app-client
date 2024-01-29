import React from 'react';

const PromoCode = () => {
  return (
    <div className="promo-container">
      <img className="discount-img" src="/assets/images/svg/promo.svg" />
      <span className="promo-text">RONI-ON-SALE</span>
      <p> প্রোমো এপ্লাই করলে </p>
      <span className="promo-text" style={{ whiteSpace: 'nowrap' }}>
        ২,০০০ টাকা ডিসকাউন্ট
      </span>
      <p>আর বাকি,</p>
      <div className="promo-expire">
        <img
          alt=""
          className="discount-img"
          src="/assets/images/svg/promo-timer.svg"
        />
        <span>১ দিন</span>
      </div>
      <span className="promo-btn">এপ্লাই করুন</span>
      <img
        alt=""
        className="close-promo-msg"
        src="/assets/images/svg/cancel-promo.svg"
      />
    </div>
  );
};

export default PromoCode;
