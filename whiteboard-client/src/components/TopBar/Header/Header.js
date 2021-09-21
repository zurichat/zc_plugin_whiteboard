import React from "react";
import styled from "styled-components";
import Participants from "./Participants";
import ExportTool from "../../ExportTool/export";
const Header = () => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    background: #00b87c;
    margin-top: 16px;
    padding: 8px;
    `;
  const Title = styled.h2`
    text-align: center;
    flex: 1;
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 28px;
    color: white;
  `;
  return (
    <Wrapper>
      <Title>Brainstorming Session</Title>
      <ExportTool />
      <Participants />
    </Wrapper>
  );
};

export default Header;
