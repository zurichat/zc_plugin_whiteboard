import React, {useRef, useState} from 'react'
import './StickyNote.css'
import Draggable from 'react-draggable';


const Note = ({id, text, handleDeleteNote}) => {



//     const noteStyles = useRef({
//        position: 'absolute',
//        top: Math.floor(Math.random()*50),
//        left: '50%',
//        transform: 'translate(-50%, -50%)'
//    });
    return (
        // <div  style={noteStyles.current}className="note">
        
        <Draggable>
         <div className="note">
         <small onClick={()=>handleDeleteNote(id)} className="delete-icon">X<br/></small>
            <span>{text}</span>
            <div className="note-footer">
            
            </div>
        </div>
        </Draggable>
    )
}

export default Note
