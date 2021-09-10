import React from 'react'
import vector from "./assets/vector.svg"

const CommentForm = () => {
    return (
        <div>
            <form>
                <div className="input-div"> 
                <input type="text" className="message-input" placeholder="Say Something" />
                <img alt="send" src={vector} className="sendmessage" />
                </div>
            </form>
        </div>
    )
}

export default CommentForm
