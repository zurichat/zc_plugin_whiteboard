import React from "react";
import "../App.css";
import WhiteboardCanvas from "../components/Whiteboard-Canvas/WhiteboardCanvas";
import Participants from "../components/Participants";
import ToolBar from "../components/ToolBar";
import SideBar from "../components/sidebar-component/Sidebar.js";
import ShapeSelector from "../components/ShapesSelector/ShapeSelector";
import SavedFileView from "../components/SavedFileView/SavedFileView";
function Whiteboard() {
  return (
    <div className="App">
      <SideBar />
      <WhiteboardCanvas />
      {/* <header className="App-header">Zuri whiteboard plugin</header> */}
      <Participants />
      <ToolBar />
      <ShapeSelector />
      <SavedFileView />
    </div>
  );
}

export default Whiteboard;
