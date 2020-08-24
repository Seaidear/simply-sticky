import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import NoteCard from '../components/notes/NoteCard';
import Loader from '../components/layout/Loader';
import globalContext from '../context/global/globalContext';

const Main = () => {
  const { notes, deleteNote, isLoading } = useContext(globalContext);

  useEffect(() => {
    const fixedActionBtn = document.getElementById('fixed-action-btn');
    fixedActionBtn.classList.remove('scale-out');
    fixedActionBtn.classList.add('scale-în');
    window.M.Tooltip.init(fixedActionBtn);

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <h4 className="center teal-text text-darken-1">All Notes</h4>
        </div>
        <div className="row">
          {isLoading ? (
            <div
              className="center"
              style={{
                marginTop: '30vh',
              }}
            >
              <Loader />
            </div>
          ) : !notes || notes === [] || notes.length === 0 ? (
            <div
              style={{
                marginTop: '30vh',
              }}
            >
              <h5 className="center">No notes yet...</h5>
            </div>
          ) : (
            <>
              {notes.map((note) => (
                <NoteCard key={note._id} note={note} deleteNote={deleteNote} />
              ))}
            </>
          )}
        </div>
      </div>
      <div
        id="fixed-action-btn"
        className="fixed-action-btn scale-transition scale-out"
        data-position="left"
        data-tooltip="Create new note"
      >
        <Link to="/add" className="btn-floating btn-large red pulse">
          <i className="large material-icons">create</i>
        </Link>
      </div>
    </>
  );
};

export default Main;
