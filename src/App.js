import React from 'react';
import AppState from './context/global/AppState';
import MainLayout from './components/layout/_MainLayout';
import Routes from './components/routing/Routes';
import './App.css';

const App = () => (
  <AppState>
    <MainLayout>
      <Routes />
    </MainLayout>
  </AppState>
);

export default App;
