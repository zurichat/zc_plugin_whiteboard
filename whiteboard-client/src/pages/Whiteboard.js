import React from "react";
import "../App.css";
import ColorPicker from "./components/colorpicker/ColorPicker";

function Whiteboard() {
  return (
    <div className="App">
      {/* <header className="App-header">Zuri whiteboard plugin</header> */}
      <ColorPicker />
    </div>
  );
}

export default Whiteboard;
