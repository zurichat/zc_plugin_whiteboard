import React, {useState} from 'react'
import './StickyNote.css'
import Draggable from 'react-draggable';

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('')

    const handleChange =(event)=>{
      setNoteText(event.target.value)
    }

    const handleSaveClick =()=>{
        if(noteText.trim().length>0){
             handleAddNote(noteText)
             setNoteText('')
        }
     
    }

    return (
        <Draggable>
        <div className="note new">
            <textarea value={noteText} onChange={handleChange} placeholder="add a new note" ></textarea>
            <div className="footer"></div>
            <button onClick={handleSaveClick}className="save">save</button>
        </div>
        </Draggable>
    )
}

export default AddNote
