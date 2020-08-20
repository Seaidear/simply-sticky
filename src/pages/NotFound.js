import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        padding: '0 2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h2 className="teal-text text-darken-1">Oh noes! A big ol' 404!</h2>
      <h5>This page doesn't exist. Nothing to see here.</h5>
      <br />
      <Link to="/" className="waves-effect waves-light btn-large">
        Back to Homepage
      </Link>
      <br />
    </div>
  );
};

export default NotFound;
