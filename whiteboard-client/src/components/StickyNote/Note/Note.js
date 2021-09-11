import React from "react";
import * as classes from "./Note.module.css";

const Note = (props) => {
  return (
    <div
      className={classes.Note}
      onClick={props.click}
      style={{ backgroundColor: props.background }}
    >
      <textarea
        placeholder="Write here..."
        name="text"
        rows="14"
        cols="10"
        wrap="soft"
        maxlength="90"
      ></textarea>
    </div>
  );
};

export default Note;
