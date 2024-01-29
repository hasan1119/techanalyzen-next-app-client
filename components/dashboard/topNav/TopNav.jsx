import React from 'react';
import { FaRegBell } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const TopNav = () => {
  const { user } = useSelector((state) => state.user);
  const { firstName, lastName, username } = user;

  return (
    <div className="top_nav_bar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="w-100 d-flex justify-content-between align-items-center">
          <h2 className="tab_header m-0 ms-5">প্রোফাইল</h2>
          <div className="dashboard_top_right">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle notification_button"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaRegBell />
              </button>
              <ul
                className="dropdown-menu d_width"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <div className="profile_name">Notifications</div>
                  <div className="notification_email">
                    You have 2 unread messages
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item item_notification" href="#">
                    Your order is placed<span>waiting for shipping</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item item_notification" href="#">
                    Your order is placed<span>waiting for shipping</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle profile_button"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="profile_icon">
                  <img
                    src={
                      user.avatar
                        ? `/files/thumb/profile/${user.avatar}`
                        : '/logo/profile-img.svg'
                    }
                    alt="Profile Icon"
                  />
                </div>
              </button>
              <ul
                className="dropdown-menu d_width"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <div className="profile_name">
                    {firstName} {lastName}
                  </div>
                  <div className="profile_email">{username}</div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
