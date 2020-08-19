import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">About Noteworthy</h5>
            <p className="grey-text text-lighten-4">
              Make notes and organize your thoughts. The easy way. <br />
              <br />
              Noteworthy was built on a modern serverless architecture utilizing
              Netlify cloud functions. Its user interface was built with a focus
              on ease-of-use using the CSS framework Materialize, which is
              adhering to Material design guidelines.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container" style={{ textAlign: 'center' }}>
          © 2020{' '}
          <a
            href="https://www.patrickobermeier.dev"
            className="grey-text text-lighten-2"
          >
            Patrick Obermeier
          </a>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
