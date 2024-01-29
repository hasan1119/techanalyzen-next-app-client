import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import SideNav from './SideNav/SideNav';
import TopNav from './topNav/TopNav';

const DashboardLayout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const router = useRouter();

  // useEffect(() => {
  //   if (!user._id) {
  //     router.push('/login?redirect=/dashboard');
  //   }
  // }, [user]);

  return (
    <>
      <div className="dashboard">
        <div className="dashboard_area">
          <SideNav />

          <div className="right_bar">
            <TopNav />
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
