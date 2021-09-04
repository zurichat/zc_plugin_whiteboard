import React from 'react';
import zoomout from './zimgs/zoomout.png'
import zoomin from './zimgs/zoomin.png'
import "./Zoom.css";



const Zoom = () => {
    return (
        <div className="zoom-area">
        <div className="zoom-container">
         <div className="zoom-amount">100%</div>
         <div className="zoom-out">
            <img src={zoomout} alt={zoomout}/>
         </div>
         <div className="zoom-in">
         <img src={zoomin} alt={zoomin}/>
              </div>  

              <div className="reset">
                  <button className="reset-btn">reset</button>
               </div>   
        </div>
        </div>
    )
}

export default Zoom;