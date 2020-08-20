import React from 'react';
import { Redirect } from 'react-router-dom';

const Landing = ({ isAuthenticated, login, register }) => {
  if (isAuthenticated) return <Redirect to="/notes" />;
  else
    return (
      <div className="hero-img">
        <div className="hero-overlay">
          <div className="container hero-content">
            <div className="row">
              <div className="col s12">
                <h2 className="teal-text text-darken-1">
                  The quick and easy note-taking solution!
                </h2>
                <h5>All your thoughts secure in one place.</h5>
              </div>
            </div>

            <div className="row">
              <div className="col s12 m6" style={{ marginBottom: '1rem' }}>
                <button
                  onClick={register}
                  className="waves-effect waves-light btn-large"
                >
                  Register
                </button>
              </div>
              <div className="col s12 m6" style={{ marginBottom: '1rem' }}>
                <button
                  onClick={login}
                  className="waves-effect waves-light btn-large grey-text text-darken-4 grey lighten-3"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Landing;
