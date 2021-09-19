
import './export.css';
import React , {useState} from 'react';
import styled from 'styled-components';
 import logo from './images/export.png';
 import logo1 from './images/img.png';
 import logo2 from './images/pdf.png';
 import logo3 from './images/embed.png';
 import logo4 from './images/cloud.png';
 

const Dropdowncontainer = styled("div")`
width: 250px;
margin; auto;
`;
const Dropdownheader = styled("div")`
padding:5px;
background:#00B87C;
font-size:15px;
cursor:pointer;
`;
const Dropdownlistcontainer = styled("div")``;
const Dropdownlist = styled("ul")`
border:2px solid #fff;
box-sizing: border-box;
background-color:#fff;
`;
const Listitem = styled("li")`
list-style:none;
cursor:pointer;
padding:5px;
font-size:15px;
text-align:justify;
`;
 

function Export() {
  
  const [drop, setDrop]= useState(false);
const toggling = () => setDrop(!drop);

  return (
    <div className="container">
      <h2>Export tool</h2>

      <Dropdowncontainer>
          <Dropdownheader onClick={toggling}><img src={logo} alt="align"/></Dropdownheader>
        {drop && (
        <Dropdownlistcontainer>
          <Dropdownlist>
          <Listitem><img src={logo1} alt="img"/> Export as Image</Listitem>
          <Listitem><img src={logo2} alt="pdf"/> Export as a PDF</Listitem>
          <Listitem><img src={logo3} alt="website"/> Embed in Website</Listitem>
          <Listitem><img src={logo4} alt="cloud"/> Save to Zuri Cloud</Listitem>
          </Dropdownlist>
          </Dropdownlistcontainer>
        )}
          </Dropdowncontainer>
    </div>
  );
}

export default Export;
