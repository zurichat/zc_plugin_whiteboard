import React from "react";
import TimeStamp from "./TimeStamp";
import ViewReply from "./ViewReply";
import avatar from "./assets/avatar.png"

export const Message = () => {
  return (
    <div>
      <div className="message-div mobile">
        <div className="userImage-div">
          <div className="image-div">
          <img alt="avatar" src={avatar} className="userImage" />
          </div>
        </div>
        <div className="user-message-div">
          <h4 className="username">John Doe</h4>
          <p className="user-message">
            I'm referring to this border <span className="tagged-user">@jane,</span> please let's make quick changes
            to it.
          </p>
          <div className="mobile-stamp">
            <ViewReply />
            <TimeStamp />
          </div>
        </div>
      </div>

      <div className="message-div-laptop">
      <div className="userImage-div">
      <div className="image-div">
          <img alt="avatar" src={avatar} className="userImage" />
          </div>
        </div>
        <div className="user-message-div">
          <div className="laptop-username-div">
            <h4 className="username">John Doe</h4>
            <TimeStamp />
          </div>

          <p className="user-message">
            I'm referring to this border <span className="tagged-user">@jane,</span> please let's make quick changes
            to it.
          </p>
          <div className="laptop-stamp">
            <ViewReply />
          </div>
        </div>
      </div>
    </div>
  );
};
