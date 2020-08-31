import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';
import 'materialize-css/dist/css/materialize.min.css';
import 'animate.css/animate.min.css';
import MainLayout from './components/layout/_MainLayout';
import Routes from './components/routing/Routes';
import GoogleAnalytics from './analytics/GoogleAnalytics';
import './App.css';
import AuthProvider from './components/context/auth/AuthProvider';

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <MainLayout>
          <Routes />
          <GoogleAnalytics />
        </MainLayout>
      </AuthProvider>
    </Provider>
  );
};

export default App;
