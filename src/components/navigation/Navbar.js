import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, login, logout }) => {
  if (isAuthenticated)
    return (
      <nav>
        <div className="container">
          <div className="row">
            <div className="col s9">
              <Link
                to="/"
                className="brand-logo left"
                style={{ marginLeft: '1rem' }}
              >
                <img
                  src={logo}
                  alt="Noteworthy"
                  style={{ width: '1.5rem' }}
                  width="1.5rem"
                />{' '}
                <h1>Noteworthy</h1>
              </Link>
            </div>
            <div className="col s3">
              <ul className="right">
                <li>
                  <button
                    onClick={logout}
                    className="waves-effect waves-light btn grey-text text-darken-4 grey lighten-3"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  else
    return (
      <nav>
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Link to="/" className="brand-logo">
                <img
                  src={logo}
                  alt="Noteworthy"
                  style={{ width: '1.5rem' }}
                  width="1.5rem"
                />{' '}
                <h1>Noteworthy</h1>
              </Link>
            </div>
            <div className="col m6">
              <ul className="right hide-on-med-and-down button-group">
                <li>
                  <button className="waves-effect waves-light btn">
                    Register
                  </button>
                </li>
                <li>
                  <button
                    onClick={login}
                    className="waves-effect waves-light btn grey-text text-darken-4 grey lighten-3"
                  >
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
