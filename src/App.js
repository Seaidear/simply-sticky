import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/_MainLayout';
import Home from './pages/Home';
import AddNote from './pages/AddNote';
import NotFound from './pages/NotFound';
import data from './_data';
import EditNote from './pages/EditNote';
import Note from './pages/Note';
import netlifyIdentity from 'netlify-identity-widget';
import './App.css';

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  authenticate(callback) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
    netlifyIdentity.on('login', (user) => {
      this.user = user;
      callback(user);
    });
  },
  signout(callback) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.user = null;
      callback();
    });
  },
};

function App() {
  const [notes, setNotes] = useState(data);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    netlifyAuth.authenticate();
    if (netlifyIdentity.currentUser()) {
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    netlifyAuth.signout(setIsAuthenticated(false));
  };

  const addNote = (note) => {
    setNotes((prevState) => [...prevState, note]);
  };

  const editNote = (id, updatedNote) => {
    setNotes((prevState) => {
      return prevState.map((note) => {
        if (note.id !== id) return note;
        else return updatedNote;
      });
    });
  };

  const deleteNote = (id) => {
    setNotes((prevState) => {
      return prevState.filter((note) => note.id !== id);
    });
  };

  return (
    <Router>
      <MainLayout
        isAuthenticated={isAuthenticated}
        login={login}
        logout={logout}
      >
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                isAuthenticated={isAuthenticated}
                notes={notes}
                deleteNote={deleteNote}
              />
            )}
          />
          <Route
            exact
            path="/add"
            render={() => (
              <AddNote isAuthenticated={isAuthenticated} addNote={addNote} />
            )}
          />
          <Route
            exact
            path="/edit/:id"
            render={() => (
              <EditNote
                isAuthenticated={isAuthenticated}
                editNote={editNote}
                notes={notes}
              />
            )}
          />
          <Route
            exact
            path="/note/:id"
            render={() => (
              <Note
                isAuthenticated={isAuthenticated}
                notes={notes}
                deleteNote={deleteNote}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
