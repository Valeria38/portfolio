import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <ul className='navigation-menu'>
    <li>
      <NavLink className='navigation-menu__link' to='/'>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink className='navigation-menu__link' to='/react'>
        React
      </NavLink>
    </li>
    <li>
      <NavLink className='navigation-menu__link' to='/js'>
        JavaScript
      </NavLink>
    </li>
    <li>
      <NavLink className='navigation-menu__link' to='/contacts'>
        Contacts
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
