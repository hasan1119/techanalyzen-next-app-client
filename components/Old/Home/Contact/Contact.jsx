import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container container">
        <div className="contact-img js-tilt">
          <img src="/assets/images/svg/contact-us.svg" alt="IMG" />
        </div>
        <form className="contact-form validate-form">
          <span className="contact-form-title">Get in touch</span>
          <div className="wrap-input validate-input">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Name"
            />
            <span className="shadow-input"></span>
          </div>
          <div className="wrap-input validate-input">
            <input
              className="input"
              type="text"
              name="email"
              placeholder="Email"
            />
            <span className="shadow-input"></span>
          </div>
          <div className="wrap-input validate-input">
            <input
              className="input"
              type="text"
              name="subject"
              placeholder="Subject"
            />
            <span className="shadow-input"></span>
          </div>
          <div className="wrap-input validate-input">
            <textarea
              className="input"
              name="message"
              placeholder="Message"
            ></textarea>
            <span className="shadow-input"></span>
          </div>
          <div className="contact-container-form-btn">
            <button className="contact-form-btn">
              <span>Send Email</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
