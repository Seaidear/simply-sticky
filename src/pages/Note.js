import React, { useState, useEffect } from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';

const Note = ({ isAuthenticated, notes, match, history, deleteNote }) => {
  const id = match.params.id;
  const note = notes.find((note) => note.id === id);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
    // eslint-disable-next-line
  }, []);

  if (!isAuthenticated || !id || !note) return <Redirect to="/" />;
  else
    return (
      <div className="container">
        <div className="row">
          <h4 className="center">{title}</h4>
        </div>
        <div className="row">
          <p>{content}</p>
        </div>
        <div className="row">
          <div className="row center">
            <button
              onClick={() => {
                history.push(`/edit/${note.id}`);
              }}
              className="waves-effect waves-light btn-large"
            >
              Edit note
            </button>
          </div>
          <div className="row center">
            <button
              onClick={() => {
                deleteNote(id);
                history.push(`/`);
              }}
              className="waves-effect waves-light red darken-2 btn-large"
            >
              Delete note
            </button>
          </div>
          <div className="row center">
            <Link
              to="/"
              className="waves-effect waves-light btn-large grey-text text-darken-4 grey lighten-3"
            >
              Back to Notes
            </Link>
          </div>
        </div>
      </div>
    );
};

export default withRouter(Note);
