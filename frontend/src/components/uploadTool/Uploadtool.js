import React from "react";
import styled from "styled-components";

export const UploadTool = () => {
  return (
    <ToolContainer>
      <UploadTypeButton position="first">
        <i className="fas fa-folder-open"></i>
      </UploadTypeButton>
      <UploadTypeButton position="middle">
        <i className="far fa-desktop"></i>
      </UploadTypeButton>
      <UploadTypeButton position="last">
        <i className="fab fa-chrome"></i>
      </UploadTypeButton>
    </ToolContainer>
  );
};

const ToolContainer = styled.div`
  width: 120px;
  height: 40px;
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
  display: flex;
`;

const UploadTypeButton = styled.button`
  height: 40px;
  width: 100%;
  border: none;
  background-color: #fff;
  border-top-left-radius: ${(props) =>
    props.position === "first" ? "13px" : ""};
  border-bottom-left-radius: ${(props) =>
    props.position === "first" ? "13px" : ""};
  border-top-right-radius: ${(props) =>
    props.position === "last" ? "13px" : null};
  border-bottom-right-radius: ${(props) =>
    props.position === "last" ? "13px" : null};
  transition: 0.1s all linear;
  cursor: pointer;
  &:hover {
    background-color: #00b87c;
    color: #fff;
  }
  box-shadow: 0, 2px 3px rgba(7, 5, 4, 0.1);
`;
