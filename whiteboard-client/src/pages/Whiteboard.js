import React from "react";
import "../App.css";
import Participants from "../components/Participants";
import Toolbar5 from "../components/toolbar-5/Toolbar5";

function Whiteboard() {
  return (
    <div className="App">
      {/* <header className="App-header">Zuri whiteboard plugin</header> */}
      <Participants />

      {/* issues 268 Tool bar  */}
      <Toolbar5 />
    </div>
  );
}

export default Whiteboard;
