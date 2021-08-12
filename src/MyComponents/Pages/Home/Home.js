import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./home.css";
import { Button, MenuItem, TextField } from "@material-ui/core";
import Categories from "../../../Data/Categories";

const Home = ({ name, setname, fetchQuestion }) => {
  //This state is for home page textField
  const [category, setcategory] = useState("");
  const [difficulty, setdifficulty] = useState("");
  const [error, seterror] = useState(false);

  // This useHistory is for push to quiz page
  const history = useHistory();
  // This function is for start the quiz
  const handleStart = () => {
    if (category && difficulty && name) {
      fetchQuestion(category, difficulty);
      history.push("/quiz");
    } 
    else {
      alert("Please fill all the fields");
    }
  };

  return (
    <>
      <div className="home">
        <div className="quiz_setting">
          <h3>Quiz Setting</h3>
          <TextField
            className="input"
            label="Enter Name"
            variant="outlined"
            required
            onChange={(e) => setname(e.target.value)}
          />

          <TextField
            className="input"
            select
            required
            label="Select Category"
            variant="outlined"
            onChange={(e) => setcategory(e.target.value)}
            value={category}
          >
            {Categories.map((elm) => (
              <MenuItem key={elm.category} value={elm.value}>
                {elm.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            className="input"
            select
            required
            label="Select Difficulty"
            variant="outlined"
            onChange={(e) => setdifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>

            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>

            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            className="btn"
            size="large"
            color="primary"
            variant="contained"
            onClick={handleStart}
          >
            Start Quiz
          </Button>
        </div>

        <div className="imgg"> </div>
      </div>
    </>
  );
};

export default Home;
