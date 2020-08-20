import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import netlifyIdentity from 'netlify-identity-widget';

// Auto-init all Materialize JS widgets
window.M.AutoInit();

// Init netlify identity widget
netlifyIdentity.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.register();
