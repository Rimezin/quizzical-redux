import React from "react";
import { Button, Divider, Segment } from "semantic-ui-react";
import Answer from "./Answer";
import Tag from "./Tag";

export default function QuestionRedux(props) {
  const {
    handleReset,
    question,
    handleChange,
    score,
    dark,
    setStage,
    setScore,
  } = props;
  const [checked, setChecked] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [result, setResult] = React.useState(false);

  // questionIndex, answers,

  const renderAnswers = question.answers.map((ans) => {
    return (
      <Answer
        key={ans.answerId}
        answer={ans}
        question={question}
        handleChange={handleChange}
        checked={checked}
        dark={dark}
      />
    );
  });

  function handleCheck() {
    // Check answer //
    if (!question.isAnswered) {
      setError("You forgot to answer!");
      return;
    } else {
      setChecked(true);
      setError(false);
      if (question.isCorrect) {
        setScore((score) => score + 1);
        setResult("Correct!");
      } else {
        setResult("Wrong...");
      }
    }
  }

  function handleNext() {
    setStage((stage) => stage + 1);
  }

  return (
    <div
      className={`quiz-question ${dark ? "quiz-question-dark" : ""}`}
      id={`question_${question.questionIndex}`}
    >
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          margin: "1.2rem",
        }}
      >
        <Tag dark={dark} text={question.category} />
      </div>
      <div className="question-container">
        <span
          style={{
            fontSize: "2em",
            fontWeight: "600",
            lineHeight: "1",
          }}
          className={dark ? "h3-dark" : ""}
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
          position: "fixed",
          bottom: 0,
          marginBottom: "4rem",
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
            onClick={handleReset}
            content="Reset"
            style={{ width: "8rem" }}
            icon="undo alternate"
          />
          <Button
            className={checked ? "disabled" : ""}
            color={dark ? "grey" : "violet"}
            content="Check Answer"
            icon="check"
            onClick={handleCheck}
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
