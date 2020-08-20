import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/_MainLayout';
import AddNote from './pages/AddNote';
import NotFound from './pages/NotFound';
import EditNote from './pages/EditNote';
import Note from './pages/Note';
import netlifyIdentity, { currentUser } from 'netlify-identity-widget';
import Landing from './pages/Landing';
import Main from './pages/Main';
import ProtectedRoute from './components/routing/ProtectedRoute';
import { loginUser, logoutUser } from './helpers/auth';
import './App.css';
import axios from 'axios';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (currentUser()) {
      setIsAuthenticated(true);
      setUser(currentUser());
      getNotes();
      setIsLoading(false);
    }

    netlifyIdentity.on('login', (user) => {
      loginUser(user);
      setIsAuthenticated(true);
      setUser(user);
      getNotes();
      setIsLoading(false);
      netlifyIdentity.close();
    });

    netlifyIdentity.on('logout', () => {
      logoutUser();
      setIsAuthenticated(false);
      setUser(null);
    });
  }, []);

  const login = () => {
    netlifyIdentity.open('login');
  };

  const register = () => {
    netlifyIdentity.open('signup');
  };

  const logout = async () => {
    await netlifyIdentity.logout();
  };

  const getNotes = () => {
    const timestamp = new Date().getTime();
    axios.get(`/.netlify/functions/getNotes?t=${timestamp}`).then((res) => {
      setNotes(res.data);
    });
  };

  const addNote = (note) => {
    setNotes((prevState) => [...prevState, note]);
    window.M.toast({ html: 'Note successfully added!', classes: 'green' });
  };

  const editNote = (id, updatedNote) => {
    setNotes((prevState) => {
      return prevState.map((note) => {
        if (note.id !== id) return note;
        else return updatedNote;
      });
    });
    window.M.toast({ html: 'Note successfully updated!', classes: 'green' });
  };

  const deleteNote = (id) => {
    setNotes((prevState) => {
      return prevState.filter((note) => note.id !== id);
    });
    window.M.toast({ html: 'Note deleted!', classes: 'green' });
  };

  return (
    <Router>
      <MainLayout
        isAuthenticated={isAuthenticated}
        login={login}
        register={register}
        logout={logout}
        user={user}
      >
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Landing
                isAuthenticated={isAuthenticated}
                login={login}
                register={register}
              />
            )}
          />
          <ProtectedRoute
            exact
            path="/notes"
            isAuthenticated={isAuthenticated}
            isLoading={isLoading}
            notes={notes}
            deleteNote={deleteNote}
            component={Main}
          />
          <ProtectedRoute
            exact
            path="/add"
            isAuthenticated={isAuthenticated}
            addNote={addNote}
            component={AddNote}
          />
          <ProtectedRoute
            exact
            path="/edit/:id"
            isAuthenticated={isAuthenticated}
            editNote={editNote}
            notes={notes}
            component={EditNote}
          />
          <ProtectedRoute
            exact
            path="/note/:id"
            isAuthenticated={isAuthenticated}
            notes={notes}
            deleteNote={deleteNote}
            component={Note}
          />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
