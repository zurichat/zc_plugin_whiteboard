import React from 'react'
import close from "./assets/close.svg"
import { useState } from 'react';
import CommentContainer from './CommentContainer';


const CommentHeader = () => {
    const [show, setShow] = useState(true)

    return (
        <div>
            <div className="div-header">
                <h4 className="h4-header">Comments</h4>
                <img alt="close" src={close} onClick={() => setShow(false)} className="close-icon-header" />
            </div>

            {
                show?<div>
                        <CommentContainer />
                </div>:null
            }
        </div>
    )
}

export default CommentHeader
