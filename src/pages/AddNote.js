import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { generateUUID } from '../helpers/uuid';

const AddNote = ({ addNote }) => {
  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (submitted) return <Redirect to="/notes" />;
  else
    return (
      <div className="container">
        <div className="row">
          <h4 className="center teal-text text-darken-1">Add Note</h4>
        </div>
        <div className="row">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const newNote = {
                id: generateUUID(),
                title,
                content,
                timestamp: new Date().getTime(),
              };
              addNote(newNote);
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
                  rows="5"
                />
                <label htmlFor="textarea">Note content</label>
              </div>
            </div>
            <div className="row center">
              <button
                type="submit"
                className="waves-effect waves-light btn-large"
              >
                Create new note
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
          </form>
        </div>
      </div>
    );
};

export default AddNote;
