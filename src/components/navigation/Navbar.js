import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, login, logout, register, user }) => {
  if (isAuthenticated)
    return (
      <nav>
        <div className="container">
          <div className="row">
            <div className="col s9 m4">
              <Link
                to="/"
                className="brand-logo left"
                style={{ marginLeft: '1rem' }}
              >
                <img
                  src={logo}
                  alt="SimplySticky"
                  style={{ width: '1.6rem' }}
                />{' '}
                <h1>SimplySticky</h1>
              </Link>
            </div>
            <div className="col s3 m8">
              <ul className="right button-group">
                {user && (
                  <li className="hide-on-med-and-down">
                    Welcome back,{' '}
                    <strong>{user.user_metadata.full_name}</strong>
                  </li>
                )}
                <li>
                  <button
                    onClick={logout}
                    className="waves-effect waves-light btn-flat grey-text text-lighten-4"
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
            <div className="col s12 m6 animate__animated animate__fadeIn">
              <Link to="/" className="brand-logo">
                <img
                  style={{ width: '1.6rem' }}
                  src={logo}
                  alt="SimplySticky"
                />{' '}
                <h1>SimplySticky</h1>
              </Link>
            </div>
            <div className="col m6">
              <ul className="right hide-on-med-and-down button-group animate__animated animate__fadeIn">
                <li>
                  <button
                    onClick={register}
                    className="waves-effect waves-light btn"
                  >
                    Register
                  </button>
                </li>
                <li>
                  <button
                    onClick={login}
                    className="waves-effect waves-light btn-flat grey-text text-lighten-4"
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
