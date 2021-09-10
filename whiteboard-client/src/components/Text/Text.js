import React,{useState} from "react";
import "./Text.css";
import Dropdown from "./Dropdown";

export const Text = () => {
  const[selected, setSelected] = useState("")
  return (
    <div className="container">
      <div className="text-editor-header">
        <button>
          <form>
            <input type="number" min="1" max="100" placeholder="1" />
          </form>
        </button>

        <button type="button" className="btn">
          <i className="fa fa-bold"></i>
        </button>
        <Dropdown className="dropdown"selected={selected} setSelected={setSelected} />
        
        <button type="button" className="btn">
          <i className="fa fa-italic"></i>
        </button>

        <button type="button" className="btn">
          <i className=" fa fa-underline"></i>
        </button>

        <button type="button" className="btn">
          <i className="fas fa-strikethrough"></i>
        </button>

        <button type="button" className="btn">
          <i className="fas fa-align-left"></i>
        </button>
        <button type="button" className="btn">
          <i className="fas fa-align-center"></i>
        </button>
        <button type="button" className="btn">
          <i className="fas fa-align-right"></i>
        </button>
        <button type="button" className="btn">
          <i className="fas fa-list-ul"></i>
        </button>
        <button type="button" className="btn">
          <i className="fas fa-list-ol"></i>
        </button>
        
        {/* <button type="button" className="btn">
          <select name="fonts" id="fonts">
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
          </select>
        </button> */}
        <button type="button" className="btn top">
          <div className="circles">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
            <div className="circle circle-5"></div>
            <div className="circle circle-6"></div>
            <div className="circle circle-7"></div>
            <div className="circle circle-8 "></div>
            <div className="circle circle-9 "></div>
            <div className="circle circle-10"></div>
          </div>
          <i class="fas fa-font"></i>
        </button>

        {/* update later */}
        <button type="button" className="btn font-style">
          <i className="fas fa-font"></i>
          <div></div>a
        </button>
        <button type="button" className="btn">
          <i className="fas fa-link"></i>
        </button>
        <button type="button" className="btn">
          <i className=" fas fa-chevron-right"></i>
        </button>

        {/* to be changed */}

        

       
      </div>
      {/* textcontent */}
      <textarea id="whiteboard-txt" name="whiteboard-txt" rows="4" cols="50">
Design
</textarea>
    </div>
  );
};

export default Text;
