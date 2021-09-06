import React from 'react';
import zoomout from './zimgs/zoomout.png'
import zoomin from './zimgs/zoomin.png'
import "./Zoom.css";



const Zoom = () => {

    const zoomOut=()=>{
        alert('zoom out')
    }

    const zoomIn=()=>{
        alert('zoom in')
    }

    return (
        <div className="zoom-area">
        <div className="zoom-container">
         <div className="zoom-amount">100%</div>
         <div onClick = {zoomOut} className="zoom-out">
            <img src={zoomout} alt={zoomout}/>
         </div>
         <div onClick = {zoomIn}  className="zoom-in">
         <img class ="zoom" src={zoomin} alt={zoomin} />
              </div>  

              <div className="reset">
                  <button className="reset-btn">Reset</button>
               </div>   
        </div>
        </div>
    )
}

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default Zoom;