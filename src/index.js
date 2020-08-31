import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';
import * as serviceWorker from './serviceWorker';
import App from './App';
import initCookieBanner from './helpers/cookies';
import 'materialize-css/dist/js/materialize.min.js';

// Auto-init all Materialize JS widgets
window.M.AutoInit();

// Init netlify identity widget
netlifyIdentity.init();

// Init cookie banner
initCookieBanner();

// Render React-App
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Register service worker (enable PWA)
serviceWorker.register();

// Disable dev tools in production
if (
  process.env.NODE_ENV === 'production' &&
  typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object'
) {
  for (let [key, value] of Object.entries(
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__,
  )) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] =
      typeof value == 'function' ? () => {} : null;
  }
}
