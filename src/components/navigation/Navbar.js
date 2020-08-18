import React from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => (
  <nav>
    <div className="nav-wrapper container">
      <div className="row">
        <div class="col s12 m6">
          <a href="#" className="brand-logo">
            <img
              src={logo}
              alt="Noteworthy"
              style={{ display: 'inline', width: '1.75rem' }}
              width="1.75rem"
            />{' '}
            Noteworthy
          </a>
        </div>
        <div class="col m6">
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#" className="waves-effect waves-light btn">
                Register
              </a>
            </li>
            <li>
              <a href="#" className="waves-effect waves-light btn-flat">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
