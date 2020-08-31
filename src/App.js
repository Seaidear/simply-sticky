import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'materialize-css/dist/css/materialize.min.css';
import 'animate.css/animate.min.css';
import AppState from './context/global/AppState';
import MainLayout from './components/layout/_MainLayout';
import Routes from './components/routing/Routes';
import GoogleAnalytics from './analytics/GoogleAnalytics';
import './App.css';

const App = () => (
  <Provider store={store}>
    <AppState>
      <MainLayout>
        <Routes />
        <GoogleAnalytics />
      </MainLayout>
    </AppState>
  </Provider>
);

export default App;
