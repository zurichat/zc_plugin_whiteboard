import React from "react";
import * as classes from "./ColorPicker.module.css";
import iconDropdown from "../../assets/icon-dropdown.png";

const ColorPicker = (props) => {
  return (
    <div className={classes.Container}>
      {/* <div className={classes.ColorBox}></div> */}
      <input
        className={classes.ColorBox}
        type="color"
        onChange={(event) => props.changeBackground(event.target.value)}
      />
      <img className={classes.Icon} src={iconDropdown} />
    </div>
  );
};

export default ColorPicker;
