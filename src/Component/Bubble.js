import React, { useState, useRef } from "react";
import "./Bubble.css";

const Bubble = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (event) => {
    const { current } = ref;
    if (!current) return;
    const { left, top } = current.getBoundingClientRect();
    setCoords({
      x: event.clientX - left,
      y: event.clientY - top,
    });
  };

  return (
    <div
      className="bubble"
      style={{ left: coords.x, top: coords.y }}
      ref={ref}
      onMouseMove={handleMouseMove}
    >
      <div className="bubble-content">
        <p>Je suis une bulle</p>
      </div>
    </div>
  );
};

export default Bubble;
