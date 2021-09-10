import React from 'react'
import close from "./assets/close.svg"


const CommentHeader = () => {
    return (
        <div>
            <div className="div-header">
                <h4 className="h4-header">Comments</h4>
                <img alt="close" src={close} className="close-icon-header" />
            </div>
        </div>
    )
}

export default CommentHeader
