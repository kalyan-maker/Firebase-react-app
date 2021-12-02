import React from "react";
import _ from "lodash";
import { useHistory, useParams } from "react-router-dom";
import useAnswers from "../../Hooks/useAnswers";
import Analysis from "./Analysis/Analysis";
import Summaryfunction from "./Summary/Summary";

function Result() {
  const { id } = useParams();
  const { location } = useHistory();
  const { state } = location;
  const { qna } = state;

  const { loading, error, answers } = useAnswers(id);

  //calculate
  function calculate() {
    let score = 0;

    answers.forEach((question, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 1;
      }
    });

    return score;
  }

  const userScore = calculate();

  return (
    <div>
      <h1>Result</h1>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error! pls try again later</div>}
      {answers && answers.length > 0 && (
        <>
          <Summaryfunction score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </div>
  );
}

export default Result;
