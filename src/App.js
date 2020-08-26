import React from 'react';
import AppState from './context/global/AppState';
import MainLayout from './components/layout/_MainLayout';
import Routes from './components/routing/Routes';
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
