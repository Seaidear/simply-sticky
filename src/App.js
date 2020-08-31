import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';
import 'materialize-css/dist/css/materialize.min.css';
import 'animate.css/animate.min.css';
import MainLayout from './components/layout/_MainLayout';
import Routes from './components/routing/Routes';
import GoogleAnalytics from './analytics/GoogleAnalytics';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <MainLayout>
        <Routes />
        <GoogleAnalytics />
      </MainLayout>
    </Provider>
  );
};

export default App;
