import React, { Component } from 'react';
import './App.css';
import { Route, Link, NavLink } from 'react-router-dom';
import HomePage from './components/HomePage';
import ReactPage from './components/ReactPage';
import JSPage from './components/JSPage';
import LayoutPage from './components/LayoutPage';
import ContactsPage from './components/ContactsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* header */}
          <ul className="navigation-menu">
            <li><NavLink className="navigation-menu__link" to="/">Home</NavLink></li>
            <li><NavLink className="navigation-menu__link" to="/react">React</NavLink></li>
            <li><NavLink className="navigation-menu__link" to="/js">JavaScript</NavLink></li>
            {/* <li><NavLink className="navigation-menu__link" to="/layout">Layouts</NavLink></li> */}
            <li><NavLink className="navigation-menu__link" to="/contacts">Contacts</NavLink></li>
          </ul>
          {/* main content */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/react" component={ReactPage} />
          <Route exact path="/js" component={JSPage} />
          <Route exact path="/layout" component={LayoutPage} />
          <Route exact path="/contacts" component={ContactsPage} />
          {/* footer */}
          <footer className="footer">
            <a href="https://www.linkedin.com/in/valeria-gora-b6a004108/" target="_blank">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://t.me/valeria38" target="_blank">
              <i class="fab fa-telegram fa-2x"></i>
            </a>
           
          </footer>
      </div>
    );
  }
}

export default App;
