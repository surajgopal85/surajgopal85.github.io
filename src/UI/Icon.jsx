import React from 'react'
import headshot from '../assets/headshot.jpeg';
import '../styles/Icon.css';

const Icon = () => {
  return (
    <div>
    <img className='icon' src={headshot} alt='' style={{ maxWidth: 75, maxHeight: 100}} />
    </div>
  );
}

export default Icon;
