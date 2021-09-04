import React from "react";
import "../App.css";
import Participants from "../components/Participants";
import SavedFileView from "../components/SavedFileView/SavedFileView";

function Whiteboard() {
  return (
    <div className="App">
      {/* <header className="App-header">Zuri whiteboard plugin</header> */}
      <Participants />
      <SavedFileView />
    </div>
  );
}

export default Whiteboard;
