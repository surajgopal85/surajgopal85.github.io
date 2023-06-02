import React from 'react';
import Grid from '../UI/Grid';
import '../styles/Home.css';


const Home = () => {
  return (
    <div className='home'>
      <div className="about">
        <h2>Hi, I'm Suraj.</h2>
          <div className="prompt">
            <p><strong>A fullstack software engineer building<br></br>backend architecture and frontend UIs.</strong></p>
        </div>
      </div>
      <Grid />
    </div>
  )
}

export default Home;
