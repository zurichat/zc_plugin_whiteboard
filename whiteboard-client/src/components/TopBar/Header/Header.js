import React from "react";
import styled from "styled-components";
import Participants from "./Participants";

const Header = () => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
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
      {/* <Participants /> */}
    </Wrapper>
  );
};

export default Header;
