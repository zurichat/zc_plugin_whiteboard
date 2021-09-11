import React from "react";
import * as classes from "./StickyTools.module.css";
import StickyTool from "./StickyTool/StickyTool";
import ColorPicker from "./ColorPicker/ColorPicker";

import iconPin from "../assets/icon-pin.png";
import iconText from "../assets/icon-text.png";
import iconLink from "../assets/icon-link.png";
import iconDelete from "../assets/icon-delete.png";

const StickyTools = (props) => {
  const stickyToolsClassesArr = [classes.StickyTools];

  let markup = null;

  if (props.show) {
    markup = (
      <div className={stickyToolsClassesArr.join(" ")}>
        <StickyTool iconSrc={iconPin} />
        <ColorPicker changeBackground={props.changeBackground} />
        <StickyTool iconSrc={iconText} />
        <StickyTool iconSrc={iconLink} />
        <StickyTool iconSrc={iconDelete} />
      </div>
    );
  }

  return markup;
};

export default StickyTools;
