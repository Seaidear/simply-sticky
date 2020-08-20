import React, { useRef } from 'react';
import { withRouter, Link } from 'react-router-dom';

const NoteCard = ({ note, deleteNote, history }) => {
  const refCard = useRef(null);
  const createdDate = new Date(note.timestamp);

  return (
    <div className="col s12 m6">
      <div
        ref={refCard}
        className="card yellow lighten-2 animate__animated animate__fadeIn"
      >
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
            <i className="small material-icons">remove_red_eye</i>
          </Link>
          {'  '}
          <button
            onClick={() => {
              history.push(`/edit/${note.id}`);
            }}
            className="waves-effect waves-light btn-small"
          >
            <i className="small material-icons">edit</i>
          </button>
          {'  '}
          <button
            onClick={() => {
              refCard.current.classList.remove('animate__fadeIn');
              refCard.current.classList.add('animate__fadeOut');
              setTimeout(() => deleteNote(note.id), 500);
            }}
            className="waves-effect waves-light red darken-2 btn-small del-btn"
          >
            <i className="material-icons">delete</i>
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
