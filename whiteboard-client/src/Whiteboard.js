import React from "react";
import styled from "styled-components";
import "./App.css";
import ToolBar from "./components/ToolBar/ToolBar";
import SearchBar from "./components/TopBar/Searchbar/SearchBar";
import Zoom from "./components/Zoom/Zoom";
import Header from "./components/TopBar/Header/Header";

// import Collaborator from "../components/Collaborators/Collaborator";
// import Pointer from "../components/Collaborators/Pointer";
// import CollabData from "../components/Collaborators/collabData.js";

import Canvas from "./components/Canvas/Canvas";

const Temp = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 100px);
`;

function Whiteboard() {
  return (
    <div className="App">
      <div className="top-bar">
        <SearchBar />
        <Header />
      </div>
      <Canvas />
      <ToolBar />
      <Zoom />
{/*       
      {CollabData.map(person=>{
        return (
         <Collaborator key={person.id} order={person.order} >
          <Pointer order={person.order} className="fas fa-mouse-pointer"/>
          {person.name}
        </Collaborator>
        )
      })}
     */}
    </div>
  );
}

export default Whiteboard;
