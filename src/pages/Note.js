import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteNote } from '../state/actions/notes';
import { useDispatch, useSelector } from 'react-redux';

const Note = ({ match, history }) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  const id = match.params.id;
  const note = notes.find((note) => note._id === id);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }

    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h4 className="center teal-text text-darken-1">{title}</h4>
      </div>
      <div className="row">
        <p>{content}</p>
      </div>
      <div className="row">
        <div className="row center">
          <button
            onClick={() => {
              history.push(`/edit/${note._id}`);
            }}
            className="waves-effect waves-light btn-large"
          >
            Edit note
          </button>
        </div>
        <div className="row center">
          <button
            onClick={() => {
              dispatch(deleteNote(id));
              history.push(`/`);
            }}
            className="waves-effect waves-light red darken-2 btn-large"
          >
            Delete note
          </button>
        </div>
        <div className="row center">
          <Link
            to="/notes"
            className="waves-effect waves-light btn-large grey-text text-darken-4 grey lighten-3"
          >
            Back to Notes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Note;
