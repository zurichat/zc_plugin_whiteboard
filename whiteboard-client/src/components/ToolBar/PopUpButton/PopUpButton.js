import { useEffect, useRef, useState } from "react";
import "./PopUpButton.css";

const PopUpButton = ({ content, popUpMenu }) => {
  const [isShown, setIsShown] = useState(false);
  const dropDown = useRef(null);
  
  const handleToggleButtonClick = () => {
    setIsShown(!isShown);
  };



  return (
    <>
      <div ref={dropDown} className={`popup-menu ${isShown ? "shown" : ""}`}>{popUpMenu}</div>
      <div className="popup-menu-container">
        <button className="button" onClick={handleToggleButtonClick}>
          {content}
        </button>
      </div>
    </>
  );
};

export default PopUpButton;
