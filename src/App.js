import React from 'react';
import './App.css';
import MainLayout from './components/layout/_MainLayout';
import Landing from './pages/Landing';

function App() {
  return (
    <>
      <MainLayout>
        <Landing />
      </MainLayout>
    </>
  );
}

export default App;
