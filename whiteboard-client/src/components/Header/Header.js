import React from "react";
import styled from "styled-components";
import Participants from "./Participants";
import Export from "../export/export";

const Header = () => {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    `;
    const Title = styled.h2`
    text-align: center;
    flex: 1;
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 28px;
    color: #8c8c8c;
  `;
  return (
    <Wrapper>
      <Title>Brainstorming Session</Title>
      <Export />
    </Wrapper>
  );
};

export default Header;
