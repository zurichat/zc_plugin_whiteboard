import React from "react";
import{ FaEraser, FaFont, FaGithub, FaImage, FaMousePointer, FaPen, FaPenNib, FaStickyNote, FaStop } from "react-icons/fa"
import "bootstrap/dist/css/bootstrap.min.css"
function Toolbar(){
    return(
    
        <div>
<div className="container mt-5 "> 
<div className="container-fluid col-lg-6 justify-content-space-between" >
  <button type="button " className="btn m-2 btn-lg border-dark"> <FaMousePointer/></button>
  <button type="button" className="btn border-dark btn-lg m-2"><FaPenNib/></button>
  <button type="button" className="btn border-dark btn-lg m-2"><FaFont/></button>
  <button type="button m-2" className="btn border-dark btn-lg m-2"><FaEraser/></button><button type="button" className="btn btn-lg border-dark m-2"><FaStop/></button>
    <button type="button" className="btn border-dark btn-lg m-2 btn-success " active><FaStickyNote/></button>
    <button type="button" className="btn border-dark btn-lg m-2"><FaImage/></button>
  
</div>   
  </div>
    </div>
    )
    };
    export default Toolbar;