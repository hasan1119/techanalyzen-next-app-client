import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BiLibrary } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import { CiLogout } from 'react-icons/ci';
import { FaBook, FaBookReader, FaVideo } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdOutlineCreate, MdTypeSpecimen } from 'react-icons/md';
import { PiFoldersBold } from 'react-icons/pi';
import { useSelector } from 'react-redux';
const SideNav = () => {
  const [isOpen, setOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const toggle = () => setOpen(!isOpen);

  const studentMenus = [
    {
      path: '/dashboard/overview',
      name: 'ওভারভিউ',
      icon: <FaBookReader />,
    },
    {
      path: '/dashboard/profile',
      name: 'প্রোফাইল',
      icon: <BsPersonCircle />,
    },
    {
      path: '/dashboard/my-courses',
      name: 'আমার কোর্স',
      icon: <FaBook />,
    },
    {
      path: '/dashboard/class-recordings',
      name: 'রেকর্ডিং',
      icon: <FaVideo />,
    },
    {
      path: '/dashboard/resources',
      name: 'রিসোর্স',
      icon: <PiFoldersBold />,
    },
  ];

  const adminMenus = [
    {
      path: '/dashboard/profile',
      name: 'প্রোফাইল',
      icon: <BsPersonCircle />,
    },
    {
      path: '/dashboard/courses',
      name: 'কোর্স সমুহ',
      icon: <BiLibrary />,
    },
    {
      path: '/dashboard/courses/create',
      name: 'কোর্স তৈরী করুন',
      icon: <MdOutlineCreate />,
    },
    {
      path: '/dashboard/categories',
      name: 'ক্যাটেগরীস',
      icon: <MdTypeSpecimen />,
    },
    {
      path: '/dashboard/categories/add',
      name: 'ক্যাটেগরী যোগ করুন',
      icon: <MdTypeSpecimen />,
    },
    {
      path: '/dashboard/sub-categories',
      name: 'সাব-ক্যাটেগরীস',
      icon: <MdTypeSpecimen />,
    },
    {
      path: '/dashboard/sub-categories/add',
      name: 'সাব-ক্যাটেগরী যোগ করুন',
      icon: <MdTypeSpecimen />,
    },
    {
      path: '/dashboard/users',
      name: 'ইউজার্স',
      icon: <MdTypeSpecimen />,
    },
  ];

  const isAdmin = user.role && user.role.includes('admin');

  const menuItems = !isAdmin ? adminMenus : studentMenus;

  const router = useRouter();
  const path = router.pathname;

  return (
    <div
      className={isOpen ? 'side_nav collapse' : 'side_nav'}
      style={{ width: !isOpen ? '300px' : '80px' }}
    >
      <div className="top_section">
        <div className="logo">
          <Link href="/">
            <a>
              {isOpen ? (
                <img
                  style={{ width: '40px', marginRight: '8px' }}
                  src="/logo/logo_square_black.png"
                  alt="Logo"
                />
              ) : (
                <img src="/logo/logo_black.png" alt="Logo" />
              )}
            </a>
          </Link>
        </div>

        <div onClick={toggle} className={isOpen ? 'bars' : 'bars collapse'}>
          {isOpen ? <IoIosArrowForward /> : <IoIosArrowBack />}
        </div>
      </div>
      {menuItems.map((items) => (
        <div
          key={items.path}
          className={items.path === '/logout' ? 'navLink profile' : 'navLink'}
        >
          <Link href={items.path}>
            <a className={path === items.path ? 'link active' : 'link'}>
              <div className="icon"> {items.icon}</div>
              <div className={isOpen ? 'link_text' : 'link_text navOpen'}>
                {items.name}
              </div>
            </a>
          </Link>
        </div>
      ))}

      <div className="navLink logout">
        <a className="link">
          <div className="icon">
            <CiLogout />
          </div>
          <div className={isOpen ? 'link_text' : 'link_text navOpen'}>
            লগআউট
          </div>
        </a>
      </div>
    </div>
  );
};

export default SideNav;
