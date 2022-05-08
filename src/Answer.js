import React from "react";

export default function Answer(props) {
  const { question, answer, handleChange, checked, dark, handleSound } = props;

  // Determine styling for answer //
  function setBackground() {
    let bgColor = "";

    if (!checked) {
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
    if (checked) {
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
    margin: "0.5em",
  };

  // Function to simulate <input> click if user clicks outside of text
  function handleClick() {
    handleSound("click");
    document.getElementById(answer.answerId).click();
  }

  // Set up answer class //

  let ansClass = `ui huge button answer answer-grey ${
    dark ? "question-answer-dark" : ""
  }`;

  return (
    <div className={ansClass} style={answerStyling} onClick={handleClick}>
      <input
        value={answer.answerLabel}
        type="radio"
        name={question.questionId}
        id={answer.answerId}
        checked={answer.isChecked}
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <label htmlFor={answer.answerId} style={{ pointerEvents: "none" }}>
        {answer.answerLabel}
      </label>
    </div>
  );
}
