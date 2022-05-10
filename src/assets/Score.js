import React from "react";
import Party from "./Confetti";

export default function Score(props) {
  const { score, difficulty, category, dark } = props;

  return (
    <>
      {score > 5 && <Party />}
      <div className={`score henny ${dark ? "dark" : ""}`}>Final Score:</div>
      <div className={`big-score henny ${dark ? "dark" : ""}`}>
        {score}
        <br />
        <br />
        <br />
        <br />
        <span className="henny" style={{ fontSize: "3rem" }}>
          of 10
        </span>
      </div>
      <div
        style={{ fontSize: "2rem", textTransform: "uppercase" }}
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
