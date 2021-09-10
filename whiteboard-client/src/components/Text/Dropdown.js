import React, { useState } from "react";
import './Dropdown.css'

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = [
    <i className="red far fa-circle"></i>,
    <i className=" yellow far fa-circle"></i>,
    <i className=" green far fa-circle"></i>,
  ];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option, i) => (
            <div  className="dropdown-item" key={i} onClick={(e) => {setSelected(option);
                setIsActive(false);
              }}>{option}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
