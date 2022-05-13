import React from "react";
import { Segment, Label } from "semantic-ui-react";
import he from "he";

export default function AnswerKey(props) {
  const { dark, questions } = props;

  const renderQuestions = questions.map((question) => {
    return (
      <Segment raised style={{ backgroundColor: dark ? "#ACA7C8" : null }}>
        <Label color={question.isCorrect ? "green" : "red"} ribbon>
          {question.isCorrect ? "Correct" : "Wrong"}
        </Label>
        <span style={{ fontSize: "1.2rem" }}>
          <b>{he.decode(question.question)}</b>
        </span>
        <br />
        <br />
        <span>{he.decode(question.correct_answer)}</span>
      </Segment>
    );
  });

  //// MAIN RENDER ////
  return (
    <div
      className={`quizzical-container ${
        dark ? "quizzical-container-dark" : ""
      } quizzical-container-big`}
    >
      <div
        style={{
          margin: "1rem 2rem .5rem 2rem",
          overflowY: "auto",
        }}
      >
        <h3 className={dark ? "dark" : null}>Answer Key:</h3>
        {renderQuestions}
      </div>
    </div>
  );
}
