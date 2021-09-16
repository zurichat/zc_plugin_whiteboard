import React from "react";
import styled from "styled-components";

const collab = styled.div`
position:relative;
background:#18A0FB;
color:#fff;
display:flex;
align-items:center;
justify-content:center;
font-size:.8em;
width:82px;
height:36px;
margin:10px;
border-top-left-radius:4px;
border-top-right-radius:20px;
border-bottom-right-radius:20px;
border-bottom-left-radius:20px;
background:${props => props.order == "first" ? "#18A0FB" : props.order == "second" ? "#FEA162" : props.order == "third" ? "#FE6262":"green" }

`
export default collab;
// #18A0FB
// #FEA162
// #FE6262