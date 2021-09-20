import React from "react";
import styled from "styled-components";

const FileImage = ({ className, file }) => {
  return <img src={file} alt="file" className={className} />;
};
const StyledFileImage = styled(FileImage)``;
const FileDisplay = ({ className, fileUrl }) => {
  return (
    <div className={className}>
      <StyledFileImage url={fileUrl} />;
    </div>
  );
};
export const DisplayImports = styled(FileDisplay)`
  width: 150px;
  height: 150px;
  border: 1px solid gold;
`;
