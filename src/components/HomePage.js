import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div>
        <div className="homepage">
          <div className="homepage__photo"></div>  
          <div className="homepage__info">
            <p>Hi! My name is Valeria Gora.</p>
            <p>I am FrontEnd Developer.</p>
            <p>I have good knowledge in HTML/CSS and well familiar with JavaScript.</p>
            <p>I am able to work on and support several projects simultaneously.</p>
            <p>Continuously striving to improve all practices, routines and systems.</p>
            <p> I am looking for a job where I can work in a team, improve my professional skills. </p>
          </div>
        </div>

        <div class="homepage__scroll">
          <a href="#skills" ><i class="homepage__arrow-down"></i></a>
        </div>
        <div className="homepage__skills">
          <Link to="/react" className="homepage__link">Click here to see my projects</Link>
          <div className="homepage__tech-skills" id="skills">
            <ul
              data-aos="fade-left"
              class="homepage__menu"
              data-aos-duration="1000"
            >
              <li>Technical skills:</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Using BEM methodology</li>
              <li>Webpack</li>
              <li>Git</li>
              <li>Photoshop</li>
            </ul>
          </div>
        </div>
    </div>
    )
  }
};

export default HomePage;