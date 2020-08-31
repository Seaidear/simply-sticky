import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } = auth;

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} {...rest} />
        )
      }
    />
  );
};

export default ProtectedRoute;
