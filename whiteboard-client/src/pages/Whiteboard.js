import React from "react";
import "../App.css";
import WhiteboardCanvas from "../components/Whiteboard-Canvas/WhiteboardCanvas";

function Whiteboard() {
  return (
    <div className="App">
      <WhiteboardCanvas />
      <header className="App-header">Zuri whiteboard plugin</header>
      <ShapeSelector />
    </div>
  );
}

export default Whiteboard;
