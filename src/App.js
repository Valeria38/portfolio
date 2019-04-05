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
          <ul className="navigation-menu">
            <li><NavLink className="navigation-menu__link" to="/">Home</NavLink></li>
            <li><NavLink className="navigation-menu__link" to="/react">React</NavLink></li>
            <li><NavLink className="navigation-menu__link" to="/js">JavaScript</NavLink></li>
            <li><NavLink className="navigation-menu__link" to="/layout">Layouts</NavLink></li>
            <li><NavLink className="navigation-menu__link" to="/contacts">Contacts</NavLink></li>
          </ul>
          {/* <hr /> */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/react" component={ReactPage} />
          <Route exact path="/js" component={JSPage} />
          <Route exact path="/layout" component={LayoutPage} />
          <Route exact path="/contacts" component={ContactsPage} />
      </div>
    );
  }
}

export default App;
