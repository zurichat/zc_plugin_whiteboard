import React, { Component } from "react";
import Note from "./Note/Note";
import StickyTools from "./StickyTools/StickyTools";
import * as classes from "./StickyNote.module.css";

class StickyNote extends Component {
  state = {
    showTools: false,
    background: "#ffa750",
  };

  showTools = () => {
    this.setState({ showTools: true });
  };

  changeBackground = (newColor) => {
    this.setState({ background: newColor });
  };

  render() {
    const containerClasses = [classes.Container];
    if (this.state.showTools) {
      containerClasses.push(classes.Active);
    } else {
      containerClasses.pop(classes.Active);
    }

    return (
      <div className={containerClasses.join(" ")}>
        <StickyTools
          show={this.state.showTools}
          changeBackground={this.changeBackground}
        />
        <Note
          click={this.showTools}
          active={this.state.showTools}
          background={this.state.background}
        />
      </div>
    );
  }
}

export default StickyNote;
