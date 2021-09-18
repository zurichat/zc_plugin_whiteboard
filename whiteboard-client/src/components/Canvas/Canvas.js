import React, { useState, useEffect } from "react";
import { Stage, Layer, Text } from "react-konva";
import Circ from "../../elements/Circ";

const Canvas = () => {
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

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      className="Canvas"
      ref={stageEl}
      onMouseDown={(e) => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
          selectShape(null);
        }
      }}
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
      </Layer>
    </Stage>
  );
};

export default Canvas;
