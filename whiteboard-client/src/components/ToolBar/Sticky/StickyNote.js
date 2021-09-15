import React, { useState, useReducer } from 'react';
import "./StickyNote.css";
import { v4 as uuid } from 'uuid';

const initialNotesState = {
  lastNoteCreated: null,
  totalNotes: 0,
  notes: [],
};

const notesReducer = (prevState, action) => {
  switch (action.type) {
      case 'ADD_NOTE': {
          const newState = { 
              notes: [...prevState.notes, action.payload],
              totalNotes: prevState.notes.length + 1,
              lastNoteCreated: new Date().toTimeString().slice(0, 8),
          };
          console.log('After ADD_NOTE: ', newState);
          return newState;
      }

      case 'DELETE_NOTE': {
          const newState = {
              ...prevState,
              notes: prevState.notes.filter(note => note.id !== action.payload.id),
              totalNotes: prevState.notes.length - 1,
          };
          console.log('After DELETE_NOTE: ', newState);
          return newState;
      }
  }
};



const StickyNote = (note) => {
  const [notesState, dispatch] = useReducer(notesReducer, initialNotesState);
  const [noteInput, setNoteInput] = useState('');
  const addNote = event => {
    event.preventDefault();
    if (!noteInput) {
        return;
    }

    const newNote = {
        text: noteInput,
        rotate: Math.floor(Math.random() * 20)
    }

    dispatch({ type: 'ADD_NOTE', payload: newNote });
    setNoteInput('');
};

  return (
    
    
    <div className="sticky-container">
      <form className="note-form" onSubmit={addNote}>
        <textarea value={noteInput} className="textarea" onChange={event => setNoteInput(event.target.value)} placeholder="Create Sticky Note...">
        </textarea>
        <button className="add-btn" type=''>Add Note</button>
      </form>

      {notesState
                .notes
                .map(note => (
                    <div className="note">
                      <pre className='text'>{note.text}</pre>
                    </div>
                ))
            }


    </div>
      
    
  );
}
export default StickyNote;

/*
<div className="app" onDragOver={dragOver}>
            <h1>
                Sticky Notes ({notesState.totalNotes})
                <span>{notesState.notes.length ? `Last note created: ${notesState.lastNoteCreated}` : ' '}</span>
            </h1>

            <form className="note-form" onSubmit={addNote}>
                <textarea placeholder="Create a new note..." 
                    value={noteInput}
                    onChange={event => setNoteInput(event.target.value)}>
                </textarea>
                <button>Add</button>
            </form>
*/ 