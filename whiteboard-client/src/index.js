import React from "react";
import ReactDOM from "react-dom";
import SideBar from "./components/sidebar-component/sidebar.js";
import "./index.css";
// import Whiteboard from "./pages/Whiteboard";

ReactDOM.render(
  <React.StrictMode>
     {/* <Whiteboard />  */}
    <SideBar/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
