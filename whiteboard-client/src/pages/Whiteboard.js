import React from "react";
import "../App.css";
import Participants from "../components/Participants";

function Whiteboard() {
  return (
    <div className="App">
      {/* <header className="App-header">Zuri whiteboard plugin</header> */}
      <Participants />
    </div>
  );
}

export default Whiteboard;
