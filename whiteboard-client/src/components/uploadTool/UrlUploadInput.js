import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  color: #333333;
  font-size: 0.9em;
  margin: 10px 0;
`;
const Button = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};
const StyledButton = styled(Button)`
  width: 120px;
  height: 30px;
  border-radius: 5px;

  border: ${(props) =>
    props.function === "cancelUpload" ? "1px solid #00b87c" : "none"};
  margin-right: 15px;
  text-transform: uppercase;

  background-color: ${(props) =>
    props.function === "upload" ? "#00b87c" : "#fff"};
  color: ${(props) => (props.function === "upload" ? "#fff" : "#00b87c")};

  box-shadow: ${(props) =>
    props.function === "cancelUpload"
      ? "0px 4px 16px rgba(51, 51, 51, 0.1)"
      : ""};

  cursor: pointer;

  transition: 0.2s all linear;

  &:hover {
    background-color: ${(props) =>
      props.function === "upload" ? "#fff" : "#00b87c"};
    color: ${(props) => (props.function === "upload" ? "#00b87c" : "#fff")};
    border: ${(props) =>
      props.function === "upload" ? "1px solid #00b87c" : "#fff"};
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  margin: 10px 0 10px 0;
`;
const UploadInput = ({ className }) => {
  return <input className={className} type="text" placeholder="paste url" />;
};
const StyledUploadInput = styled(UploadInput)`
  height: 40px;
  max-width: 100%;
  border: 1px solid #8c8c8c;
  border-radius: 5px;
  text-indent: 10px;
`;
const UrlUploadContainer = ({ className }) => {
  return (
    <div className={className}>
      <Paragraph>Upload via URL</Paragraph>
      <StyledUploadInput />
      <ButtonContainer>
        <StyledButton function="upload">Import</StyledButton>
        <StyledButton function="cancelUpload">Cancel</StyledButton>
      </ButtonContainer>
    </div>
  );
};
const StyledUrlUploadContainer = styled(UrlUploadContainer)`
  position: absolute;
  width: 500px;
  left: 500px;
  top: 100px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 16px rgba(51, 51, 51, 0.1);
  padding: 10px 20px;
`;
export default StyledUrlUploadContainer;
