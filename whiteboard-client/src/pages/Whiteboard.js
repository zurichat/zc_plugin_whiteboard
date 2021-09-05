// import React from "react";
import React, { Component } from "react";
import SubtoolBar from '../components/Subtoolbar.js';
import "../App.css";
import WhiteboardCanvas from "../components/Whiteboard-Canvas/WhiteboardCanvas";
import Participants from "../components/Participants";
import ToolBar from "../components/ToolBar";
import SideBar from "../components/sidebar-component/sidebar.js";
import ShapeSelector from "../components/ShapesSelector/ShapeSelector";
import SavedFileView from "../components/SavedFileView/SavedFileView";
import ColorPicker from "../components/Colorpicker/Colorpicker";
import SearchBar from "../components/SearchBar/SearchBar";


class Whiteboard extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
    this.showToolbarModal = this.showToolbarModal.bind(this);
    this.hideToolbarModal = this.hideToolbarModal.bind(this);
  }

  showToolbarModal = () => {
    this.setState({ show: true });
  };

  hideToolbarModal = () => {
    this.setState({ show: false });
  };

  render(){
  	return (
      <div className="App">
        <SideBar />
        <WhiteboardCanvas />
        <SubtoolBar show={this.state.show} handleClose={this.hideToolbarModal}></SubtoolBar>

        {/* <header className="App-header">Zuri whiteboard plugin</header> */}
        <Participants />
        <ToolBar />
        <ColorPicker />
        <ShapeSelector />
        <SavedFileView />
        <SearchBar />
      </div>
  	);
  };
}

export default Whiteboard;
