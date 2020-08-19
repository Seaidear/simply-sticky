import React from 'react';

const Landing = () => {
  return (
    <div className="hero-img">
      <div className="container hero-content">
        <div className="row">
          <div className="col s12">
            <h2>Quick and easy note taking!</h2>
            <h5>Your thoughts secured in one place.</h5>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6" style={{ marginBottom: '1rem' }}>
            <button className="waves-effect waves-light btn-large">
              Register
            </button>
          </div>
          <div className="col s12 m6" style={{ marginBottom: '1rem' }}>
            <button className="waves-effect waves-light btn-large grey-text text-darken-4 grey lighten-3">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
