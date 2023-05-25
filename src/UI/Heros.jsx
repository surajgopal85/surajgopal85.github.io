import React from 'react';

const Heros = () => {
  return (
    <>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Front End</h1>
              <p className="lead">
              HTML, CSS, ReactJS, NPM, Yarn, Bootstrap, MaterialUI, StyledComponents
              </p>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Back End</h1>
              <p className="lead">Spring Boot, Spring REST, Spring JPA, Rails, MySQL, PostgreSQL</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
      </div>

      {/* Mobile Heros */}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-left"></div>
                <div className="mt-2">
                <h1>Front End</h1>
                <p className="lead">
                HTML, CSS, ReactJS, Typescript, NPM, Yarn, Bootstrap, MaterialUI, StyledComponents
                </p>
                <a href="#" className="btn main-color btn-lg text-white">Sign up</a>
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
