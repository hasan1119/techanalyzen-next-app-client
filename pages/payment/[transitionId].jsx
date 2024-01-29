import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Home/Banner/Header';
import Footer from '../../components/Home/Footer/Footer';
import axiosClient from '../../utilities/axios';
const Payment = () => {
  const router = useRouter();
  const { transitionId } = router.query;
  const [transition, setTransition] = useState({});
  const [data, setData] = useState({
    id: '',
    number: '',
  });

  function changeHandler(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axiosClient
      .put(`/v1/courses/payment/confirm/${transitionId}`, data)
      .then(({ data }) => {
        if (data?.transition?.id && data?.transition?.number) {
          router.push('/thankyou');
        } else {
          console.log(data);
        }
      })
      .catch(console.log);
  }

  useEffect(() => {
    if (transition) {
      axiosClient
        .get(`/v1/courses/payment/${transitionId}`)
        .then(({ data }) => {
          setTransition(data);
        })
        .catch(console.log);
    }
  }, [transitionId]);

  console.log(transition);
  return (
    <>
      <Header></Header>
      <div className="payment">
        <div className="payment_top">
          <h2>Payment</h2>
        </div>
        <div className="container">
          <p className="text-center bg-white py-4 fs-3">
            Thank you .Your order has been received
          </p>
          <div className="table_box pt-4">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td className="text-center">
                    <p className="m-0">Order Number</p>
                    <p>
                      <b>{transition.paymentId}</b>
                    </p>
                  </td>
                  <td className="text-center">
                    <p className="m-0">Date</p>
                    <p>
                      <b>{new Date(transition.createdAt).toLocaleString()}</b>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <p className="m-0">Email:</p>
                    <p>
                      <b>{transition.billingEmail}</b>
                    </p>
                  </td>
                  <td className="text-center">
                    <p className="m-0">Payment amount:</p>
                    <p>
                      <b>৳ {transition.amount}</b>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <p className="m-0">Payment Method:</p>
                    <p>
                      <b>{transition.paymentMethod}</b>
                    </p>
                  </td>
                  <td className="text-center">
                    <p className="m-0"></p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-xl-6">
              {transition.paymentMethod === 'bkash' && (
                <>
                  <h2 className="mt-5 fs-1">
                    bKash - Personal পার্সোনাল
                    <img
                      src="/assets/images/checkout/bikash-logo.png"
                      className="ms-4"
                      alt=""
                    />
                  </h2>
                  01. বিকাশ এ্যাপস চালু করুন অথবা *247# ডায়াল করুন। <br />
                  02. তারপর সেন্ড মানি অপশন সেলেক্ট করুন।
                  <br /> 03. আমাদের বিকাশ নাম্বারটি দিন 01763-251119 পরবর্তী
                  অপশনে টাকার পরিমান লিখুন।
                  <br /> 05. রেফারেন্স এর ঘরে অর্ডার নাম্বারটি লিখুন।
                  <br /> 06. আপনার বিকাশ একাউন্ট পিন দিয়ে কনফার্ম করুন।
                  <h2 className="mt-5 fs-1">
                    নিচের QR কোড স্ক্যান করেও টাকা পাঠাতে পারেন
                  </h2>
                  <div className="bkashQR">
                    <img
                      src="/assets/images/checkout/bkash-QR-code.png"
                      alt="bkash QR Code"
                    />
                  </div>
                </>
              )}

              {transition.paymentMethod === 'nagad' && (
                <>
                  <h2 className="mt-5 fs-1">
                    Nagad - Personal পার্সোনাল
                    <img
                      src="/assets/images/checkout/nogot-logo.png"
                      className="ms-4"
                      alt=""
                    />
                  </h2>
                  01. নগদ এ্যাপস চালু করুন অথবা *167# ডায়াল করুন। <br />
                  02. তারপর সেন্ড মানি অপশন সেলেক্ট করুন।
                  <br /> 03. আমাদের নগদ নাম্বারটি দিন 01763-251119 পরবর্তী অপশনে
                  টাকার পরিমান লিখুন।
                  <br /> 05. রেফারেন্স এর ঘরে অর্ডার নাম্বারটি লিখুন।
                  <br /> 06. আপনার নগদ একাউন্ট পিন দিয়ে কনফার্ম করুন।
                </>
              )}

              {transition.paymentMethod === 'rocket' && (
                <>
                  <h2 className="mt-5 fs-1">
                    Rokect - Personal পার্সোনাল
                    <img
                      style={{ maxWidth: '100px' }}
                      src="/assets/images/checkout/Rocket-logo.png"
                      className="ms-4"
                      alt=""
                    />
                  </h2>
                  01. রকেট এ্যাপ চালু করুন অথবা *322# ডায়াল করুন। <br />
                  02. তারপর সেন্ড মানি অপশন সেলেক্ট করুন।
                  <br /> 03. আমাদের রকেট নাম্বারটি দিন 01763-251119 পরবর্তী
                  অপশনে টাকার পরিমান লিখুন।
                  <br /> 05.এ্যাপ দিয়ে পেমেন্ট করলেরেফারেন্স এর ঘরে অর্ডার
                  নাম্বারটি লিখুন।
                  <br /> 06. আপনার রকেট একাউন্ট পিন দিয়ে কনফার্ম করুন।
                  <h2 className="mt-5 fs-1">
                    নিচের QR কোড স্ক্যান করেও টাকা পাঠাতে পারেন
                  </h2>
                  <div className="bkashQR">
                    <img
                      src="/assets/images/checkout/rocket-QR-code.png"
                      alt="bkash QR Code"
                    />
                  </div>
                </>
              )}
              <p>
                আপনার পেমেন্ট সম্পন্ন হয়ে গেলে যে ট্রানজেকশন নাম্বার এবং যে
                নাম্বার থেকে টাকা পাঠিয়েছেন তা দিয়ে নিচের ফর্মে ফিলাপ করে সেন্ড
                করুন <span className="fs-">↴</span>
              </p>
              <p>
                <div>
                  <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        ফোন নাম্বার (যে নাম্বার থেকে টাকা পাঠাইছেন)
                      </label>
                      <input
                        type="text"
                        className="form-control py-3 fs-3"
                        id="exampleFormControlInput1"
                        placeholder="ফোন নাম্বার"
                        value={data.number}
                        name="number"
                        onChange={changeHandler}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        ট্রানজেকশন নাম্বার
                      </label>
                      <input
                        type="text"
                        className="form-control py-3 fs-3"
                        id="exampleFormControlInput1"
                        placeholder="ট্রানজেকশন নাম্বার"
                        value={data.id}
                        name="id"
                        onChange={changeHandler}
                      />
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-success fs-2 px-5"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </p>
              <p>
                উপরোক্ত নিয়মে টাকা পরিশোধ করলেই আপনার এনরোলমেন্ট কনফার্ম হবে।
              </p>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-xl-8">
              <table className="table caption-top pt-3">
                <caption className="fs-2 text-uppercase fw-bold text-dark">
                  Products
                </caption>
                <tbody>
                  <tr className="fs-2">
                    <td>ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট (অফলাইন)</td>
                    <td>
                      <b>৳ ৭,৯৯৯</b>
                    </td>
                  </tr>
                  <tr className="fs-2">
                    <td>Advance Payment</td>
                    <td>
                      <b>৳ ২,৯৯৯</b>
                    </td>
                  </tr>
                  <tr className="fs-2">
                    <td>Payment Method</td>
                    <td>
                      <b>bKash</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Payment;
