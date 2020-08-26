import React from 'react';
import AppState from './context/global/AppState';
import MainLayout from './components/layout/_MainLayout';
import Routes from './components/routing/Routes';
import 'materialize-css/dist/css/materialize.min.css';
import 'animate.css/animate.min.css';
import './App.css';
import GoogleAnalytics from './analytics/GoogleAnalytics';

const App = () => (
  <AppState>
    <MainLayout>
      <Routes />
      <GoogleAnalytics />
    </MainLayout>
  </AppState>
);

export default App;
