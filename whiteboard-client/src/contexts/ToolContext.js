import React, { createContext, useState } from "react";

const ToolContext = createContext(null);
export const ToolContextProvider = ({ children }) => {
  const [tool, setTool] = useState("pen");
  const [color, setColor] = useState("red");
  const stageEl = React.createRef();

  const handlePenTool = () => {
    setTool("pen");
  };

  const handleClearTool = () => {
    setTool("");
  };

  function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleEraserTool = () => {
    setTool("eraser");
  };

  const handleSetColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <ToolContext.Provider
      value={{
        tool,
        handleSetColor,
        color,
        stageEl,
        handleEraserTool,
        handleClearTool,
        handlePenTool,
        downloadURI,
      }}
    >
      {children}
    </ToolContext.Provider>
  );
};

export default ToolContext;
// export  ToolContextProvider
