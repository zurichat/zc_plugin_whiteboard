import React, { useState } from "react";

export function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  // changehandler function
  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files);
    console.log(selectedFile);
    setIsFilePicked(true);
  };

  // handleSubmissiion function
  const handleSubmission = (e) => {};
  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      {/* {isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{""}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )} */}
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
}
