import logo from './images/circle.png';
import logo2 from './images/Shape.png';
import logo3 from './images/align.png';
import logo4 from './images/ashcircle.png';

function Toolbar4() {
  return (
    <div className="toolbar4">
      <div className="container">
        <div className="tool">
          <div className="tool1">
          <img src={logo} alt="circle"/>
          <img src={logo2} alt="arrow"/>
      </div>

      <div className="tool2">
      <img src={logo3} alt="text-align"/>
          <img src={logo2} alt="arrow"/>
      </div>
      
      <div className="tool3">
      <img src={logo4} alt="ash-circle"/>
          <img src={logo2} alt="arrow"/>
      </div>
      </div>
      </div>
     
    </div>
  );
}

export default Toolbar4;
