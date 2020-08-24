import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Main from '../../pages/Main';
import AddNote from '../../pages/AddNote';
import EditNote from '../../pages/EditNote';
import Note from '../../pages/Note';
import NotFound from '../../pages/NotFound';
import Landing from '../../pages/Landing';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <ProtectedRoute exact path="/notes" component={Main} />
      <ProtectedRoute exact path="/add" component={AddNote} />
      <ProtectedRoute exact path="/edit/:id" component={EditNote} />
      <ProtectedRoute exact path="/note/:id" component={Note} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
