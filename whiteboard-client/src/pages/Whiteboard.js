import React from "react";
import "../App.css";
import WhiteboardCanvas from "../components/Whiteboard-Canvas/WhiteboardCanvas";
import Participants from "../components/Participants";
<<<<<<< HEAD
import ToolBar from "../components/ToolBar";
=======
import SideBar from "../components/sidebar-component/sidebar.js";
>>>>>>> e0e05d2... showed created component to screen, merged develop and main

function Whiteboard() {
  return (
    <div className="App">
      <WhiteboardCanvas />
      <header className="App-header">Zuri whiteboard plugin</header>
      {/* <header className="App-header">Zuri whiteboard plugin</header> */}
      <Participants />
<<<<<<< HEAD
      <ToolBar />
=======
      <SideBar />
>>>>>>> e0e05d2... showed created component to screen, merged develop and main
    </div>
  );
}

export default Whiteboard;
