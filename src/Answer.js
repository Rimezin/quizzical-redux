import React from "react";

export default function Answer(props) {
  const { questionId, answer, handleChange, submitted, dark } = props;

  // Determine styling for answer //
  function setBackground() {
    let bgColor = "";

    if (!submitted) {
      // If not submitted, check for dark //
      if (dark) {
        bgColor = answer.isChecked ? "darkslateblue" : "#2d2a4c";
      } else {
        bgColor = answer.isChecked ? "#a39ec5" : "white";
      }
    } else if (answer.isChecked) {
      // If submitted and checked.
      bgColor = answer.isCorrect ? "#9ec5a3" : "#c5a39e";
    } else if (!answer.isChecked) {
      // If submitted and not checked.
      bgColor = answer.isCorrect ? "#9ec5a3" : "gray";
    }

    return bgColor;
  }

  function setColor() {
    if (submitted) {
      return "black";
    } else if (dark) {
      return "#aca7c8";
    } else {
      return "black";
    }
  }

  const answerStyling = {
    backgroundColor: setBackground(),
    color: setColor(),
  };

  // Function to simulate <input> click if user clicks outside of text
  function handleClick() {
    document.getElementById(answer.answerId).click();
  }

  // Set up answer class //
  let ansClass = "question-answer";
  ansClass += dark ? " question-answer-dark" : "";
  ansClass += submitted ? " disabled" : "";

  return (
    <div className={ansClass} style={answerStyling} onClick={handleClick}>
      <input
        value={answer.answerLabel}
        type="radio"
        name={questionId}
        id={answer.answerId}
        checked={answer.isChecked}
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <label htmlFor={answer.answerId}>{answer.answerLabel}</label>
    </div>
  );
}
