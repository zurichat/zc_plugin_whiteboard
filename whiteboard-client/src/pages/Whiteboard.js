import React from "react";
import "../App.css";

import Participants from "../components/Participants";
import Toolbar5 from "../components/toolbar-5/Toolbar5";
import WhiteboardCanvas from "../components/Whiteboard-Canvas/WhiteboardCanvas";
import Participants from "../components/Participants";
import ToolBar from "../components/ToolBar";
import SideBar from "../components/sidebar-component/sidebar.js";
import ShapeSelector from "../components/ShapesSelector/ShapeSelector";
import SavedFileView from "../components/SavedFileView/SavedFileView";
import ColorPicker from "../components/Colorpicker/Colorpicker";
// import WhiteboardCanvas from "../components/Whiteboard-Canvas/WhiteboardCanvas";
import ToolBar from "../components/ToolBar/ToolBar";
import SearchBar from "../components/SearchBar/SearchBar";
import Zoom from "../components/Zoom/Zoom";
import Header from "../components/Header/Header";
import Board from "../components/Whiteboard-Canvas/Board";


function Whiteboard() {
  return (
    <div className="App">


      {/* <header className="App-header">Zuri whiteboard plugin</header> */}
      <Participants />

      {/* issues 268 Tool bar  */}
      <Toolbar5 />

      <SideBar />
      <WhiteboardCanvas />
      {/* <header className="App-header">Zuri whiteboard plugin</header> */}
      <Participants />
      <ToolBar />
      <ColorPicker />
      <ShapeSelector />

      <SavedFileView />
      

      <SearchBar />
      <Header />
      {/* <WhiteboardCanvas /> */}
      <Board />
      <ToolBar />
      <Zoom />
    </div>

  );
}

export default Whiteboard;
