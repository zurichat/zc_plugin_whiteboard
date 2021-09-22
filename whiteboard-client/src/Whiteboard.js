import React, { Component, useState } from "react";
import render from "react-dom";
import styled from "styled-components";
import "./App.css";
import ToolBar from "./components/ToolBar/ToolBar";
import SearchBar from "./components/TopBar/Searchbar/SearchBar";
import Zoom from "./components/Zoom/Zoom";
import Header from "./components/TopBar/Header/Header";
// import Collaborator from "../components/Collaborators/Collaborator";
// import Pointer from "../components/Collaborators/Pointer";
// import CollabData from "../components/Collaborators/collabData.js";
import DropZone from "./components/uploadTool/Dropzone";
import StyledUrlUploadContainer from "./components/uploadTool/UrlUploadInput";
import StyledImportFileContainer from "./components/uploadTool/ImportFiles";

import Canvas from "./components/Canvas/Canvas";

const Temp = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 100px);
`;

// function Whiteboard() {
//   return (
//     <div className="App">
//       <div className="top-bar">
//         <SearchBar />
//         <Header />
//       </div>
//       <Canvas />
//       <ToolBar />
//       <Zoom />
//     </div>
//   );
// }

class Whiteboard extends Component {
  constructor() {
    super();
    this.state = {
      defaultColor: "#000",
      displayUrlContainer: false,
      displayImportsContainer: false,
    };

    this.changeColor = this.changeColor.bind(this);
    this.changeColorToGrey = this.changeColorToGrey.bind(this);
    this.changeColorToBlue = this.changeColorToBlue.bind(this);
    this.changeColorToGreen = this.changeColorToGreen.bind(this);
    this.changeColorToYellow = this.changeColorToYellow.bind(this);
    this.toggleDisplayUrlUploadHandler =
      this.toggleDisplayUrlUploadHandler.bind(this);
    this.toggleDisplayImportHandler =
      this.toggleDisplayImportHandler.bind(this);
  }

  changeColor = () => {
    this.setState({ defaultColor: "#000000" });
  };

  changeColorToGrey = () => {
    this.setState({ defaultColor: "#808080" });
  };

  changeColorToBlue = () => {
    this.setState({ defaultColor: "#0000ff" });
  };

  changeColorToGreen = () => {
    this.setState({ defaultColor: "#00ff00" });
  };

  changeColorToYellow = () => {
    this.setState({ defaultColor: "#ffff00" });
  };

  toggleDisplayUrlUploadHandler = () => {
    const display = displayUrlContainer;
    this.setState({ displayUrlContainer: !display });
  };
  toggleDisplayImportHandler = () => {
    const display = displayImportsContainer;
    this.setState({ displayImportsContainer: !display });
  };
  render() {
    return (
      <div className="App">
        <div className="top-bar">
          <SearchBar />
          <Header />
        </div>
        <Canvas defaultPenColor={this.state.defaultColor} />
        <DropZone />
  
        {displayImport ? <StyledImportFileContainer /> : null}
        <Canvas />
        {displayUrl ? <StyledUrlUploadContainer /> : null}
        <ToolBar
          changeColor={this.changeColor}
          changeColorToGrey={this.changeColorToGrey}
          changeColorToBlue={this.changeColorToBlue}
          changeColorToGreen={this.changeColorToGreen}
          changeColorToYellow={this.changeColorToYellow}
          showUrlContainer={this.toggleDisplayUrlUploadHandler}
          showImportContainer={this.toggleDisplayImportHandler}
        />
        <Zoom />
      </div>
    );
  }
}

export default Whiteboard;
