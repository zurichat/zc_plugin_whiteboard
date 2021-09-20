import React, { useContext } from "react";
import ToolContext from "../../../contexts/ToolContext";
import "./Color.css";

const ColorPicker = ({
  changeColor,
  changeColorToGrey,
  changeColorToBlue,
  changeColorToGreen,
  changeColorToYellow,
}) => {
  return (
    <div>
      <div className="colorpicker-container">
        <button
          onClick={() => handleSetColor("grey")}
          className="color color2"
        ></button>
        <button
          onClick={() => handleSetColor("blue")}
          className="color color3"
        ></button>
        <button
          onClick={() => handleSetColor("light-green")}
          className="color color4"
        ></button>
        <button
          onClick={() => handleSetColor("yellow")}
          className="color color5"
        ></button>
        <button
          onClick={() => handleSetColor("purple")}
          className="color color6"
        ></button>
        <div className="color-line"></div>
        <button
          onClick={() => handleSetColor("#734b6d")}
          className="color color8"
        ></button>
      </div>
    </div>
  );
};

export default ColorPicker;
