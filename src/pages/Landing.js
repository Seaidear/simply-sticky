import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import globalContext from '../context/global/globalContext';

const Landing = () => {
  const { isAuthenticated, login, register } = useContext(globalContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isAuthenticated) return <Redirect to="/notes" />;
  else
    return (
      <div className="hero-img">
        <div className="hero-overlay">
          <div className="container hero-content animate__animated animate__fadeIn">
            <div className="row">
              <div className="col s12">
                <h2 className="teal-text text-darken-1">
                  The <strong>easy-peasy sticky notes</strong> app!
                </h2>
                <h5>All your thoughts secured & encrypted in one place.</h5>
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
