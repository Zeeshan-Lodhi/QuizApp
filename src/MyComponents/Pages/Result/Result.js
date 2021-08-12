import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./result.css";

const Result = ({ score, name }) => {
  // This useEffect redirect the user to home page when he directly visit result page
  const history = useHistory();
  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);

  return (
    <div className="result">
      <span className="finslScore"> Final Score: {score}/10</span>
      <Button
      className="Rbtn"
        variant="contained"
        color="secondary"
        size="larger"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go To HomePage
      </Button>
    </div>
  );
};

export default Result;
