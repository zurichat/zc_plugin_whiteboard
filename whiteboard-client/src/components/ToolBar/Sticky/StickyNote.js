import React,{useState} from 'react'
import NotesList from './NotesList'
import AddNote from './AddNote'


const StickyNote = () => {
  const [notes, setNotes]=useState([
  ])

  const addNote=(text)=>{
    const newNote={
      id:Math.floor(Math.random()*50),
      text:text
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote=(id)=>{
    const newNotes = notes.filter((note)=>note.id!==id);
    setNotes(newNotes)

  }
  
  return (
    <div className="sticky-container">
      <NotesList handleDeleteNote={deleteNote} handleAddNote={addNote} notes={notes} />
      
    </div>
  )
}

export default StickyNote
