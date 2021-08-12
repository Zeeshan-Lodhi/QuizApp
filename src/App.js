import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Footer from "./MyComponents/Footer/Footer";
import Header from "./MyComponents/Header/Header";
import Home from "./MyComponents/Pages/Home/Home";
import Quiz from "./MyComponents/Pages/Quiz/Quiz";
import Result from "./MyComponents/Pages/Result/Result";
function App() {
  const [name, setname] = useState("");
  // This state is for quiz page
  const [questions, setquestions] = useState("");
  const [score, setscore] = useState(0);

  const fetchQuestion = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      ` https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple `
    );
    // This log is for checking api call
    // console.log(data);

    setquestions(data.results)
  };
  return (
    <>
    <Footer />
      <div className="App App2">
    <hr style={{marginTop:2}}/>
    <hr />
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home name={name} setname={setname} fetchQuestion={fetchQuestion} />
          </Route>

          <Route path="/quiz" exact>
            <Quiz
              name={name}
              questions={questions}
              setquestions={setquestions}
              score={score}
              setscore={setscore}
            />
          </Route>

          <Route path="/result" exact>
            <Result score={score}
            name={name}
            />
          </Route>
        </Switch>
      </div>

    </>
  );
}

export default App;
