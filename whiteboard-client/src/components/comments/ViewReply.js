import React from 'react'
import circle from "./assets/circle.svg"
import check from "./assets/check.svg"


const ViewReply = () => {
    return (
        <div>
            <div className="viewReply-container">
                <p className="viewReply-p">View Reply</p>
                <div className="viewReply-check">
                <img alt="circle" src={circle} className="circle" />
                <img alt="check" src={check} className="check" />
                </div>
            </div>
        </div>
    )
}

export default ViewReply
