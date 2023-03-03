import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className="about">
        <h2>Hi, I'm Suraj!</h2>
        <div className="prompt">
        <p>I used to teach high school.
        Now, I'm kicking off my next career adventure as a software engineer.</p>
        <LinkedInIcon />
        <EmailIcon />
        <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front End</h2>
            <span>HTML, CSS, ReactJS, NPM, Yarn, Bootstrap, MaterialUI, StyledComponents</span>
          </li>
          <li className='item'>
            <h2>Back End</h2>
            <span>Rails, Node, MySQL, PostgreSQL, MongoDB</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Java, Javascript, Python, Ruby</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;
