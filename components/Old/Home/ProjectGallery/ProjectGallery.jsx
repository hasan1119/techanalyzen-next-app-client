import React from 'react';

const ProjectGallery = () => {
  return (
    <section className="projects-section px-md-5 px-sm-5">
      <div className="container">
        <div className="projects-header-title">
          <div className="project-icon">
            <img src="/assets/images/svg/project_icon.svg" alt="" />
          </div>
          <div className="projects-text">
            <h3>
              যেসব <span>লাইভ প্রজেক্টগুলো</span> কোর্সে করবেন
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="row">
              <div className="col-lg-6 col-md-6 pt-2">
                <div className="mini-project-item-one">
                  <img src="/assets/images/projects/project_1.png" alt="" />
                  <div className="project-overlay">
                    <div className="project-titel">Project Title</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 pt-2">
                <div className="mini-project-item-two">
                  <img src="/assets/images/projects/project_2.png" alt="" />
                  <div className="project-overlay">
                    <div className="project-titel">Project Title</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 pt-2">
                <div className="mini-project-item-three">
                  <img src="/assets/images/projects/project_3.png" alt="" />
                  <div className="project-overlay">
                    <div className="project-titel">Project Title</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 pt-2">
                <div className="mini-project-item-four">
                  <img src="/assets/images/projects/project_4.png" alt="" />
                  <div className="project-overlay">
                    <div className="project-titel">Project Title</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 pt-2">
            <div className="max-project-item-one">
              <img src="/assets/images/projects/project_5.png" alt="" />
              <div className="project-overlay">
                <div className="project-titel">Project Title</div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 pt-2">
            <div className="max-project-item-two">
              <img src="/assets/images/projects/project_6.png" alt="" />
              <div className="project-overlay">
                <div className="project-titel">Project Title</div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 pt-2">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="mini-project-item-one">
                  <img src="/assets/images/projects/project_1.png" alt="" />
                  <div className="project-overlay">
                    <div className="project-titel">Project Title</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 pt-2">
                <div className="mini-project-item-two">
                  <img src="/assets/images/projects/project_2.png" alt="" />
                  <div className="project-overlay">
                    <div className="project-titel">Project Title</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 pt-2">
                <div className="mini-project-item-three">
                  <img src="/assets/images/projects/project_3.png" alt="" />
                  <div className="project-overlay">
                    <div className="project-titel">Project Title</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 pt-2">
                <div className="mini-project-item-four">
                  <img src="/assets/images/projects/project_4.png" alt="" />
                  <div className="project-overlay">
                    <div className="project-titel">Project Title</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
