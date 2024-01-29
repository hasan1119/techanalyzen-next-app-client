import React from 'react';
import Header from '../../components/Home/Banner/Header';
import Footer from '../../components/Home/Footer/Footer';
const Payment = () => {
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
                      <b>1234</b>
                    </p>
                  </td>
                  <td className="text-center">
                    <p className="m-0">Date</p>
                    <p>
                      <b>july 16,2023</b>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <p className="m-0">Email:</p>
                    <p>
                      <b>rakibhasan@gmail.com</b>
                    </p>
                  </td>
                  <td className="text-center">
                    <p className="m-0">Advance Payment:</p>
                    <p>
                      <b>৳ 8,000</b>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <p className="m-0">Payment Method:</p>
                    <p>
                      <b>bKash</b>
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
              <br /> 03. আমাদের বিকাশ নাম্বারটি দিন 01710450910 04. পরবর্তী
              অপশনে টাকার পরিমান লিখুন।
              <br /> 05. রেফারেন্স এর ঘরে অর্ডার নাম্বারটি লিখুন।
              <br /> 06. আপনার বিকাশ একাউন্ট পিন দিয়ে কনফার্ম করুন।
              <h2 className="mt-5 fs-1">
                নিচের QR কোড স্ক্যান করেও টাকা পাঠাতে পারেন
              </h2>
              <h3 className="text-center">
                <img src="/assets/images/checkout/qrcode.png" alt="" />
              </h3>
              <p className="fs-2 text-center">01700000000</p>
              <p className="fs-2 text-center">
                <b>সেন্ড মানি</b> করতে বিকাশ অ্যাপ
                <br /> দিয়ে QR কোডটি স্ক্যান করুন
              </p>
              <p className="text-center">
                <img src="/assets/images/checkout/bikash-logo.png" alt="" />
              </p>
              <p>
                আপনার পেমেন্ট সম্পন্ন হয়ে গেলে যে ট্রানজেকশন নাম্বারটা পাবেন
                ওটা নিচের ফর্মে ফিলাপ করে সেন্ড করুন{' '}
                <span className="fs-">↴</span>
              </p>
              <p>
                <div>
                  <form className="row g-3">
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
                উপরোক্ত নিয়মে টাকা পরিশোধ করলেই আপনার অর্ডার কনফার্ম। ফোন করে
                আর বলতে হবে না যে টাকা পাঠিয়েছেন। অটো আপনার অর্ডার কনফার্ম হয়ে
                যাবে।
              </p>
            </div>
          </div>
          <div className="row">
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
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Payment;
