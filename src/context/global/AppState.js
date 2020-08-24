import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import GlobalContext from './globalContext';
import { useAuth } from '../../hooks/useAuth';
import axios from 'axios';

const AppState = ({ children }) => {
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
    <GlobalContext.Provider
      value={{
        isLoading,
        notes,
        user,
        isAuthenticated,
        login,
        register,
        logout,
        getNotes,
        addNote,
        deleteNote,
        editNote,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppState;
