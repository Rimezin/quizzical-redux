import React from "react";
import Confetti from "./Confetti";

export default function Score(props) {
  const { score } = props;

  return (
    <>
      {score > 6 && <Confetti />}
      <div className="score henny">Final Score:</div>
      <div className="big-score henny">{score}</div>
    </>
  );
}
