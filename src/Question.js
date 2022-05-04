import React from "react";
import Answer from "./Answer";

export default function Question(props) {
  const { question, answers, handleChange, submitted, dark } = props;

  const renderAnswers = answers.map((ans) => {
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

  return (
    <div
      className={dark ? "quiz-question quiz-question-dark" : "quiz-question"}
    >
      <span
        className={dark ? "quiz-cat quiz-cat-dark" : "quiz-cat"}
        style={{ backgroundColor: question.catColor }}
      >
        {question.category}
      </span>
      <h3 className={dark ? "h3-dark" : ""}>{question.question}</h3>
      <fieldset>{renderAnswers}</fieldset>

      <hr />
    </div>
  );
}
