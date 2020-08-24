import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import MainLayout from './components/layout/_MainLayout';
import AddNote from './pages/AddNote';
import NotFound from './pages/NotFound';
import EditNote from './pages/EditNote';
import Note from './pages/Note';
import Landing from './pages/Landing';
import Main from './pages/Main';
import ProtectedRoute from './components/routing/ProtectedRoute';
import { useAuth } from './hooks/useAuth';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState(null);
  const [isAuthenticated, user, login, register, logout] = useAuth();

  useEffect(() => {
    isAuthenticated && user && getNotes();
    !isAuthenticated && !user && setNotes(null);
    // eslint-disable-next-line
  }, [user]);

  const getDecryptedNotes = (notes) =>
    notes.map((note) => ({
      ...note,
      title: CryptoJS.AES.decrypt(note.title, user.id).toString(
        CryptoJS.enc.Utf8,
      ),
      content: CryptoJS.AES.decrypt(note.content, user.id).toString(
        CryptoJS.enc.Utf8,
      ),
    }));

  const getNotes = () => {
    setIsLoading(true);

    const timestamp = new Date().getTime();

    axios
      .get(`/api/notes?t=${timestamp}`)
      .then((res) => {
        setNotes(getDecryptedNotes(res.data));
        setIsLoading(false);
      })
      .catch((err) => {
        window.M.toast({ html: `${err.message}`, classes: 'red' });
        setIsLoading(false);
      });
  };

  const addNote = (note) => {
    setIsLoading(true);

    const timestamp = new Date().getTime();

    axios
      .post(`/api/notes?t=${timestamp}`, {
        ...note,
        userId: user.id,
        title: CryptoJS.AES.encrypt(note.title, user.id).toString(),
        content: CryptoJS.AES.encrypt(note.content, user.id).toString(),
      })
      .then((res) => {
        setNotes(getDecryptedNotes(res.data));
        window.M.toast({ html: 'Note successfully added!', classes: 'green' });
        setIsLoading(false);
      })
      .catch((err) => {
        window.M.toast({ html: `${err.message}`, classes: 'red' });
        setIsLoading(false);
      });
  };

  const editNote = (id, updatedNote) => {
    setIsLoading(true);

    const timestamp = new Date().getTime();

    axios
      .put(`/api/notes?_id=${id}&t=${timestamp}`, {
        ...updatedNote,
        title: CryptoJS.AES.encrypt(updatedNote.title, user.id).toString(),
        content: CryptoJS.AES.encrypt(updatedNote.content, user.id).toString(),
      })
      .then((res) => {
        setNotes(getDecryptedNotes(res.data));
        setIsLoading(false);
        window.M.toast({
          html: 'Note successfully updated!',
          classes: 'green',
        });
      })
      .catch((err) => {
        window.M.toast({ html: `${err.message}`, classes: 'red' });
        setIsLoading(false);
      });
  };

  const deleteNote = (id) => {
    const timestamp = new Date().getTime();

    axios
      .delete(`/api/notes?_id=${id}&t=${timestamp}`)
      .then((res) => {
        setNotes(getDecryptedNotes(res.data));
        window.M.toast({
          html: 'Note deleted!',
          classes: 'green',
        });
      })
      .catch((err) => {
        window.M.toast({ html: `${err.message}`, classes: 'red' });
      });
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
