
import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia row">
        <div className="socialLI col">
          <a href='https://www.linkedin.com/in/suraj-s-gopal/' target="_blank" rel="noreferrer"><LinkedInIcon /></a>
        </div>
        <div className="socialGH col">
          <a href='https://github.com/surajgopal85' target="_blank" rel="noreferrer"><GitHubIcon /></a>
        </div>
      </div>
      <p> &copy; 2023 Suraj Gopal </p>
    </div>
  )
}

export default Footer;
