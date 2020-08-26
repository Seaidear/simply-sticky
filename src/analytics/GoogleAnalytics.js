import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const GoogleAnalytics = ({ location, history }) => {
  useEffect(() => {
    const gtag = window.gtag;

    if (location.pathname === this.props.location.pathname) {
      // don't log identical link clicks (nav links likely)
      return;
    }

    if (history.action === 'PUSH' && typeof gtag === 'function') {
      gtag('config', GA_TRACKING_ID, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
      });
    }
  }, [location, history]);

  return null;
};

export default withRouter(GoogleAnalytics);
