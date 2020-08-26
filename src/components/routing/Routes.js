import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Loader from '../layout/Loader';
import Landing from '../../pages/Landing';

const Main = lazy(() => import('../../pages/Main'));
const AddNote = lazy(() => import('../../pages/AddNote'));
const EditNote = lazy(() => import('../../pages/EditNote'));
const Note = lazy(() => import('../../pages/Note'));
const NotFound = lazy(() => import('../../pages/NotFound'));

const Routes = () => {
  return (
    <Suspense
      fallback={
        <div
          className="center"
          style={{
            marginTop: '30vh',
          }}
        >
          <Loader />
        </div>
      }
    >
      <Switch>
        <Route exact path="/" component={Landing} />
        <ProtectedRoute exact path="/notes" component={Main} />
        <ProtectedRoute exact path="/add" component={AddNote} />
        <ProtectedRoute exact path="/edit/:id" component={EditNote} />
        <ProtectedRoute exact path="/note/:id" component={Note} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
