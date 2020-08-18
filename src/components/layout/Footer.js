import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Notes</h5>
            <p className="grey-text text-lighten-4">
              A serverless Notes-app that let's you organize your thoughts.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2020 Patrick Obermeier. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
