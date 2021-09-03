import "./sidebar.css";
import zurilogo from "./visuals/zurilogo.png"
import briefcase from "./visuals/briefcase.svg"
import files from "./visuals/Files.svg"
import insight from "./visuals/Insight.svg"
import Thread from "./visuals/Thread.svg"
import draft from "./visuals/Draft.svg"
import dms from "./visuals/Dms.svg"
import activedropdown from "./visuals/active.svg"
import hngsvg from "./visuals/hngsvg.svg"
import Integrate from "./visuals/Group.svg"
import hashtag from "./visuals/Frame 3.svg"
import downvector from "./visuals/Vectordown.svg"
import addicon from "./visuals/carbon_add-alt.svg"
import person1 from "./visuals/person1.png"
import person2 from "./visuals/person2.png"
import person3 from "./visuals/person3.png"

const SideBar = () => {
  return (
    <section>
      <div className="logo">
        <img src={zurilogo} alt=""/>
      </div>
      <div className="wrapper">
        <div className="Hng"> 
            <span>
              <h3>HNG</h3>
              <img src={activedropdown} alt=""/>
            </span>
              <span>
                <img src={hngsvg} alt=""/>
              </span>
        </div>
        <div>
          <div className="container">
              <span>
                <img src={insight} alt=""/>
              </span>
              <p>Insight</p>
          </div>
          <div className="container">
              <span>
                <img src={Thread} alt=""/>
              </span>
              <p>Threads</p>
          </div>
          <div className="container">
              <span>
                <img src={dms} alt=""/>
              </span>
              <p>All DMs</p>
          </div>
          <div className="container">
              <span>
                <img src={draft} alt=""/>
              </span>
              <p>Draft</p>
          </div>
          <div className="container">
              <span>
                <img src={files} alt=""/>
              </span>
              <p>Files</p>
          </div>
          <div className="container">
              <span>
                <img src={Integrate} alt=""/>
              </span>
              <p>Integrate</p>
          </div>
        </div>
        <div className="">
        <div>
              <div className="container">
                <img src={downvector} alt=""/>
                <p>Meeting Room</p>
              <span>
                <img src={addicon} alt=""/>
              </span>
              </div>
            </div>
            <div className="container">
              <img src={briefcase} alt=""/>
              <p>Designers</p>
            </div>
            <div className="container">
              <img src={briefcase} alt=""/>
              <p>Team Seneca</p>
            </div>
            <div className="container">
            <img src={briefcase} alt=""/>
              <p>Team Leads Collab</p>
            </div>
        </div>
        <div >
          <div className="container">
              <div className="container">
                <img src={downvector} alt=""/>
                <p>Channels</p>
              <span>
                <img src={addicon} alt=""/>
              </span>
              </div>
            </div>
            <div className="container">
              <span>
                <img src={hashtag} alt=""/>
              </span>
              <p>announcements</p>
            </div>
            <div className="container">
              <span>
                <img src={hashtag} alt=""/>
              </span>
              <p>games</p>
            </div>
            <div className="container">
              <span>
                <img src={hashtag} alt=""/>
              </span>
              <p>designers</p>
            </div>
            <div className="container">
              <span>
                <img src={hashtag} alt=""/>
              </span>
              <p>developers</p>
            </div>
        </div>
        <div className="">
            <div>
              <div className="container">
                <img src={downvector} alt=""/>
                <p>Direct Messages</p>
                <span>
                  <img src={addicon} alt=""/>
                </span>
              </div>
            </div>
            <div className="container">
              <img src={person1} alt=""/>
              <p>John Doe</p>
            </div>
            <div className="container">
              <img src={person2} alt=""/>
              <p>John Doe</p>
            </div>
            <div className="container">
              <img src={person3} alt=""/>
              <p>John Doe</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default SideBar;
