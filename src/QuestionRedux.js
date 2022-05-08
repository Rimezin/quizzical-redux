import React from "react";
import { Button, Divider, Segment } from "semantic-ui-react";
import Answer from "./Answer";
import Tag from "./Tag";
import Timer from "./Timer";

export default function QuestionRedux(props) {
  const {
    handleReset,
    question,
    handleChange,
    score,
    dark,
    setStage,
    setScore,
    difficulty,
    handleTimeExpire,
    setModal,
    handleSound,
  } = props;

  const [checked, setChecked] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [result, setResult] = React.useState(false);

  // Timer //
  const [seconds, setSeconds] = React.useState(() => {
    switch (difficulty) {
      case "easy":
        return 40;
      case "medium":
        return 30;
      case "hard":
        return 20;
      default:
        return;
    }
  });

  const renderAnswers = question.answers.map((ans) => {
    return (
      <Answer
        key={ans.answerId}
        answer={ans}
        question={question}
        handleChange={handleChange}
        checked={checked}
        dark={dark}
        seconds={seconds}
        handleSound={handleSound}
      />
    );
  });

  function handleCheck(validate) {
    // Check answer //
    if (validate === null || validate === undefined || validate === "") {
      validate = false;
    }

    if (!question.isAnswered && validate) {
      setError("You forgot to answer!");
      handleSound("buttonNo");
      return;
    }

    setChecked(true);
    setError(false);
    if (question.isCorrect) {
      setScore((score) => score + 1);
      handleSound("correct");
      setResult("Correct!");
    } else {
      handleSound("wrong");
      setResult("Wrong...");
    }
  }

  function handleNext() {
    setStage((stage) => stage + 1);
    handleSound("click");
  }

  // Watch for time expiration. //
  React.useEffect(() => {
    if (seconds === 0 && !checked) {
      handleCheck(false);
      handleTimeExpire(question.name, question.id);
    }
  }, [seconds]);

  // Modal to confirm reset //
  function handleResetClick(e) {
    e.preventDefault();
    handleSound("button");
    setModal({
      show: true,
      icon: "exclamation triangle",
      title: "Reset the game?",
      content: (
        <div style={{ marginTop: "2rem" }}>
          <b>Are you sure you want to reset the game?</b>&nbsp;You will lose
          your current score.
          <br />
          <br />
          <i>Decide quick, time is still counting down!</i>
        </div>
      ),
      buttons: {
        okLabel: "Let's start over!",
        okAction: () => handleReset(true),
        cancelLabel: "Nevermind...",
        cancelAction: null,
      },
    });
  }

  return (
    <div
      className={`quiz-question ${dark ? "quiz-question-dark" : ""}`}
      id={`question_${question.questionIndex}`}
    >
      <div style={{ display: "flex" }}>
        <Timer
          seconds={seconds}
          setSeconds={setSeconds}
          dark={dark}
          checked={checked}
          handleSound={handleSound}
        />
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            margin: "0 auto 1rem auto",
          }}
        >
          <Tag dark={dark} text={question.category} />
        </div>
      </div>
      <div className="question-container">
        <span
          style={{
            fontSize: "2em",
            fontWeight: "600",
            lineHeight: "1",
          }}
          className={dark ? "dark" : ""}
        >
          {question.question}
        </span>
        <fieldset className={checked ? "disabled" : ""}>
          {renderAnswers}
        </fieldset>
      </div>
      <Divider />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          marginBottom: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
          // height: "63px",
        }}
      >
        <div
          style={{
            display: "flex",
            opacity: error || result ? "100%" : "0%",
            justifyContent: "center",
            margin: "1rem",
            color: error ? "red" : result === "Correct!" ? "limegreen" : "red",
            fontWeight: error ? null : 700,
          }}
        >
          <Segment
            size={error ? "big" : "huge"}
            color="violet"
            raised
            inverted={dark ? true : false}
          >{`${error ? error : ""}${
            result ? `${result} - Score: ${score}` : ""
          }`}</Segment>
        </div>

        <div className="question-buttons">
          <Button
            color="violet"
            inverted={dark ? true : false}
            onClick={handleResetClick}
            content="Reset"
            style={{ width: "8rem" }}
            icon="undo alternate"
          />
          <Button
            className={checked ? "disabled" : ""}
            color={dark ? "grey" : "violet"}
            content="Check Answer"
            icon="check"
            onClick={() => handleCheck(true)}
          />
          <Button
            className={!checked ? "disabled" : ""}
            color={dark ? "grey" : "violet"}
            content="Next"
            icon="right arrow"
            labelPosition="right"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
}