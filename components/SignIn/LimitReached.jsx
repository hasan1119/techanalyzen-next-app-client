import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/features/user/user';
import axiosClient from '../../utilities/axios';

const LimitReached = ({ error, setError, loading, setLoading, userInfo }) => {
  const { limit } = error;
  const { loggedInSession } = limit?.user;
  const dispatch = useDispatch();
  const router = useRouter();
  const [loginEnable, setLoginEnable] = useState(false);

  // handle signin
  function handleSignIn(e, clear, { removeId, type } = {}) {
    e.preventDefault();
    console.log('called', userInfo);
    if (userInfo.username && userInfo.password) {
      setLoading(true);
      axiosClient
        .post(
          `/auth/v1/login?clear=${clear ? clear : ''}&removeId=${
            removeId ? removeId : ''
          }`,
          userInfo
        )
        .then(({ data }) => {
          if (data.status === 'removed') {
            data.status = 'device-limit-reached';
            setError({ ...error, limit: data });

            if (type === data.type) {
              setLoginEnable(true);
            }
          } else {
            dispatch(login(data.user));
            setError({
              username: '',
              password: '',
              limit: null,
            });
            return router.push('/');
          }
        })
        .catch(({ response: { data } = {} }) => {
          if (data.status === 'device-limit-reached') {
            console.log('line 65', data);
            setError({ ...error, limit: data });
          } else {
            console.log('line 68', data);
            setError({ ...error, ...data, limit: null });
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  return (
    <>
      <div>
        <table className="table">
          <thead
            style={{ fontSize: '18px', padding: '15px', textAlign: 'center' }}
          >
            <tr>
              <th>SN</th>
              <th>Device</th>
              <th>IP</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loggedInSession?.map(
              ({ _id, date, device: { type, name, details } }, i) => (
                <tr
                  key={_id}
                  style={{
                    fontSize: '18px',
                    padding: '15px',
                    marginBottom: '20px',
                  }}
                >
                  <td>{i + 1}</td>
                  <td>
                    {name} - {`(${type})`}
                  </td>
                  <td>{details.ip}</td>
                  <td>{new Date(date).toLocaleString()}</td>
                  <td>
                    <button
                      onClick={(e) =>
                        handleSignIn(e, undefined, { removeId: _id, type })
                      }
                      className="reached_remove_btn "
                    >
                      Remove
                    </button>

                    {type === limit?.type ? (
                      <button
                        onClick={(e) => handleSignIn(e, _id)}
                        className="reached_login_btn"
                      >
                        Remove & Login
                      </button>
                    ) : (
                      ''
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>

        <div className="d-flex">
          <button
            onClick={(e) => handleSignIn(e, 'all')}
            className="common_btn me-4"
          >
            Remove All & login
          </button>
          {loginEnable ? (
            <button
              onClick={(e) => handleSignIn(e)}
              className="common_btn login_btn"
            >
              Login now
            </button>
          ) : (
            <button
              title={`Please remove one of ${limit?.type} device first !`}
              disabled
              className="common_btn login_btn"
            >
              Login now
            </button>
          )}
        </div>

        {/* <p className="errorMsg">
          <AiOutlineInfoCircle /> Please logout from one of desktop device first
          !
        </p> */}
      </div>

      <p className="reached_error">
        <AiOutlineInfoCircle /> Please logout from one of desktop device first !
      </p>
    </>
  );
};

export default LimitReached;
