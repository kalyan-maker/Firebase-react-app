import React from "react";
import { Summary } from "../../Styles/Answers";
import image from "../../../Assests/Images/success.png";

function Summaryfunction({ score, noq }) {
  return (
    <Summary className="summary">
      <div className="point">
        <p className="score">
          Your score is <br />
          {score} out of {noq * 1}
        </p>
      </div>

      <div className="badge">
        <img src={image} alt="Success" />
      </div>
    </Summary>
  );
}

export default Summaryfunction;
