import React from "react";
import "./SavedFileView.css";

const FileIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5 1.49988H4.5C3.67157 1.49988 3 2.17145 3 2.99988V14.9999C3 15.8283 3.67157 16.4999 4.5 16.4999H13.5C14.3284 16.4999 15 15.8283 15 14.9999V5.99988L10.5 1.49988Z"
        stroke="#999999"
        stroke-width="1.22693"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5 1.49988V5.99988H15"
        stroke="#999999"
        stroke-width="1.22693"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 9.75H6"
        stroke="#999999"
        stroke-width="1.22693"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 12.75H6"
        stroke="#999999"
        stroke-width="1.22693"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 6.74988H6.75H6"
        stroke="#999999"
        stroke-width="1.22693"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const files = [1,2,3,4,5,6,7,8,9]
const createDummyContent = () => {
 return (
   files.map((file) => <div className="file">
   <div className="fileIcon">
     <FileIcon />
   </div>
   <p className="fileName">File 0{file}.jpg</p>
 </div>)
 )
};
export default function SavedFileView() {
  return (
    <div className="saved-file-view">
      <div className="savedFiles">
        <h3>Saved Files</h3>
        <div className="fileSection">
          {createDummyContent()}
        </div>
      </div>
    </div>
  );
}
