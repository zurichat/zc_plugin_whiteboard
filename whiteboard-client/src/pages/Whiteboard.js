import React from "react";
import "../App.css";
import styled from "styled-components";
import WhiteboardCanvas from "../components/Whiteboard-Canvas/WhiteboardCanvas";
import Participants from "../components/Participants";
import ToolBar from "../components/ToolBar";
import SideBar from "../components/sidebar-component/sidebar"
import ShapeSelector from "../components/ShapesSelector/ShapeSelector";
import SavedFileView from "../components/SavedFileView/SavedFileView";
import ColorPicker from "../components/Colorpicker/Colorpicker";


const AppWrapper = styled.div`
  height: 900px;
  width: 100%;
  position: relative;
`

const DispayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PartWrapper = styled.div`
    margin-top: 20px;
    

  `;

const SaveWrapper = styled.div`
     position: absolute;
     top: 10%;
     left: 50%;
  `


function Whiteboard() {
  return (
    <div className="App">
      <AppWrapper>
        <DispayWrapper>
          <SideBar />
          <PartWrapper>
            <Participants />
          </PartWrapper>

        </DispayWrapper>

        <SaveWrapper>
          <SavedFileView />
          <ToolBar />

        <ColorPicker />
        <ShapeSelector />
        </SaveWrapper>


       

      </AppWrapper>


      {/* <WhiteboardCanvas /> */}
      {/* <Participants /> */}



    </div>
  );
}

export default Whiteboard;
