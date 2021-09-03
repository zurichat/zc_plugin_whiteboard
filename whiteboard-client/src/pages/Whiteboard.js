import React from "react";
import "../App.css";
<<<<<<< HEAD
import Participants from "../components/Participants";
import Toolbar5 from "../components/toolbar-5/Toolbar5";
=======
import WhiteboardCanvas from "../components/Whiteboard-Canvas/WhiteboardCanvas";
import Participants from "../components/Participants";
import ToolBar from "../components/ToolBar";
import SideBar from "../components/sidebar-component/Sidebar.js";
import ShapeSelector from "../components/ShapesSelector/ShapeSelector";
import ColorPicker from "../components/Colorpicker/Colorpicker";
>>>>>>> 770cc12a57793b8fa704595fb3edb89298a0d122

function Whiteboard() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <header className="App-header">Zuri whiteboard plugin</header> */}
      <Participants />

      {/* issues 268 Tool bar  */}
      <Toolbar5 />
=======
      <SideBar />
      <WhiteboardCanvas />
      {/* <header className="App-header">Zuri whiteboard plugin</header> */}
      <Participants />
      <ToolBar />
<ColorPicker />
      <ShapeSelector />
>>>>>>> 770cc12a57793b8fa704595fb3edb89298a0d122
    </div>
  );
}

export default Whiteboard;
