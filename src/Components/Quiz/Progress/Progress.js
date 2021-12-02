import React, { useState, useRef } from "react";
import { PrograssBar } from "../../Styles/Answers";

function Progress({ next, prev, progress, submit }) {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();

  function toggleTooltip() {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  }

  return (
    <PrograssBar className="progressBar ">
      <div className="backButton" onClick={prev}>
        <span className="bi bi-arrow-left-square-fill" />
      </div>
      <div className="rangeArea">
        <div className="tooltip" ref={tooltipRef}>
          {" "}
          {progress}% Complete!
        </div>
        <div className="rangeBody">
          <div
            className="progress"
            style={{ width: `${progress}%` }}
            onMouseOver={toggleTooltip}
            onMouseOut={toggleTooltip}
          />
        </div>
      </div>
      <button
        className="button-next"
        onClick={progress === 100 ? submit : next}
        style={{ background: "green", borderRadius: "5px" }}
      >
        <span className="next">
          {progress === 100 ? "Submit Quiz" : "Next Question"}
        </span>
        <span className="bi bi-arrow-right-square-fill" />
      </button>
    </PrograssBar>
  );
}

export default Progress;
