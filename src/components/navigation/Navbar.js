import React from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => (
  <nav>
    <div className="nav-wrapper container">
      <a href="#" className="brand-logo">
        <img
          src={logo}
          alt="Notes"
          style={{ display: 'inline', width: '1.75rem' }}
          width="1.75rem"
        />{' '}
        Notes
      </a>
      <ul class="right hide-on-med-and-down">
        <li>
          <a class="waves-effect waves-light btn">Register</a>
        </li>
        <li>
          <a class="waves-effect waves-light btn-flat">Login</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
