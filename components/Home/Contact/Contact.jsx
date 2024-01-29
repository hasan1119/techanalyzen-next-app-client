import React from 'react';
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaMap,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container container">
        <div className="contact-img js-tilt">
          <div className="contact_top">
            {/* <img
              src="/assets/images/svg/contact-us.svg"
              alt="IMG"
              className="img-fluids top_img"
            /> */}
            <div className="title">
              <h3 className="text-white">Contact Info</h3>
            </div>
          </div>
          <div className="contact_bottom">
            <div className="info_box">
              <div className="icon_left">
                <FaMap className="info_icon" />
              </div>
              <div className="info_text">
                <h5>Our Location​</h5>
                <p>
                  Mohsin Villa, Bihari Coloy, Ukilpara Road, Naogaon Sadar,
                  Naogaon - 6500
                </p>
              </div>
            </div>
            <div className="info_box">
              <div className="icon_left">
                <FaPhone className="info_icon" />
              </div>
              <div className="info_text">
                <h5>Phone Number</h5>
                <p>+880 1763-251119</p>
              </div>
            </div>
            <div className="info_box">
              <div className="icon_left">
                <FaEnvelope className="info_icon" />
              </div>
              <div className="info_text">
                <h5>Email Address​</h5>
                <p>support@techanalyzen.com</p>
              </div>
            </div>
            <div className="info_footer">
              <h4>Social Contact</h4>
              <div className="social">
                <a href="https://www.facebook.com/techanalyzen" target="_blank">
                  <FaFacebookF className="contact_icon" />
                </a>

                <a
                  href="https://www.linkedin.com/company/techanalzyen"
                  target="_blank"
                >
                  <FaLinkedinIn className="contact_icon" />
                </a>
                <a href="https://twitter.com/RokibulDev" target="_blank">
                  <FaTwitter className="contact_icon" />
                </a>
                {/* <a href="#">
                  <FaWhatsapp className="contact_icon" />
                </a> */}
              </div>
            </div>
          </div>
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
