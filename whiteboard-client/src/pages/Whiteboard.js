import React from "react";
import "../App.css";
import ShapeSelector from "../components/ShapesSelector/ShapeSelector";
import SubToolBar from "../components/subToolBar";


function Whiteboard() {
  return (
    <div className="App">
      <header className="App-header">Zuri whiteboard plugin</header>
      <ShapeSelector />
      <SubToolBar />
    </div>
  );
}

export default Whiteboard;
