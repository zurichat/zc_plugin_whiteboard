import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export const UploadTool = () => {
  const [selectedFile, setSelectedFile] = useState();
  const fileSelectedHandler = (event) => {
    setSelectedFile({
      selectedFile: event.target.files[0],
    });
    console.log(selectedFile);
    // const formData = new FormData();
    // formData.append("item",selectedFile,selectedFile.name);
    // // insert url to backend
    // axios.post("url",formData,{onUploadProgress: progressEvent =>{
    //   console.log(`Upload Progress: ${Math.round((progressEvent.loaded / progressEvent.total) * 100)}%`)
    // }})
    // .then(res =>{
    //   console.log(res)
    // })
  };

  const Input = ({ className }) => {
    return (
      <Container>
        <input
          type="file"
          accept="image/"
          id="file"
          className={className}
          onChange={fileSelectedHandler}
        />
        <UploadTypeButton as={StyledLabel} position="first" />
      </Container>
    );
  };
  const StyledInput = styled(Input)`
    display: none;
  `;


  return (
    <ToolContainer>
      <StyledInput />
      <UploadTypeButton position="middle">
        <i className="far fa-desktop"></i>
      </UploadTypeButton>
      <UploadTypeButton position="last">
        <i className="fab fa-chrome"></i>
      </UploadTypeButton>
    </ToolContainer>
  );
};
  const Container = styled.div`
    display: flex;
    cursor: pointer;
    width: 100%;
  `;
 const Label = ({ className }) => {
   return (
     <label className={className} for="file">
       <i className="fas fa-folder-open"></i>
     </label>
   );
 };
  const StyledLabel = styled(Label)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
  `;

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
