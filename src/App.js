import React from "react";
import Quiz from "./Quiz";
import Splash from "./Splash";

export default function App() {
  const [startQuiz, setStartQuiz] = React.useState(false);
  const [difficulty, setDifficulty] = React.useState("easy");
  const [category, setCategory] = React.useState("");
  const [dark, setDark] = React.useState(false);

  function clickStart(event) {
    event.preventDefault();
    setStartQuiz((startQuiz) => !startQuiz);
  }

  function chooseDifficulty(event) {
    setDifficulty(event.target.value.toLowerCase());
  }
  function chooseCategory(event) {
    setCategory(event.target.value);
  }

  function handleDark(event) {
    event.preventDefault();
    setDark(!dark);
  }

  return (
    <div className={dark ? "body body-dark" : "body"}>
      {!startQuiz && (
        <Splash
          clickStart={clickStart}
          chooseDifficulty={chooseDifficulty}
          chooseCategory={chooseCategory}
          dark={dark}
          handleDark={handleDark}
        />
      )}
      {startQuiz && (
        <Quiz
          difficulty={difficulty}
          category={category}
          setStartQuiz={setStartQuiz}
          dark={dark}
          handleDark={handleDark}
          setDifficulty={setDifficulty}
          setCategory={setCategory}
        />
      )}
    </div>
  );
}
