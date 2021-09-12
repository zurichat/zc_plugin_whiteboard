import React from "react"
import styled from "styled-components"

const Pointer = styled.i`
position:absolute;
top:-20px;
left:-7px;
color:${props => props.order == "first" ? "#18A0FB" : props.order == "second" ? "#FEA162" : props.order == "third" ? "#FE6262":"green" }
`
export default Pointer;
// #18A0FB
// #FEA162
// #FE6262