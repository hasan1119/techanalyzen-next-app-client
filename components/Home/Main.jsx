import React from 'react';
import AboutCourse from './AboutCourse/AboutCourse';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import OurCourses from './OurCourses/OurCourses';
import Outcome from './Outcome/Outcome';
import Pricing from './Pricing/Pricing';
import ProjectGallery from './ProjectGallery/ProjectGallery';
/* import SpecialOffer from './SpecialOffer/SpecialOffer'; */

const Main = () => {
  return (
    <main>
      <Banner />
      {/* <SpecialOffer /> */}
      {/* <CourseSystem /> */}
      <OurCourses />
      <AboutCourse />
      <ProjectGallery />
      <Outcome />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
};

export default Main;
