import React from "react";
import { DarkMode } from "../App";
import Party from "./Confetti";

export default function Score(props) {
  const { score, difficulty, category, goodGame } = props;
  const dark = React.useContext(DarkMode);
  return (
    <>
      {goodGame && <Party />}
      <div className={`score henny ${dark ? "dark" : ""}`}>Final Score:</div>
      <div className={`big-score henny ${dark ? "dark" : ""}`}>{score}</div>
      <div
        style={{
          fontSize: "2rem",
          textTransform: "uppercase",
        }}
        className={dark ? "dark" : ""}
      >
        {difficulty}
      </div>
      <div
        style={{ fontSize: "1.5rem", margin: "1.5rem" }}
        className={dark ? "dark" : ""}
      >
        {category === null ? { category } : "All Categories"}
      </div>
    </>
  );
}
