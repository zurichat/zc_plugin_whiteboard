import React from "react";
import styled from "styled-components"
import "../App.css";
// import WhiteboardCanvas from "../components/Whiteboard-Canvas/WhiteboardCanvas";
import ToolBar from "../components/ToolBar/ToolBar";
import SearchBar from "../components/SearchBar/SearchBar";
import Zoom from "../components/Zoom/Zoom";
import Header from "../components/Header/Header";
import Board from "../components/Whiteboard-Canvas/Board";

import Collaborator from "../components/Collaborators/Collaborator";
import Pointer from "../components/Collaborators/Pointer"
import CollabData from "../components/Collaborators/collabData.js"

const Temp = styled.div`
  display:grid;
  grid-template-columns:repeat(2,100px)
`

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
      <Temp>
      {CollabData.map(person=>{
        return (
         <Collaborator key={person.id} order={person.order} >
          <Pointer order={person.order} className="fas fa-mouse-pointer"/>
          {person.name}
        </Collaborator>
        )
      })}
      </Temp>
    </div>
  );
}

export default Whiteboard;
