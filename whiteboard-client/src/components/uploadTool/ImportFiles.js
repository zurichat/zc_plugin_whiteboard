import React from "react";
import styled from "styled-components";
import { ImportedFileData } from "./ImportedFileData";

const Heading = ({ className }) => {
  return <p className={className}>Select File</p>;
};
const StyledHeading = styled(Heading)`
  font-size: 0.9em;
`;
const HeadingIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin: 0 0 15px 0;
`;
const FileImage = ({ className, file }) => {
  return (
    <img src={file.fileImage} alt={file.fileTitle} className={className} />
  );
};
const StyledFileImage = styled(FileImage)`
  border-radius: 8px;
  max-width: 70px;
  /* height: 100px; */
`;
const FileImageContainer = styled.div`
  max-width: 20%;
  margin: 0 10px 0 0;
`;
const FileTitle = styled.p`
  color: #333333;
  font-size: 0.7em;
`;
const TimeStamp = styled.p`
  color: #333;
  font-size: 0.5em;
`;
const FileDetails = ({ className, file }) => {
  return (
    <div className={className}>
      <FileTitle>{file.fileTitle}</FileTitle>
      <TimeStamp>{file.timeStamp}</TimeStamp>
    </div>
  );
};
const StyledFileDetails = styled(FileDetails)`
  max-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const RadioBtn = ({ className }) => {
  return <input type="radio" name="import" className={className} />;
};
const StyledRadioBtn = styled(RadioBtn)``;
const FileDetailsContainer = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  color: "#00b87c";
`;

const ImportedFile = ({ className, file }) => {
  return (
    <div className={className}>
      <FileDetailsContainer>
        <FileImageContainer>
          <StyledFileImage file={file} />
        </FileImageContainer>
        <StyledFileDetails file={file} />
      </FileDetailsContainer>
      <StyledRadioBtn />
    </div>
  );
};
const StyledImportedFile = styled(ImportedFile)`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  margin: 10px 0;
  cursor: pointer;
`;
const ImportedFileContainer = ({ className }) => {
  return (
    <div className={className}>
      {ImportedFileData.map((file) => {
        return <StyledImportedFile file={file} key={file.id} />;
      })}
    </div>
  );
};
const Button = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};
const StyledButton = styled(Button)`
  height: 2em;
  width: 70px;
  border: ${(props) =>
    props.btnFunction === "import" ? "none" : "1px solid #00b87c"};
  border-radius: 4px;
  background-color: ${(props) =>
    props.btnFunction === "import" ? " #00b87c" : "#fff"};
  color: ${(props) => (props.btnFunction === "import" ? "#fff" : " #00b87c")};
  transition: 0.2s all linear;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.btnFunction === "import" ? "#fff" : "#00b87c"};
    color: ${(props) => (props.btnFunction === "import" ? "#00b87c" : "#fff")};
    border: ${(props) =>
      props.btnFunction === "import" ? "1px solid #00b87c" : "null"};
  }
`;
const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;
const StyledImportedFileContainer = styled(ImportedFileContainer)`
  display: flex;
  flex-direction: column;
`;
const ImportFileContainer = ({ className }) => {
  return (
    <section className={className}>
      <HeadingIconContainer>
        <StyledHeading /> <i className="fas fa-download"></i>
      </HeadingIconContainer>
      <StyledImportedFileContainer />
      <StyledBtnContainer>
        <StyledButton btnFunction="import">Import</StyledButton>
        <StyledButton btnFunction="cancel">Cancel</StyledButton>
      </StyledBtnContainer>
    </section>
  );
};
const StyledImportFileContainer = styled(ImportFileContainer)`
  position: absolute;
  width: 320px;
  right: 0;
  top: 50px;
  z-index: 99;
  padding: 15px;
  background: #ffffff;
  border: 1px solid grey;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.05),
    0px 0px 0px 1px rgba(0, 184, 124, 0.08);
  border-radius: 15px;
`;

export default StyledImportFileContainer;
