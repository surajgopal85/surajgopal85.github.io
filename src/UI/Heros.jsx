import React from 'react';
import '../styles/Heros.css';
import backend from '../assets/local_controller.png';
import frontend from '../assets/local_ui_new.png';

const Heros = () => {
  return (
    <>
      <div className="d-lg-block container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left card image-frontend">
            <img src={frontend} alt='local-ui' />
            </div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2 card">
              <h1>Front End</h1>
              <p className="lead">
              HTML, CSS, ReactJS, NPM, Yarn, Bootstrap, MaterialUI, StyledComponents
              </p>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2 card">
              <h1>Back End</h1>
              <p className="lead">Spring Boot, Spring REST, Spring JPA, Rails, MySQL, PostgreSQL</p>
            </div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="col-image-right card image-backend">
              <img src={backend} alt='local-controller' />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Heros */}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-left">

            </div>
                <div className="mt-2">
                <h1>Front End</h1>
                <p className="lead">
                HTML, CSS, ReactJS, Typescript, NPM, Yarn, Bootstrap, MaterialUI, StyledComponents
                </p>
                {/* <a href="#" className="btn main-color btn-lg text-white">Sign up</a> */}
              </div>
            </div>
          </div>
          <div className="m-2">
            <div className="col-image-right"></div>
              <div className="mt-2">
                <h1>Back End</h1>
                <p className="lead">Spring Boot, Spring REST, Spring JPA, Rails, MySQL, PostgreSQL</p>
              </div>
          </div>
        </div>
    </>
  );
}

export default Heros;
