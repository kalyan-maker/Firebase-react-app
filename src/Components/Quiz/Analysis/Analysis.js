import React from "react";
import Questions from "../Questions/Questions";
import { Analysisection } from "../../Styles/Answers";

function Analysis({ answers }) {
  return (
    <Analysisection>
      <h1>Question Analysis</h1>
      <Questions answers={answers} />
    </Analysisection>
  );
}

export default Analysis;
