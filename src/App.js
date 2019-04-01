import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ReactPage from './components/ReactPage';
import JSPage from './components/JSPage';
import LayoutPage from './components/LayoutPage';
import ContactsPage from './components/ContactsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/react">React</Link></li>
            <li><Link to="/js">JavaScript</Link></li>
            <li><Link to="/layout">Layout</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
          <hr />
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
