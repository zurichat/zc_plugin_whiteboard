import React from "react";
import "../App.css";

import ColorPicker from "./components/colorpicker/ColorPicker";

import WhiteboardCanvas from "../components/Whiteboard-Canvas/WhiteboardCanvas";
import Participants from "../components/Participants";
import ToolBar from "../components/ToolBar";
import SideBar from "../components/sidebar-component/Sidebar.js";
import ShapeSelector from "../components/ShapesSelector/ShapeSelector";


function Whiteboard() {
  return (
    <div className="App">

      {/* <header className="App-header">Zuri whiteboard plugin</header> */}
      <ColorPicker />

      <SideBar />
      <WhiteboardCanvas />
      {/* <header className="App-header">Zuri whiteboard plugin</header> */}
      <Participants />
      <ToolBar />
      <ShapeSelector />

    </div>
  );
}

export default Whiteboard;
