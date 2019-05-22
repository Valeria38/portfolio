import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import ReactPage from './ReactPage';
import JSPage from './JSPage';
import ContactsPage from './ContactsPage';

const Router = () => (
  <>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/react' component={ReactPage} />
    <Route exact path='/js' component={JSPage} />
    <Route exact path='/contacts' component={ContactsPage} />
  </>
);

export default Router;
