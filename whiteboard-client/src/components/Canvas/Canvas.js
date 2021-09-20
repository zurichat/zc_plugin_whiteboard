import React, {useState} from "react";
import { Stage, Layer, Line, Text } from "react-konva";
import Circ from "../../elements/Circ";

const Canvas = () => {
  const layerEl = React.createRef();
  const [lines, setLines] = React.useState([]);
  const isDrawing = React.useRef(false);
  const [circles, setCircles] = useState();
  const [selectedId, selectShape] = useState(null);
  const [shapes, setShapes] = useState([]);

  const { color, tool, downloadURI, stageEl } = useContext(ToolContext);
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  useEffect(() => {
    const allCircles = JSON.parse(localStorage.getItem("circles"));
    setCircles(allCircles || []);
  }, []);

  const handleMouseDown = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const [tool, setTool] = React.useState('pen');
  const [lines, setLines] = React.useState([]);
  const isDrawing = React.useRef(false);

  const handleMouseDown = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
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
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return (
    <div>
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
          <Text
            text="Move me around, start drawing too."
            draggable={true}
            listening
            fontSize="14"
            visible
            editable={true}
          />

          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={color}
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              globalCompositeOperation={
                line.tool === "eraser" ? "destination-out" : "source-over"
              }
            />
          ))}

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
    </div>
  );
};

export default Canvas;
