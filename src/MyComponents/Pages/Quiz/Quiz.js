import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import "./quiz.css";
import "./questions.css";

const Quiz = ({ name, questions, score, setscore }) => {
  const [options, setoptions] = useState();
  const [questionStatement, setquestionStatement] = useState(0);
  useEffect(() => {
    // This log is for questionsData(all)
    // console.log(questions);

    // Here handleShufle is call that shuffle the options
    setoptions(
      questions &&
        handleShufle([
          questions[questionStatement]?.correct_answer,
          ...questions[questionStatement]?.incorrect_answers,
        ])
    );
  }, [questions, questionStatement]);

  //This log is for check the option is shufle successfuuly
  // console.log(options);

  //Here we defining the handleShufle function
  const handleShufle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };
  return (
    <div className="quiz">
      <span className="subTitle">Welcome,{name}</span>
      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[questionStatement].category}</span>
            <span>Score:{score}</span>
          </div>

          <Questions
            questionStatement={questionStatement}
            setquestionStatement={setquestionStatement}
            score={score}
            setscore={setscore}
            questions={questions}
            options={options}
            correct={questions[questionStatement]?.correct_answer}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
