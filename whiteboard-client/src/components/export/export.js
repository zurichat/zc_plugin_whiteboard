import { useState } from "react";
import "./export.css";
import exportsvg from "./visuals/ri_download-2-fill.svg";
import chat from "./visuals/chat.svg";
import participants from "./visuals/Group 1152.png";
import cloud from "./visuals/cloud.svg";
import pdf from "./visuals/pdf.svg";
import website from "./visuals/website.svg";
import image from "./visuals/image.svg";
import Line from "./visuals/Line.svg";

const Export = () => {
    const [showExport, setShowExport] = useState(false);
    const showDiv = () => {
        if (!showExport){
            setShowExport(true)
        }
        else{
            setShowExport(false)
        }
    }

    return(
        <div className="container">
            <section>
                <img src={exportsvg} alt="" onClick={showDiv}/>
            </section>
            <img src={Line} alt=""/>
            <section>
                <img src={chat} alt=""/>
            </section>
            <img src={Line} alt=""/>
            <section>
                <img src={participants} alt=""/>
            </section>
            {showExport ? <ExportDiv/> : null}
        </div>
    )
}

const ExportDiv = () =>{
    return(
        <div className ="wrapper">
             <section>
                <img src={image} alt=""/>
                <p>Export as Image</p>
            </section>
            <section>
                <img src={pdf} alt=""/>
                <p>Export as a PDF</p>
            </section>
            <section>
                <img src={website} alt=""/>
                <p>Embed in website</p>
            </section>
            <section>
                <img src={cloud} alt=""/>
                <p>Save to Zuri Cloud </p>
            </section>
        </div>
    )
}

export default Export;