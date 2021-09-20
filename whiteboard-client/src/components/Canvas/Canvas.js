import React, { useState, useEffect } from "react";
import { Stage, Layer, Line, Text } from "react-konva";
import Circ from "../../elements/Circ";

const Canvas = ({defaultPenColor}) => {
  const stageEl = React.createRef();
  const layerEl = React.createRef();

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const [circles, setCircles] = useState();
  const [selectedId, selectShape] = useState(null);
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const allCircles = JSON.parse(localStorage.getItem("circles"));
    setCircles(allCircles || []);
  }, []);

  const [tool, setTool] = React.useState('pen');
  const [lines, setLines] = React.useState([]);
  const isDrawing = React.useRef(false);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, {tool, points: [pos.x, pos.y]}]);
  }

  const handleMouseMove = (e) => {
    if(!isDrawing.current){
        return;
    }

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];

    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  }

  const handleMouseUp = () => {
    isDrawing.current = false;
  }

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      className="Canvas"
      ref={stageEl}
      onMouseDown={handleMouseDown}
      onMousemove={handleMouseMove}
      onMouseup={handleMouseUp}
    >
      <Layer ref={layerEl}>
        <Text text="This is the canvas!" />
        {circles &&
          circles.map((circle, i) => {
            return (
              <Circ
                key={i}
                shapeProps={circle}
                isSelected={circle.id === selectedId}
                onSelect={() => {
                  selectShape(circle.id);
                }}
                onChange={(newAttrs) => {
                  const circs = circles.slice();
                  circs[i] = newAttrs;
                  setCircles(circs);
                }}
              />
            );
          })}
        {lines.map((line, i) => (
          <Line
            key={i}
            points={line.points}
            stroke={defaultPenColor}
            strokeWidth={5}
            tension={0.5}
            lineCap="round"
            globalCompositeOperation={
              line.tool === 'eraser' ? 'destination-out' : 'source-over'
            }
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default Canvas;
