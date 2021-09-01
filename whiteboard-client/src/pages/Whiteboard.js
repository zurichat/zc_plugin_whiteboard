import React from "react";
import "../App.css";
import ShapeSelector from "../components/ShapesSelector/ShapeSelector";

function Whiteboard() {
  return (
    <div className="App">
      <header className="App-header">Zuri whiteboard plugin</header>
      <ShapeSelector />
    </div>
  );
}

export default Whiteboard;
