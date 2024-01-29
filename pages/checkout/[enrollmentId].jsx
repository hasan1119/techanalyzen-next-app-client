import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Home/Banner/Header';
import Footer from '../../components/Home/Footer/Footer';
import axiosClient from '../../utilities/axios';
const Checkout = () => {
  const router = useRouter();
  const { enrollmentId } = router.query;
  const [enrollment, setEnrollment] = useState({});
  const [data, setData] = useState({
    paymentMethod: 'bkash',
    district: '',
    thana: '',
    address: '',
    postalCode: '',
    billingPhone: '',
    billingEmail: '',
    comment: '',
    terms: true,
  });
  const [loading, setLoading] = useState(true);
  const { user } = useSelector((state) => state.user);
  const [isFilledUp, setFilledUp] = useState(false);

  useEffect(() => {
    setData({
      ...data,
      billingEmail: user.email,
      billingPhone: user.phone,
    });
  }, [user]);

  useEffect(() => {
    const {
      paymentMethod,
      district,
      thana,
      address,
      postalCode,
      billingPhone,
      billingEmail,
      comment,
      terms,
    } = data;

    if (
      paymentMethod &&
      district &&
      thana &&
      address &&
      postalCode &&
      billingPhone &&
      billingEmail &&
      comment &&
      terms
    ) {
      setFilledUp(true);
    } else {
      setFilledUp(false);
    }
  }, [data]);

  function inputChanger(e) {
    if (e.target.name === 'terms') {
      setData({ ...data, [e.target.name]: e.target.checked });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  }

  function placeOrderHandler(e) {
    e.preventDefault();
    axiosClient
      .post(`/v1/courses/checkout/${enrollment._id}`, data)
      .then(({ data }) => {
        if (data._id) {
          router.push(`/payment/${data._id}`);
        }
      })
      .catch(console.log);
  }

  function paymentMethodSelector(method) {
    setData({ ...data, paymentMethod: method });
  }

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(`/v1/courses/enrollments/${enrollmentId}`)
      .then(({ data }) => {
        setEnrollment(data);
      })
      .catch((err) => {
        alert('something went wrong! try again');
        router.push('/');
      })
      .finally(() => setLoading(false));
  }, [enrollmentId]);
  if (!enrollment._id) {
    return 'Loading...';
  }

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
                        value={user.firstName}
                        disabled
                        style={{ cursor: 'not-allowed' }}
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
                        value={user.firstName}
                        disabled
                        style={{ cursor: 'not-allowed' }}
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
                        name="district"
                        value={data?.district}
                        onChange={inputChanger}
                        placeholder="e.g, Naogaon"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="thana" className="form-label">
                        Thana *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="thana"
                        name="thana"
                        value={data?.thana}
                        onChange={inputChanger}
                        placeholder="e.g, Naogaon sadar"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="streetAddress" className="form-label">
                        Address *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={data?.address}
                        name="address"
                        onChange={inputChanger}
                        id="streetAddress"
                        placeholder="e.g, Bihari Colony, Ukilpara road"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="inputZip" className="form-label">
                        Post code
                      </label>
                      <input
                        type="text"
                        value={data?.postalCode}
                        name="postalCode"
                        onChange={inputChanger}
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
                        value={data.billingEmail}
                        readOnly
                        disabled
                        style={{ cursor: 'not-allowed' }}
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
                        value={data.billingPhone}
                        readOnly
                        disabled
                        style={{ cursor: 'not-allowed' }}
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
                        value={data.comment}
                        name="comment"
                        onChange={inputChanger}
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
                    <h5>Total</h5>
                  </div>
                  <div className="order_list">
                    <div className="course_name">
                      <ul>
                        {console.log(enrollment)}
                        <li>{enrollment?.course?.title}</li>
                      </ul>
                    </div>
                    <div className="course_price">
                      <ul>
                        {enrollment.type == 'fixed' ? (
                          <li>৳ {enrollment?.course?.price}</li>
                        ) : (
                          <li>
                            ৳{enrollment?.package?.unitPrice} X{' '}
                            {enrollment?.package?.installments}
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="subtotal">
                    <p>সর্বমোটঃ</p>
                    <p>
                      {enrollment.type !== 'fixed' ? (
                        <b>
                          ৳{' '}
                          {enrollment?.package?.unitPrice *
                            enrollment?.package?.installments}{' '}
                        </b>
                      ) : (
                        <b>৳ {enrollment?.course?.price}</b>
                      )}
                    </p>
                  </div>
                  {enrollment.type !== 'fixed' && (
                    <div className="advance">
                      <p>জমা (১ম কিস্তি)</p>
                      <p>
                        <b>৳ {enrollment?.package?.unitPrice}</b>
                      </p>
                    </div>
                  )}
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
                          onClick={() => paymentMethodSelector('bkash')}
                        >
                          <input
                            type="radio"
                            name="paymentMethod"
                            id="payment_method_bac"
                            className="me-2"
                            value="bkash"
                            checked={data.paymentMethod === 'bkash'}
                          />
                          <label className="fs-4" htmlFor="payment_method_bac">
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
                          onClick={() => paymentMethodSelector('nagad')}
                        >
                          <input
                            type="radio"
                            name="paymentMethod"
                            id="payment_method_bacs"
                            className="me-2"
                            value="nagad"
                            checked={data.paymentMethod === 'nagad'}
                          />
                          <label className="fs-4" htmlFor="payment_method_bacs">
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
                          onClick={() => paymentMethodSelector('rocket')}
                        >
                          <input
                            type="radio"
                            name="paymentMethod"
                            id="payment_method_bac1"
                            className="me-2"
                            value="rocket"
                            checked={data.paymentMethod === 'rocket'}
                          />
                          <label className="fs-4" htmlFor="payment_method_bac1">
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
                        checked={data.terms}
                        id="flexCheckDefault"
                        onChange={inputChanger}
                        name="terms"
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
                        disabled={!isFilledUp}
                        onClick={placeOrderHandler}
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
