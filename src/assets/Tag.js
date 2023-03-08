import React from "react";
import { DarkMode } from "../App";

export default function Tag(props) {
  const { text } = props;
  const dark = React.useContext(DarkMode);

  // Establish category colors
  const catColors = {
    "Science: Computers": "#EDBB99",
    "Science: Gadgets": "#EDBB99",
    "Science & Nature": "lightgreen",
    "Science: Mathematics": "whitesmoke",
    "Entertainment: Television": "#AED6F1",
    "Entertainment: Film": "#A9CCE3",
    "Entertainment: Board Games": "#9fefe7",
    "Entertainment: Video Games": "#CCCCFF",
    "Entertainment: Books": "#E9967A",
    "Entertainment: Japanese Anime & Manga": "#9FE2BF",
    "Entertainment: Music": "#ffe599",
    "Entertainment: Cartoon & Animations": "#f5ffb2",
    "Entertainment: Comics": "#f5ffb2",
    "Entertainment: Musicals & Theatres": "#a39ec5",
    Sports: "#D2B4DE",
    Politics: "#D7BDE2",
    Vehicles: "#E6B0AA",
    Mythology: "#A3E4D7",
    "General Knowledge": "lightgra,",
    Geography: "#A2D9CE",
    Celebrities: "#A9DFBF",
    Art: "#F9E79F",
    Animals: "#FAD7A0",
    History: "#F5CBA7",
  };

  return (
    <div
      className={`quiz-cat ${dark ? "quiz-cat-dark" : ""}`}
      style={{ backgroundColor: catColors[text] }}
    >
      {text}
    </div>
  );
}
