import * as Types from './index';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { setLoading } from './loading';

export const getNotes = () => async (dispatch, state) => {
  dispatch(setLoading(true));

  try {
    const res = await axios.get(`/api/notes?t=${getCurrentTimeStamp()}`);
    console.log(state);

    const decryptedNotes = getDecryptedNotes(res.data, state.auth.user);

    dispatch({
      type: Types.GET_NOTES,
      payload: decryptedNotes,
    });
  } catch (err) {
    window.M.toast({ html: `${err.message}`, classes: 'red' });
  }

  dispatch(setLoading(false));
};

export const createNote = (note) => async (dispatch, state) => {
  dispatch(setLoading(true));

  try {
    const res = await axios.post(`/api/notes?t=${getCurrentTimeStamp()}`, {
      ...note,
      userId: state.auth.user.id,
      title: CryptoJS.AES.encrypt(note.title, state.auth.user.id).toString(),
      content: CryptoJS.AES.encrypt(
        note.content,
        state.auth.user.id,
      ).toString(),
    });
    const decryptedNotes = getDecryptedNotes(res.data, state.auth.user);

    dispatch({
      type: Types.CREATE_NOTE,
      payload: decryptedNotes,
    });

    window.M.toast({ html: 'Note successfully added!', classes: 'green' });
  } catch (err) {
    window.M.toast({ html: `${err.message}`, classes: 'red' });
  }

  dispatch(setLoading(false));
};

export const updateNote = (id, updatedNote) => async (dispatch, state) => {
  dispatch(setLoading(true));

  try {
    const res = await axios.put(
      `/api/notes?_id=${id}&t=${getCurrentTimeStamp()}`,
      {
        ...updatedNote,
        title: CryptoJS.AES.encrypt(
          updatedNote.title,
          state.auth.user.id,
        ).toString(),
        content: CryptoJS.AES.encrypt(
          updatedNote.content,
          state.auth.user.id,
        ).toString(),
      },
    );
    const decryptedNotes = getDecryptedNotes(res.data, state.auth.user);

    dispatch({
      type: Types.UPDATE_NOTE,
      payload: decryptedNotes,
    });

    window.M.toast({
      html: 'Note successfully updated!',
      classes: 'green',
    });
  } catch (err) {
    window.M.toast({ html: `${err.message}`, classes: 'red' });
  }

  dispatch(setLoading(false));
};

export const deleteNote = (id) => async (dispatch, state) => {
  dispatch(setLoading(true));

  try {
    const res = await axios.delete(
      `/api/notes?_id=${id}&t=${getCurrentTimeStamp()}`,
    );
    const decryptedNotes = getDecryptedNotes(res.data, state.auth.user);

    dispatch({
      type: Types.GET_NOTES,
      payload: decryptedNotes,
    });

    window.M.toast({
      html: 'Note deleted!',
      classes: 'green',
    });
  } catch (err) {
    window.M.toast({ html: `${err.message}`, classes: 'red' });
  }

  dispatch(setLoading(false));
};

const getCurrentTimeStamp = () => new Date().getTime();

const getDecryptedNotes = (notes, user) =>
  notes.map((note) => ({
    ...note,
    title: CryptoJS.AES.decrypt(note.title, user.id).toString(
      CryptoJS.enc.Utf8,
    ),
    content: CryptoJS.AES.decrypt(note.content, user.id).toString(
      CryptoJS.enc.Utf8,
    ),
  }));
