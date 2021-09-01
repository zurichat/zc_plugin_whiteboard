import React from "react";
import "../App.css";
import WhiteboardCanvas from "../components/Whiteboard-Canvas/WhiteboardCanvas";
import Participants from "../components/Participants";
import ToolBar from "../components/ToolBar";

function Whiteboard() {
  return (
    <div className="App">
      <WhiteboardCanvas />
      <header className="App-header">Zuri whiteboard plugin</header>
      {/* <header className="App-header">Zuri whiteboard plugin</header> */}
      <Participants />
      <ToolBar />
    </div>
  );
}

export default Whiteboard;
