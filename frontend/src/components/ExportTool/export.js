import React, { useContext, useState } from "react";
import "./export.css";
import styled from "styled-components";
import logo from "./images/export.png";
import logo1 from "./images/img.png";
import logo2 from "./images/pdf.png";
import logo3 from "./images/embed.png";
import logo4 from "./images/cloud.png";
import ToolContext from "../../contexts/ToolContext";

const DropdownContainer = styled("div")`
  margin-left: auto;
  font-family: inherit;
  margin-right: 1rem;
  position: relative;
  z-index: 200;
`;
const DropdownHeader = styled("div")`
  padding: 5px;
  font-size: 15px;
  cursor: pointer;
`;
const DropdownListContainer = styled("div")`
  position: absolute;
  top: 3rem;
  left: -100px;
  min-width: 200px;
`;
const DropdownList = styled("ul")`
  border: 2px solid #fff;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.05),
    0px 0px 0px 1px rgba(0, 184, 124, 0.08);
  box-sizing: border-box;
  background-color: #fff;
  padding: 0.8rem;
  border-radius: 3px;
`;
const ListItem = styled("li")`
  list-style: none;
  display: flex;
  pointer-events: auto;
  align-items: center;
  cursor: pointer;
  padding: 10px 0;
  font-family: "Lato";
  font-size: 15px;
  gap: 10px;
  text-align: justify;
`;

function Export() {
  const [drop, setDrop] = useState(false);
  const toggling = () => setDrop(!drop);
  // const { stageEl, handleClearTool } = useContext(ToolContext);

  const handleExport = () => {
    handleClearTool();
    // const uri = stageEl.current.toDataURL();
    // downloadURI(uri, "stage.png");
  };

  return (
    <div className="container">
      {/* <h2> Export tool </h2> */}
      <DropdownContainer>
        <DropdownHeader onClick={toggling}>
          <img src={logo} alt="align" />
        </DropdownHeader>{" "}
        {drop && (
          <DropdownListContainer>
            <DropdownList>
              <ListItem onClick={handleExport}>
                <img src={logo1} alt="img" />
                <p>Export as Image</p>
              </ListItem>{" "}
              <ListItem>
                <img src={logo2} alt="pdf" />
                <p> Export as a PDF </p>
              </ListItem>{" "}
              <ListItem>
                <img src={logo3} alt="website" /> <p>Embed in Website </p>
              </ListItem>{" "}
              <ListItem>
                <img src={logo4} alt="cloud" /> <p>Save to Zuri Cloud </p>
              </ListItem>{" "}
            </DropdownList>{" "}
          </DropdownListContainer>
        )}{" "}
      </DropdownContainer>{" "}
    </div>
  );
}

export default Export;
