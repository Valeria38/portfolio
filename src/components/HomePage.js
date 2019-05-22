import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomePageInfo from './HomePageInfo';
import HomePageSkills from './HomePageSkills';
import HomePageScroll from './HomePageScroll';

class HomePage extends React.Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div>
        <HomePageInfo />
        <HomePageScroll />
        <HomePageSkills />
    </div>
    )
  }
};

export default HomePage;