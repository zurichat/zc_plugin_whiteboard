import React from "react";
import * as classes from "./StickyTool.module.css";

const StickyTool = (props) => {
  return (
    <div className={classes.StickyTool}>
      <img className={classes.StickyToolIcon} src={props.iconSrc} />
    </div>
  );
};

export default StickyTool;
