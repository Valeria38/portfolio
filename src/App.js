import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Router from './components/Router';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* header */}
        <Navigation />
        {/* main content */}
        <Router />
        {/* footer */}
        <footer className='footer'>
          <a
            href='https://www.linkedin.com/in/valeria-gora-b6a004108/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin fa-2x' />
          </a>
          <a
            href='https://t.me/valeria38'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-telegram fa-2x' />
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
