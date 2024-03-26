import React, { useEffect, useRef, useState } from 'react';
import { FaCheck, FaRegImages } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { update } from '../../../redux/features/user/user';
import axiosClient from '../../../utilities/axios';
// import { hashStr } from '../../../../server/utilities/helpers';

const ProfileDetail = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { firstName, lastName, email, avatar } = user;
  const imgRef = useRef();
  const [isChanged, setChanged] = useState(true);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    avatar: null,
  });

  const [passwords, setPasswords] = useState({
    password: '',
    confirmPassword: '',
  });

  const changeHandler = (e) => {
    if (e.target.type === 'file') {
      const files = e.target.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = function (ev) {
          imgRef.current.src = ev.target.result;
        };
        reader.readAsDataURL(files[0]);
        setData({ ...data, avatar: files[0] });
      } else {
        console.log('opps!');
      }
      return;
    }
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  function passwordChanger(e) {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (
      data.firstName !== user.firstName ||
      data.lastName !== user.lastName ||
      data.avatar !== null
    ) {
      setChanged(false);
    } else {
      setChanged(true);
    }
  }, [data]);

  useEffect(() => {
    setData({
      firstName: user.firstName,
      lastName: user.lastName,
      avatar: user.avatar,
    });
  }, [user]);

  function passwordUpdateHandler(e) {
    e.preventDefault();
    if (passwords.password !== passwords.confirmPassword) {
      return toast('Password do not match')();
    }
    axiosClient
      .put(
        `https://techanalyzen.libertysailingschool.net/api/user/${user._id}`,
        {
          method: 'PUT',
          body: JSON.stringify(data),
        }
      )
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          alert('User updated successfully');
        } else {
          alert(data.msg);
        }
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('avatar', data.avatar);

    fetch(
      'https://techanalyzen.libertysailingschool.net/api/v1/user/updateInfo',
      {
        method: 'PUT',
        body: formData,
      }
    )
      .then((r) => r.json())
      .then((data) => {
        dispatch(update(data));
        const notify = () => toast('Successfully Updated!');
        notify();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="profile_box mt-5 py-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="personal_detail">
              <div className="title">পার্সোনাল ডিটেইলস</div>
              <div className="form_box">
                <img
                  src={
                    avatar
                      ? `/files/thumb/profile/${avatar}`
                      : '/logo/profile-img.svg'
                  }
                  alt="Logo"
                  ref={imgRef}
                  className="img-fluid profile_avatar"
                />
                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-md-12 text-center">
                    <div className="upload-btn-wrapper">
                      <div className="image_btn">
                        <label
                          htmlFor="avatar_file"
                          style={{ cursor: 'pointer' }}
                        >
                          <button
                            type="button"
                            style={{ pointerEvents: 'none' }}
                            className="btn btn-primary"
                          >
                            ছবি আপলোড করুন <FaRegImages />
                            <input
                              id="avatar_file"
                              name="avatar"
                              onChange={changeHandler}
                              type="file"
                              hidden
                            />
                          </button>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="fastName" className="form-label">
                      নামের প্রথম অংশ
                    </label>
                    <input
                      type="text"
                      aria-label="First name"
                      className="form-control"
                      id="fastName"
                      name="firstName"
                      value={data.firstName}
                      onChange={changeHandler}
                      placeholder="নামের প্রথম অংশ"
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="lastName" className="form-label">
                      নামের দ্বিতীয় অংশ
                    </label>
                    <input
                      type="text"
                      aria-label="First name"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={data.lastName}
                      onChange={changeHandler}
                      placeholder="নামের দ্বিতীয় অংশ"
                    />
                  </div>
                  <div className="col-md-12">
                    <div>
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        ইমেইল
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        disabled
                        style={{ cursor: 'not-allowed' }}
                        placeholder="ইমেইল"
                        value={user.email}
                      />
                    </div>
                  </div>
                  <div className="col-12 text-end mt-4">
                    <button
                      disabled={isChanged}
                      type="submit"
                      className="btn btn-primary dashboard_btn"
                    >
                      আপডেট করুন <FaCheck className="ms-3" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="password_change">
              <div className="title">পাসওয়ার্ড পরিবর্তন করুন</div>
              <div className="form_box">
                <img
                  style={{ width: '265px', margin: '', border: '0' }}
                  src="/logo/password.svg"
                  alt="Logo"
                />
                <form onSubmit={passwordUpdateHandler} className="row g-3">
                  <div className="col-md-12">
                    <label
                      htmlFor="inputPassword3"
                      className="col-sm-12 col-form-label"
                    >
                      নতুন পাসওয়ার্ড
                    </label>

                    <div className="col-sm-12">
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword3"
                        placeholder="নতুন পাসওয়ার্ড"
                        name="password"
                        onChange={passwordChanger}
                        value={passwords.password}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div>
                      <label
                        htmlFor="inputPassword4"
                        className="col-sm-12 col-form-label"
                      >
                        কনফার্ম পাসওয়ার্ড
                      </label>
                      <div className="col-sm-12">
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword4"
                          placeholder="কনফার্ম পাসওয়ার্ড"
                          name="confirmPassword"
                          onChange={passwordChanger}
                          value={passwords.confirmPassword}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary dashboard_btn d-block w-100"
                    >
                      পাসওয়ার্ড সেট করি <FaCheck className="ms-3" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
