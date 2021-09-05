import React, { useEffect } from "react";
import styled from "styled-components";

const Board = () => {

  const drawOnBoard = () => {
    let timeout;
    let canvas = document.querySelector("#board");
    let canvasCtx = canvas.getContext("2d");

    let sketch = document.querySelector("#sketch");
    let sketch_style = getComputedStyle(sketch);
    canvas.width = parseInt(sketch_style.getPropertyValue("width"));
    canvas.height = parseInt(sketch_style.getPropertyValue("height"));

    let mouse = { x: 0, y: 0 };
    let last_mouse = { x: 0, y: 0 };

    /* Mouse Capturing Work */
    canvas.addEventListener(
      "mousemove",
      function (e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
      },
      false
    );

    /* Drawing on Paint App */
    canvasCtx.lineWidth = 5;
    canvasCtx.lineJoin = "round";
    canvasCtx.lineCap = "round";
    canvasCtx.strokeStyle = "blue";

    canvas.addEventListener(
      "mousedown",
      function (e) {
        canvas.addEventListener("mousemove", onPaint, false);
      },
      false
    );

    canvas.addEventListener(
      "mouseup",
      function () {
        canvas.removeEventListener("mousemove", onPaint, false);
      },
      false
    );

    let onPaint = function () {
      canvasCtx.beginPath();
      canvasCtx.moveTo(last_mouse.x, last_mouse.y);
      canvasCtx.lineTo(mouse.x, mouse.y);
      canvasCtx.closePath();
      canvasCtx.stroke();

      if (timeout !== undefined) clearTimeout(timeout);
      timeout = setTimeout(function () {
        let base64ImageData = canvas.toDataURL("image/png");
        console.log(base64ImageData)
      }, 1000);
    };
  };

  useEffect(() => {
    drawOnBoard();
  }, []);

  const Sketch = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: -1;
  margin:auto`

  const Canvas = styled.canvas`
  width: 100%;
 
  height: 100%;
  margin: auto;
  background-color: #fdfdfd;
  margin-top: 2%;
  border-radius: 10px;
  `

  return (
    <Sketch id="sketch">
        <Canvas id="board" />
    </Sketch>
  );
};

export default Board;
