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
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li>
                <a
                  class="grey-text text-lighten-3 modal-trigger"
                  href="#impress-modal"
                >
                  Impress
                </a>
              </li>
              <li>
                <a
                  class="grey-text text-lighten-3 modal-trigger"
                  href="#privacy-modal"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
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
