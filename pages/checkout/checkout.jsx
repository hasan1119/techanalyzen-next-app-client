import React from 'react';
import Header from '../../components/Home/Banner/Header';
import Footer from '../../components/Home/Footer/Footer';
const Checkout = () => {
  return (
    <>
      <Header></Header>
      <div className="checkout">
        <div className="checkout_top text-center">
          <h2>Checkout</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="billing-form">
                <div className="billing_head">
                  <h3>Billing details</h3>
                </div>
                <div className="from_box">
                  <form className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="first-name" className="form-label">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        aria-label="First name"
                        id="first-name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="last-name" className="form-label">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                        id="first-name"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="district" className="form-label">
                        District *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="district"
                        placeholder="1234 Main St"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="thana" className="form-label">
                        Thana/Upazila/Nearest Location *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="thana"
                        placeholder="Thana/Upazila/Nearest Location"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="streetAddress" className="form-label">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="streetAddress"
                        placeholder="Apartment, studio, or floor"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="inputZip" className="form-label">
                        Post code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputZip"
                        placeholder="Enter Post Code"
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="inputEmail" className="form-label">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Enter Email Address"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="inputPhone" className="form-label">
                        Phone *
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="inputPhone"
                        placeholder="Enter Your Phone"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="inputComments" className="form-label">
                        Enter Your Comments(Optional)
                      </label>
                      <textarea
                        type="number"
                        className="form-control"
                        id="inputComments"
                        placeholder="Enter Your Comments"
                        rows={4}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="your_order_option">
                <div className="Your_order_head">
                  <h3>Your Order</h3>
                </div>
                <div className="order_description">
                  <div className="order_head">
                    <h5>Order</h5>
                    <h5>Subtotal</h5>
                  </div>
                  <div className="order_list">
                    <div className="course_name">
                      <ul>
                        <li>ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট (অফলাইন)</li>
                        <li>ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট (অফলাইন)</li>
                      </ul>
                    </div>
                    <div className="course_price">
                      <ul>
                        <li>৳ ৭,৯৯৯</li>
                        <li>৳ ৭,৯৯৯</li>
                      </ul>
                    </div>
                  </div>
                  <div className="subtotal">
                    <p>subtotal</p>
                    <p>
                      <b>৳ ৭,৯৯৯</b>
                    </p>
                  </div>
                  <div className="advance">
                    <p>Advance</p>
                    <p>
                      <b>৳ ২,৯৯৯</b>
                    </p>
                  </div>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <input
                            type="radio"
                            name="package"
                            id="payment_method_bac"
                            className="me-2"
                          />
                          <label className="fs-4" for="payment_method_bac">
                            bKash
                          </label>
                          <img
                            src="/assets/images/checkout/bikash-logo.png"
                            alt="bakash-logo"
                            className="img-fluid m-auto"
                            width={100}
                          />
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          পেমেন্ট করার জন্য আপনি বিকাশ (bKash) সেলেক্ট করেছেন।
                          এখন নিচের Place order অপশনে ক্লিক করুন। পেমেন্ট করার
                          নিয়মাবলী অর্ডার প্লেস করার পর
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <input
                            type="radio"
                            name="package"
                            id="payment_method_bacs"
                            className="me-2"
                          />
                          <label className="fs-4" for="payment_method_bacs">
                            Nagad
                          </label>
                          <img
                            src="/assets/images/checkout/nogot-logo.png"
                            alt="nogot-logo"
                            className="img-fluid m-auto"
                            width={100}
                          />
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          পেমেন্ট করার জন্য আপনি নগদ (nagad) সেলেক্ট করেছেন। এখন
                          নিচের Place order অপশনে ক্লিক করুন। পেমেন্ট করার
                          নিয়মাবলী অর্ডার প্লেস করার পর
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <input
                            type="radio"
                            name="package"
                            id="payment_method_bac1"
                            className="me-2"
                          />
                          <label className="fs-4" for="payment_method_bac1">
                            Rocket
                          </label>
                          <img
                            src="/assets/images/checkout/rocket-logo.png"
                            alt="nogot-logo"
                            className="img-fluid m-auto"
                            width={100}
                          />
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          পেমেন্ট করার জন্য আপনি রকেট (rocket) সেলেক্ট করেছেন।
                          এখন নিচের Place order অপশনে ক্লিক করুন। পেমেন্ট করার
                          নিয়মাবলী অর্ডার প্লেস করার পর
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 px-3">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label "
                        htmlFor="flexCheckDefault"
                      >
                        I have read and agree to the website terms and
                        conditions"
                      </label>
                    </div>
                    <div className="d-grid gap-2 mt-5">
                      <button
                        className="btn btn-success py-3 fs-4"
                        type="button"
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Checkout;
