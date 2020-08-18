import React from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => (
  <nav>
    <div className="nav-wrapper container">
      <a href="#" className="brand-logo" style={{ width: '100%' }}>
        <img
          src={logo}
          alt="Noteworthy"
          style={{ display: 'inline', width: '1.75rem' }}
          width="1.75rem"
        />{' '}
        Noteworthy
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
