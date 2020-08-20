import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import netlifyIdentity from 'netlify-identity-widget';
import initCookieBanner from './helpers/cookies';

// Auto-init all Materialize JS widgets
window.M.AutoInit();

// Init netlify identity widget
netlifyIdentity.init();

// Init cookie banner
initCookieBanner();

// Render React-App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Register service worker (enable PWA)
serviceWorker.register();
