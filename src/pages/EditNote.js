import React, { useState, useEffect } from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';

const EditNote = ({ isAuthenticated, notes, editNote, match }) => {
  const id = match.params.id;
  const note = notes.find((note) => note.id === id);

  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
    // eslint-disable-next-line
  }, []);

  if (!isAuthenticated || submitted || !id || !note) return <Redirect to="/" />;
  else
    return (
      <div className="container">
        <div className="row">
          <h4 className="center">Edit Note</h4>
        </div>
        <div className="row">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const updatedNote = {
                id,
                title,
                content,
                timestamp: new Date().getTime(),
              };
              editNote(id, updatedNote);
              setSubmitted(true);
            }}
          >
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="title"
                  type="text"
                  required
                  autoFocus
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="title">Title</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="textarea"
                  className="materialize-textarea"
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  style={{ minHeight: '100px' }}
                />
              </div>
            </div>
            <div className="row center">
              <button
                type="submit"
                className="waves-effect waves-light btn-large"
              >
                Update note
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
          </form>
        </div>
      </div>
    );
};

export default withRouter(EditNote);
