import React, { Fragment } from "react";
import { Answersection } from "../../Styles/Answers";
import Checkbox from "./Checkbox";

function Answers({ options = [], handleChange, input }) {
  return (
    <Answersection className="answer">
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              key={index}
              className="answer"
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <Checkbox
              key={index}
              className={`answer ${
                option.correct ? "correct" : option.checked ? "wrong" : null
              }`}
              text={option.title}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </Answersection>
  );
}

export default Answers;
