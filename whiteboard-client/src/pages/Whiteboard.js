// import React from "react";
import React, { Component } from "react";
import Modal from '../components/Subtoolbar.js';
import "../App.css";

class Whiteboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
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
  			<Modal show={this.state.show} handleClose={this.hideToolbarModal}></Modal>
      	<header className="App-header">Zuri whiteboard plugin
	      	<p>Subtoolbar Modal</p>
			    <button type="button" className="test-btn" onClick={this.showToolbarModal}>
  			 		Open
  				</button>
      	</header>
		  </div>
  	);
  };
}

export default Whiteboard;
