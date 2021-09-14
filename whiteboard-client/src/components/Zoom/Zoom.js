import Reactte, { useState } from "react";
import "./Zoom.css";

export default function Zoom() {
  const [zoomNumber, setZoomNumber] = useState(100);
  const [isZoom, setZoom] = useState(false);

  const zoomOut = () => {};
  const zoomIn = () => {};
  const reset = () => {};
  const hideZoomComponent = () => {
    setZoom(false);
  };
  const revealZoomComponent = () => {
    setZoom(true);
  };
  return (
    <div className="zoom">
      {/* <div className="Invisible" onClick={hideZoomComponent}></div> */}
      <div
        className="zoom-component-after"
        style={{ display: isZoom ? "flex" : "none" }}
      >
        <div className="zoom-percentage">
          <span className="number">{zoomNumber}</span>%
        </div>
        <button className="zoom-out" onClick={zoomOut}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0203 10.078L13.8757 12.9327L12.9323 13.876L10.0777 11.0207C9.0155 11.8721 7.69434 12.3353 6.33301 12.3333C3.02101 12.3333 0.333008 9.64533 0.333008 6.33333C0.333008 3.02133 3.02101 0.333328 6.33301 0.333328C9.64501 0.333328 12.333 3.02133 12.333 6.33333C12.3349 7.69466 11.8718 9.01582 11.0203 10.078ZM9.68301 9.58333C10.5291 8.71325 11.0016 7.54695 10.9997 6.33333C10.9997 3.75466 8.91101 1.66666 6.33301 1.66666C3.75434 1.66666 1.66634 3.75466 1.66634 6.33333C1.66634 8.91133 3.75434 11 6.33301 11C7.54663 11.0019 8.71293 10.5294 9.58301 9.68333L9.68301 9.58333ZM3.66634 5.66666H8.99967V7H3.66634V5.66666Z"
              fill="#8C8C8C"
            />
          </svg>
        </button>
        <button className="zoom-in" onClick={zoomIn}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0203 10.078L13.8757 12.9327L12.9323 13.876L10.0777 11.0207C9.0155 11.8721 7.69434 12.3353 6.33301 12.3333C3.02101 12.3333 0.333008 9.64533 0.333008 6.33333C0.333008 3.02133 3.02101 0.333328 6.33301 0.333328C9.64501 0.333328 12.333 3.02133 12.333 6.33333C12.3349 7.69466 11.8718 9.01582 11.0203 10.078ZM9.68301 9.58333C10.5291 8.71325 11.0016 7.54695 10.9997 6.33333C10.9997 3.75466 8.91101 1.66666 6.33301 1.66666C3.75434 1.66666 1.66634 3.75466 1.66634 6.33333C1.66634 8.91133 3.75434 11 6.33301 11C7.54663 11.0019 8.71293 10.5294 9.58301 9.68333L9.68301 9.58333ZM5.66634 5.66666V3.66666H6.99967V5.66666H8.99967V7H6.99967V9H5.66634V7H3.66634V5.66666H5.66634Z"
              fill="#8C8C8C"
            />
          </svg>
        </button>
        <button className="zoom-reset" onClick={reset}>
          Reset
        </button>
      </div>
      <button
        className="zoom-component-before"
        style={{ display: isZoom ? "none" : "flex" }}
        onClick={revealZoomComponent}
      >
        <span className="number">{zoomNumber}</span>%
      </button>
    </div>
  );
}
