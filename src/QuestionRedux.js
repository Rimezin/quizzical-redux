import React from "react";
import { Button, Divider } from "semantic-ui-react";
import Answer from "./Answer";

export default function QuestionRedux(props) {
  const { question, handleChange, submitted, dark, setStage } = props;
  const [checked, setChecked] = React.useState(false);

  // questionIndex, answers,

  const renderAnswers = question.answers.map((ans) => {
    return (
      <Answer
        key={ans.answerId}
        answer={ans}
        questionId={question.questionId}
        handleChange={handleChange}
        submitted={submitted}
        dark={dark}
      />
    );
  });

  function handleCheck() {
    // Check answer //
    alert("checked!");
    setChecked(true);
  }

  function handleNext() {
    setStage((stage) => stage + 1);
  }

  return (
    <div
      className={`quiz-question ${dark ? "quiz-question-dark" : ""}`}
      id={`question_${question.questionIndex}`}
    >
      <span
        className={dark ? "quiz-cat quiz-cat-dark" : "quiz-cat"}
        style={{ backgroundColor: question.catColor }}
      >
        {question.category}
      </span>
      <h3 className={dark ? "h3-dark" : ""}>{question.question}</h3>
      <fieldset className={checked ? "disabled" : ""}>{renderAnswers}</fieldset>
      <Divider />
      <div className="question-buttons">
        <Button
          className={checked ? "disabled" : ""}
          color={dark ? "grey" : "violet"}
          content="Check Answer"
          icon="check"
          labelPosition="left"
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
  );
}
