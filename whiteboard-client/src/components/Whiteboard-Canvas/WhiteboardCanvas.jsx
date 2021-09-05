import React, {useCallback, useEffect, useRef, useState } from 'react';


function WhiteboardCanvas() {

  const canvasRef = useRef(null);
  const ctx = useRef(null);

  const [mouseDown, setMouseDown] = useState(false);
  const [lastPosition, setPosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
    }
  }, []);

  const draw = useCallback((x, y) => {
    if (mouseDown) {
      ctx.current.beginPath();
      ctx.current.lineWidth = 10;
      ctx.current.lineJoin = 'round';
      ctx.current.moveTo(lastPosition.x, lastPosition.y);
      ctx.current.lineTo(x, y);
      ctx.current.closePath();
      ctx.current.stroke();

      setPosition({
        x,
        y
      })
    }
  }, [lastPosition, mouseDown, setPosition])


  const onMouseDown = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY
    })
    setMouseDown(true)
  }

  const onMouseUp = (e) => {
    setMouseDown(false)
  }

  const onMouseMove = (e) => {
    draw(e.pageX, e.pageY)
  }

  
  return (
    <div>
       <canvas 
          style= {{
              background:"orange"
          }}
          width={600}
          height={600}
          ref= {canvasRef}
          onMouseMove = {onMouseMove}
          onMouseUp = {onMouseUp}
          onMouseDown = {onMouseDown}
          onMouseLeave = {onMouseUp}
        
        />
    </div>
  );
}

export default WhiteboardCanvas;
