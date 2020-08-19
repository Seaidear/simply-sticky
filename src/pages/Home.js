import React from 'react';
import Landing from './Landing';
import Main from './Main';

const Home = ({ isAuthenticated, notes, deleteNote }) => {
  return (
    <>
      {isAuthenticated ? (
        <Main notes={notes} deleteNote={deleteNote} />
      ) : (
        <Landing />
      )}
    </>
  );
};

export default Home;
