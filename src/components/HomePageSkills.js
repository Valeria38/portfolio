import React from 'react';
import { Link } from 'react-router-dom';

const HomePageSkills = () => (
  <div className='homepage__skills'>
    <Link to='/react' className='homepage__link'>
      Click here to see my projects
    </Link>
    <div className='homepage__tech-skills' id='skills'>
      <ul className='homepage__menu'>
        <li data-aos='fade-left' data-aos-duration='300'>
          Technical skills:
        </li>
        <li data-aos='fade-left' data-aos-duration='500'>
          HTML5
        </li>
        <li data-aos='fade-left' data-aos-duration='700'>
          CSS3
        </li>
        <li data-aos='fade-left' data-aos-duration='900'>
          JavaScript
        </li>
        <li data-aos='fade-left' data-aos-duration='1100'>
          React
        </li>
        <li data-aos='fade-left' data-aos-duration='1300'>
          Redux
        </li>
        <li data-aos='fade-left' data-aos-duration='1500'>
          Using BEM methodology
        </li>
        <li data-aos='fade-left' data-aos-duration='1700'>
          Webpack
        </li>
        <li data-aos='fade-left' data-aos-duration='1900'>
          Git
        </li>
        <li data-aos='fade-left' data-aos-duration='2100'>
          Photoshop
        </li>
      </ul>
    </div>
  </div>
);

export default HomePageSkills;
