import React from "react";
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

function ShapeSelector() {
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
}

export default ShapeSelector;
