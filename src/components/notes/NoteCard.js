import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const NoteCard = ({ note, deleteNote, history }) => {
  const createdDate = new Date(note.timestamp);

  return (
    <div className="col s12 m6">
      <div className="card yellow lighten-2">
        <div className="card-content">
          <span className="card-title">{note.title}</span>
          <p>
            {note.content.length > 200
              ? note.content.slice(0, 200) + '[...]'
              : note.content}
          </p>
        </div>
        <div className="card-action">
          <Link
            to={`/note/${note.id}`}
            className="waves-effect waves-light grey-text text-darken-4 grey lighten-3 btn-small"
          >
            View
          </Link>
          {'  '}
          <button
            onClick={() => {
              history.push(`/edit/${note.id}`);
            }}
            className="waves-effect waves-light btn-small"
          >
            Edit
          </button>
          {'  '}
          <button
            onClick={(e) => {
              e.preventDefault();
              deleteNote(note.id);
            }}
            className="waves-effect waves-light red darken-2 btn-small"
          >
            Delete
          </button>
        </div>
        <div className="right">
          <span className="badge">
            Last Updated on {createdDate.toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NoteCard);
