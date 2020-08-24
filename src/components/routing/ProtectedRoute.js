import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import globalContext from '../../context/global/globalContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(globalContext);

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
