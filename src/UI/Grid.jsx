import React from 'react';
import local_controller from '../assets/local_controller.png';
import local_square from '../assets/local-square.png';

const Grid = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-3 mb-3">
          <img className='img-fluid rounded' src={local_square} alt="ui-pic" />
        </div>
        <div className="col text-center mt-3 mb-3">
          <h1>Front End</h1>
          <p className="lead">
          HTML, CSS, ReactJS, NPM, Yarn, Bootstrap, MaterialUI, StyledComponents
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center mt-3 mb-3">
          <h1>Back End</h1>
          <p className="lead">Spring Boot, Spring REST, Spring JPA, Rails, MySQL, PostgreSQL</p>
        </div>
        <div className="col mt-3 mb-3">
        <img className='img-fluid rounded' src={local_controller} alt="ui-pic" />
        </div>
      </div>
    </div>
  );
}

export default Grid;
