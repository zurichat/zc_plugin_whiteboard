import React from 'react'
import Note from './Note'
import AddNote from './AddNote'
import './StickyNote.css'

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {



    return (
        <div className="noteslist">
          {notes.map((note)=>(
          <Note handleDeleteNote={handleDeleteNote} 
          id={note.id} 
          text={note.text}/>
          ))}
                <AddNote handleAddNote={handleAddNote}/>
        </div>
  
    )
}

export default NotesList
