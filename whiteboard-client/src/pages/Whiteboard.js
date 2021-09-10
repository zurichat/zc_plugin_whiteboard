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


const Temp = styled.div`
  display:grid;
  grid-template-columns:repeat(2,100px)
`

function Whiteboard() {
  const collaborators = [
    {id:1,name:"james",order:"first"},
    {id:2,name:"Kamzzy",order:"second"},
    {id:3,name:"Tamara",order:"third"},
    {id:4,name:"Snow",order:"fourth"}
  ]
  return (
    <div className="App">
      <SearchBar />
      <Header />
      {/* <WhiteboardCanvas /> */}
      <Temp>
      {collaborators.map(person=>{
        return (
         <Collaborator key={person.id} order={person.order} >
          <Pointer order={person.order} className="fas fa-mouse-pointer"/>
          {person.name}
        </Collaborator>
        )
        
      })}
      </Temp>
      <Board />
      <ToolBar />
      <Zoom />
    </div>
  );
}

export default Whiteboard;
