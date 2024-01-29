import React from 'react';
import CourseCard from './CourseCard';

const TabContent = () => {
  // const offline = {
  //   thumbnail: '/assets/images/banner/banner1.png',
  //   category: 'Web Development',
  //   title: 'MERN Stack Web development (Offline Course)',
  //   description: '',
  //   instructor: 'Md. Rokibul Hasan',
  //   instructorImg: '',
  //   courseDuration: '120hr 30min',
  //   lessons: '100+ Lesson',
  //   courseNature: 'Beginner',
  //   price: '7999',
  //   originalPrice: '9999',
  //   discount: '25',
  //   rating: '5',
  //   ratingCount: '28',
  //   detailsPageLink: '/courses/offline',
  // };
  // const online = {
  //   thumbnail: '   /assets/images/banner/banner3.png',
  //   category: 'Web Development',
  //   title: 'MERN Stack Web development (Online Live Class)',
  //   description: '',
  //   instructor: 'Md. Rokibul Hasan',
  //   instructorImg: '',
  //   courseDuration: '120hr 30min',
  //   lessons: '100+ Lesson',
  //   courseNature: 'Beginner',
  //   price: '6999',
  //   originalPrice: '8750',
  //   discount: '25',
  //   rating: '5',
  //   ratingCount: '18',
  //   detailsPageLink: '/courses/online',
  // };
  // const live = {
  //   thumbnail: '/assets/images/banner/banner2.jpg ',
  //   category: 'Web Development',
  //   title: 'MERN Stack Web development (Pre Recorded)',
  //   description: '',
  //   instructor: 'Md. Rokibul Hasan',
  //   instructorImg: '',
  //   courseDuration: '120hr 30min',
  //   lessons: '100+ Lesson',
  //   courseNature: 'Beginner',
  //   price: '5999',
  //   originalPrice: '7499',
  //   discount: '25',
  //   rating: '5',
  //   ratingCount: '33',
  //   detailsPageLink: '/courses/pre-recorded',
  // };
  return (
    <>
      <div className="ux-design">
        <div className="row">
          <CourseCard details={offline} />
          <CourseCard details={online} />
          <CourseCard details={live} />
        </div>
      </div>
      {/*  ux-design-tab  */}
      {/* <div className="tab-pane fade active" id="ux-design-tab">
        <div className="ux-design">
          <div className="row">
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div> */}
      {/*  development-tab  */}
      {/* <div className="tab-pane fade show active" id="development-tab">
        <div className="ux-design">
          <div className="row">
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div> */}
      {/*  marketing-tab */}
      {/* <div className="tab-pane fade active" id="marketing-tab">
        <div className="ux-design">
          <div className="row">
            <CourseCard />
          </div>
        </div>
      </div> */}
      {/*  business-tab */}
      {/* <div className="tab-pane fade active" id="business-tab">
        <div className="ux-design">
          <div className="row">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div> */}
      {/*  technology-tab */}
      {/* <div className="tab-pane fade active" id="technology-tab">
        <div className="ux-design">
          <div className="row">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default TabContent;
