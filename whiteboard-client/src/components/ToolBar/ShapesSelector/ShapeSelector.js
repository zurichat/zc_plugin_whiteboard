import React, { useState, useRef } from "react";
import "./ShapeSelector.css";
import {
  Stage,
  Layer,
  Line,
  Rect,
  Circle,
  Star,
  RegularPolygon,
} from "react-konva";

function ShapeSeletor() {
  const dragShape = () => {};
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;
  return (
    <div className="shapeSelector">
      <div className="shapesContainer"></div>
      <Stage
        onClick={dragShape}
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Layer>
          <div className="shapes">
            <RegularPolygon
              x={screenWidth * 0.52}
              y={screenHeight * 0.77}
              sides={6}
              radius={12}
              fill="#BEBEBE"
              draggable="true"
            />
          </div>
          <div className="shapes">
            <Star
              x={screenWidth * 0.56}
              y={screenHeight * 0.77}
              numPoints={5}
              outerRadius={14}
              innerRadius={7}
              fill="#BEBEBE"
              draggable="true"
            />
          </div>

          <div className="shapes">
            <Rect
              x={screenWidth * 0.59}
              y={screenHeight * 0.745}
              width={24}
              height={24}
              fill="#BEBEBE"
              cornerRadius={5}
              draggable="true"
            />
          </div>
          <div className="shapes">
            <RegularPolygon
              x={screenWidth * 0.52}
              y={screenHeight * 0.866}
              sides={3}
              radius={17}
              fill="#BEBEBE"
              draggable="true"
            />
          </div>
          <div className="shapes">
            <Rect
              x={screenWidth * 0.55}
              y={screenHeight * 0.836}
              width={24}
              height={24}
              fill="#BEBEBE"
              draggable="true"
            />
          </div>
          <div className="shapes">
            <RegularPolygon
              x={screenWidth * 0.6}
              y={screenHeight * 0.858}
              sides={4}
              radius={14}
              fill="#BEBEBE"
              draggable="true"
            />
          </div>

          <div className="shapes">
            <Line
              x={screenWidth * 0.518}
              y={screenHeight * 0.97}
              points={[0, 0, 24, 0, 16, -24, -8, -24]}
              closed="true"
              radius={12}
              fill="#BEBEBE"
              draggable="true"
            />
          </div>
          <div className="shapes">
            <Circle
              x={screenWidth * 0.563}
              y={screenHeight * 0.945}
              radius={12}
              fill="#BEBEBE"
              draggable="true"
            />
          </div>
          <div className="shapes">
            <Line
              x={screenWidth * 0.59}
              y={screenHeight * 0.97}
              points={[0, 0, 24, 0, 18, -24, 6, -24]}
              closed="true"
              radius={12}
              fill="#BEBEBE"
              draggable="true"
            />
          </div>
        </Layer>
      </Stage>
    </div>
  );
function ShapeSeletor(){
    const [circles, setCircles] = useState([]);

    const getRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max));
      };

    const addCircle = () => {
        const circ = {
          x: getRandomInt(window.innerWidth),
          y: getRandomInt(window.innerHeight),
          width: 100,
          height: 100,
          fill: "red",
          id: `circ${circles.length + 1}`,
        }; 
        const currentCircles = JSON.parse(localStorage.getItem('circles')) || []
        currentCircles.push(circ);
        
        localStorage.setItem('circles', JSON.stringify(currentCircles))
      };

    

    return(
        <div className="ShapeSelector">
            <div className="shapesContainer">
                <div className="shapes">
                    <img src={hexagon} alt="" />
                </div>
                <div className="shapes">
                    <img src={sqaure} alt="" />
                </div>
                <div className="shapes">
                    <img src={star} alt="" />
                </div>
                <div className="shapes">
                    <img src={triangle} alt="" />
                </div>
                <div className="shapes">
                    <img src={rhombus} alt="" />
                </div>
                <div className="shapes">
                    <img src={squarestraight} alt="" />
                </div>
                <div className="shapes">
                    <img src={parallelogram} alt="" />
                </div>
                <div className="shapes">
                    <img src={quadrilateral} alt="" />
                </div>
                <div className="shapes" onClick={addCircle}>
                    <img src={circle} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ShapeSeletor;
