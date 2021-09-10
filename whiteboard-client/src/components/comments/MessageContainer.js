import React, {useState} from 'react'
import { Message } from './Message'

const MessageContainer = () => {


    return (
        <div>
            <div className="message-container">
                <Message />
                <Message />
            </div>
            
        </div>
    )
}

export default MessageContainer