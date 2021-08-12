import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorMessage from "../../ErrorMsg/ErrorMessage";
import "./questions.css";
import { Button } from "@material-ui/core";
const Questions = ({
  questionStatement,
  setquestionStatement,
  score,
  setscore,
  questions,
  options,
  correct,
}) => {
  const [selected, setselected] = useState();
  const [error, seterror] = useState(false);

  // This function is for selected option (wrong(red) or correct(green))
  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setselected(i);
    if (i === correct) {
      setscore(score + 1);
    } else {
      seterror(false);
    }
  };

  const history = useHistory();
  // This function is for next the question
  const handleNext = () => {
    if (questionStatement > 8) {
      history.push("/result");
    } else if (selected) {
      setquestionStatement(questionStatement + 1);
      setselected();
    } else {
      alert("Please select an option first");
    }
  };
  // This function is for quit the quiz

  const handleQuit = () => {};

  //
  return (
    <div className="question">
      <h1 className= "qNo">Question:{questionStatement + 1}</h1>
      <div className="questionStatement">
        <h2 className="cq">{questions[questionStatement].question}</h2>
        <div className="options">
          {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
          {options &&
            options.map((i) => {
              return (
                <button
                  onClick={() => {
                    handleCheck(i);
                  }}
                  className={`singleOption ${selected && handleSelect(i)}`}
                  key={i}
                  disabled={selected}
                >
                  {i}
                </button>
              );
            })}
          <div className="controls">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{ width: 185 }}
              href="/"
              onClick={handleQuit}
            >
              Quit
            </Button>
            <Button
              className="Qbtn"
              variant="contained"
              color="primary"
              size="large"
              style={{ width: 185 }}
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
