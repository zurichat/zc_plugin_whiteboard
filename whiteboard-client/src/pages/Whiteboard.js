import React from "react";
import "../App.css";
// import WhiteboardCanvas from "../components/Whiteboard-Canvas/WhiteboardCanvas";
import ToolBar from "../components/ToolBar/ToolBar";
import SearchBar from "../components/SearchBar/SearchBar";
import Zoom from "../components/Zoom/Zoom";
import Header from "../components/Header/Header";
import Board from "../components/Whiteboard-Canvas/Board";
import Text from "../components/Text/Text";

function Whiteboard() {
  return (
    <div className="App">
      <SearchBar />
      <Header />
      {/* <WhiteboardCanvas /> */}
      <Board />
      <ToolBar />
      <Zoom />
      <Text />
    </div>
  );
}

export default Whiteboard;
