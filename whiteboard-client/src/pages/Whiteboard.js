import React from "react";
import "../App.css";
import WhiteboardCanvas from "../components/WhiteboardCanvas";

function Whiteboard() {
  return (
    <div className="App">
      <WhiteboardCanvas />
      <header className="App-header">Zuri whiteboard plugin</header>
    </div>
  );
}

export default Whiteboard;
