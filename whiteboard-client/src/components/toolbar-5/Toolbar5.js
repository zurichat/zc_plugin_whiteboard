import React from "react";
import "./Toolbar5.css";
import bullets from "./asset/bullets.svg";
import trash from "./asset/trash.svg";
import eclipse from "./asset/eclipse.svg";
import line_icon from "./asset/line_icon.svg";
import link from "./asset/link.svg";
import pin from "./asset/pin.svg";
import twosquares from "./asset/twosquares.svg";
import active from "./asset/active.svg";

function Toolbar5() {
  return (
    <div>
      <div className="toolContainer">
        <div className="tools">
          <img src={pin} alt="" />
        </div>

        <div className="tools">
          <img src={eclipse} alt="" />
        </div>

        <div className="tools">
          <img src={line_icon} alt="" />
        </div>

        <div className="tools">
          <img src={active} alt="" />
        </div>

        <div className="tools">
          <img src={twosquares} alt="" />
        </div>

        <div className="tools">
          <img src={link} alt="" />
        </div>

        <div className="tools">
          <img src={trash} alt="" />
        </div>

        <div className="tools">
          <img src={bullets} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Toolbar5;
