import React from "react";
import Answers from "../Answers/Answers";
import { Question } from "../../Styles/Answers";

function Questions({ answers = [] }) {
  return (
    <>
      {answers.map((answer, index) => (
        <Question className="question" key={index}>
          <div className="qtitle">
            <span className="bi bi-question-circle" />
            {answer.title}
          </div>
          <Answers input={false} options={answer.options} />
        </Question>
      ))}
    </>
  );
}

export default Questions;
