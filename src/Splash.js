import React from "react";
import { Button, ButtonGroup, Dropdown, Flag } from "semantic-ui-react";
import Toggle from "./Toggle";

export default function Splash(props) {
  const {
    clickStart,
    chooseDifficulty,
    chooseCategory,
    dark,
    handleDark,
    difficulty,
  } = props;

  function handleDifficulty(event) {
    event.preventDefault();
    const diff = event.target.value;
    console.log(diff);
    chooseDifficulty(diff);
  }

  const categories = [
    {
      value: "any",
      icon: "question circle",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "any",
      text: "Any Category",
    },
    {
      value: "27",
      icon: "sticker mule",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "27",
      text: "Animals",
    },
    {
      value: "25",
      icon: "paint brush",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "25",
      text: "Art",
    },
    {
      value: "26",
      icon: "star",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "26",
      text: "Celebrities",
    },
    {
      value: "16",
      icon: "chess",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "16",
      text: "Entertainment: Board Games",
    },
    {
      value: "10",
      icon: "book",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "10",
      text: "Entertainment: Books",
    },
    {
      value: "32",
      icon: "smile",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "32",
      text: "Entertainment: Cartoon & Animation",
    },
    {
      value: "29",
      icon: "newspaper",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "29",
      text: "Entertainment: Comics",
    },
    {
      value: "11",
      icon: "film",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "11",
      text: "Entertainment: Film",
    },
    {
      value: "31",
      icon: "certificate",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "31",
      text: "Entertainment: Japanese Anime & Manga",
    },
    {
      value: "12",
      icon: "music",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "12",
      text: "Entertainment: Music",
    },
    {
      value: "13",
      icon: "podcast",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "13",
      text: "Entertainment: Musicals & Theatres",
    },
    {
      value: "14",
      icon: "tv",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "14",
      text: "Entertainment: Television",
    },
    {
      value: "15",
      icon: "gamepad",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "15",
      text: "Entertainment: Video Games",
    },
    {
      value: "9",
      icon: "cloud",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "9",
      text: "General Knowledge",
    },
    {
      value: "22",
      icon: "tree",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "22",
      text: "Geography",
    },
    {
      value: "23",
      icon: "globe",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "23",
      text: "History",
    },
    {
      value: "20",
      icon: "bug",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "20",
      text: "Mythology",
    },
    {
      value: "24",
      icon: "bullhorn",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "24",
      text: "Politics",
    },
    {
      value: "17",
      icon: "rocket",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "17",
      text: "Science & Nature",
    },
    {
      value: "18",
      icon: "laptop",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "18",
      text: "Science: Computers",
    },
    {
      value: "30",
      icon: "headphones",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "30",
      text: "Science: Gadgets",
    },
    {
      value: "19",
      icon: "calculator",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "19",
      text: "Science: Mathematics",
    },
    {
      value: "21",
      icon: "football ball",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "21",
      text: "Sports",
    },
    {
      value: "28",
      icon: "truck",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "28",
      text: "Vehicles",
    },
  ];

  return (
    <form
      className={
        dark
          ? "container container-dark container-condensed center"
          : "container container-condensed center"
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        style={{
          position: "absolute",
          width: "200px",
          left: "-20px",
          bottom: "-10px",
          zIndex: "0",
        }}
      >
        <path
          className="blob"
          fill={dark ? "#466b50" : "#abc8bb"}
          d="M38.2,-46.1C48.7,-45,55.9,-32.7,54.2,-21.5C52.6,-10.2,42.1,0,37.4,11.5C32.7,22.9,33.9,35.5,28.6,47.6C23.3,59.6,11.7,71,-1.4,72.9C-14.4,74.8,-28.8,67.1,-33.2,54.8C-37.7,42.5,-32.2,25.6,-39.2,11.1C-46.2,-3.4,-65.7,-15.6,-70.9,-30.4C-76.2,-45.2,-67.2,-62.7,-53,-62.6C-38.8,-62.5,-19.4,-44.7,-2.8,-40.9C13.9,-37.1,27.7,-47.2,38.2,-46.1Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        style={{
          position: "absolute",
          width: "200px",
          top: "-30px",
          right: "-30px",
          zIndex: "0",
        }}
      >
        <path
          className="blob"
          fill={dark ? "#6b4646" : "#c8abab"}
          d="M22.9,-33.4C30.8,-25.7,39.1,-20.6,46.3,-11.9C53.5,-3.2,59.6,9.1,57.2,19.3C54.9,29.5,44.2,37.8,33.2,47.6C22.3,57.5,11.1,68.9,3,64.8C-5.2,60.7,-10.3,41,-24,32C-37.6,23.1,-59.7,24.8,-67.4,18C-75,11.1,-68.2,-4.4,-60.1,-16.5C-52,-28.6,-42.6,-37.2,-32.4,-44.1C-22.2,-51,-11.1,-56.2,-1.8,-53.7C7.5,-51.2,15,-41.1,22.9,-33.4Z"
          transform="translate(100 100)"
        />
      </svg>
      <Toggle dark={dark} handleDark={handleDark} />
      <br />

      <h1 className={dark ? "dark" : ""}>Quizzical</h1>
      <span style={dark ? { color: "#aca7c8" } : { color: "#191632" }}>
        Choose your destiny:
      </span>
      <ButtonGroup>
        <Button
          color="violet"
          content="Easy"
          onClick={handleDifficulty}
          value="easy"
          toggle
          className={difficulty === "easy" ? "" : "alpha"}
        />
        <Button
          color="purple"
          content="Medium"
          onClick={handleDifficulty}
          value="medium"
          toggle
          className={difficulty === "medium" ? "" : "alpha"}
        />
        <Button
          color="pink"
          content="Hard"
          onClick={handleDifficulty}
          value="hard"
          toggle
          className={difficulty === "hard" ? "" : "alpha"}
        />
      </ButtonGroup>
      <Dropdown
        placeholder="Select Category"
        selection
        color="violet"
        options={categories}
        style={{
          width: "238.38px",
          backgroundColor: dark ? "#191632" : "#6435c9",
          color: dark ? "#aca7c8" : "white",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
        }}
      />

      <Button
        onClick={clickStart}
        color="violet"
        style={{
          width: "238.38px",
          backgroundColor: dark ? "#191632" : "#6435c9",
          color: dark ? "#aca7c8" : "white",
        }}
        size="huge"
        animated="fade"
      >
        <Button.Content hidden>Let's do this!</Button.Content>
        <Button.Content visible>Start Quiz</Button.Content>
      </Button>
      <span
        className={dark ? "small-text small-text-dark" : "small-text"}
        style={{ zIndex: "1" }}
      >
        Powered by Open Trivia API
        <br />
        Proud supporter of Ukraine&nbsp;
        <Flag name="ua" />
        <br />
        View on{" "}
        <a
          href="https://github.com/Rimezin/quizzical-redux"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <br />
        v2.01
      </span>
    </form>
  );
}
