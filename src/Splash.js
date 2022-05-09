import React from "react";
import {
  Image,
  Button,
  ButtonGroup,
  Dropdown,
  Flag,
  Checkbox,
  Label,
} from "semantic-ui-react";
import installPC from "./pictures/install-pc.png";
import installMobile from "./pictures/install-mobile.png";

export default function Splash(props) {
  const {
    clickStart,
    chooseDifficulty,
    chooseCategory,
    dark,
    difficulty,
    setModal,
    handleSound,
    handleSettings,
  } = props;

  // Handle Difficulty Selection //
  function handleDifficulty(event) {
    handleSound("click");
    event.preventDefault();
    const diff = event.target.value;
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

  //// Instructions Modal ////
  function handleInstructions() {
    handleSound("button");
    setModal({
      show: true,
      icon: "question circle",
      title: "How To Play!",
      content: (
        <>
          <b>Welcome to quizzical!</b> The random internet trivia game you never
          knew you needed! Better think quick, because time keeps ticking and
          there's more knowledge to gain!
          <ol>
            <li>Select your difficulty</li>
            <li>Choose your category</li>
            <li>Click "Start Quiz!"</li>
          </ol>
          Each question is timed, based on the difficulty you select! Once you
          have selected your answer, click "Check Answer" to see if you were
          right!
          <br />
          <br />
          Don't forget you can install this game as a local app on your device!
        </>
      ),
      buttons: {
        okLabel: "It can't be that hard...",
        okAction: null,
        cancelLabel: null,
        cancelAction: null,
      },
    });
  }

  //// Credits Modal ////
  function handleCredits() {
    handleSound("button");
    setModal({
      show: true,
      icon: "bullhorn",
      title: "Credits",
      content: (
        <>
          This is my final solo project from &nbsp;
          <a href="https://scrimba.com/learn/learnreact">
            Bob Ziroll's Intro to React course
          </a>
          &nbsp; on Scrimba.com. While I made some design tweaks and added
          additional functionality to the original design, ultimately the
          concept for this app is not my own and from that course. Anyone
          looking to learn React should seriously consider Bob's course, which
          was free and easy to follow. Otherwise, here's all who went into this:
          <ol>
            <li>Most of the code in this project was written by Rimezin</li>
            <li>
              Trivia API is from the{" "}
              <a href="https://opentdb.com/" rel="noreferrer">
                Open Trivia Database
              </a>
              .
            </li>
            <li>
              Special thanks to the&nbsp;
              <a
                href="https://scrimba.com/community"
                target="_blank"
                rel="noreferrer"
              >
                Scrimba Community
              </a>
              &nbsp;for their support, and especially: Vi, Mark, and Ben W. for
              their troubleshooting help.
            </li>
            <li>
              The main logo font is called "Henny Penny" from&nbsp;
              <a
                href="https://fonts.google.com/share?selection.family=Henny%20Penny%7CJosefin%20Sans"
                target="_blank"
                rel="noreferrer"
              >
                Google Fonts
              </a>
              . Most of the other text on the page is "Josefin Sans."
            </li>
            <li>
              Buttons and some other ui elements are from the React verison
              of&nbsp;
              <a
                href="https://react.semantic-ui.com/"
                target="_blank"
                rel="noreferrer"
              >
                Semantic UI
              </a>
              .
            </li>
            <li>
              The timer countdown was adapted from a Stack Overflow post&nbsp;
              <a
                href="https://stackoverflow.com/a/40887181"
                target="_blank"
                rel="noreferrer"
              >
                found here
              </a>
              .
            </li>
            <li>
              Background music is "Pleasant Porridge" by&nbsp;
              <a
                href="https://incompetech.com/music/royalty-free/music.html"
                rel="noreferrer"
              >
                Kevin MacLeod
              </a>
              . Licensed under&nbsp;
              <a
                href="http://creativecommons.org/licenses/by/4.0/"
                rel="noreferrer"
              >
                Creative Commons: By Attribution 4.0 License
              </a>
            </li>
            <li>
              Various sound effects from&nbsp;
              <a href="https://mixkit.co/free-sound-effects/" rel="noreferrer">
                Mixkit
              </a>
              , used under their Mixkit Free License
            </li>
          </ol>
          View the source code for Quizzical on&nbsp;
          <a
            href="https://github.com/Rimezin/quizzical-redux"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </>
      ),
      buttons: {
        okLabel: "Sounds good!",
        okAction: null,
        cancelLabel: null,
        cancelAction: null,
      },
    });
  }

  //// Install App Modal ////
  function installApp() {
    handleSound("button");
    setModal({
      show: true,
      icon: "install",
      title: "Install on your device",
      content: (
        <div>
          Quizzical is a progressive web app, so you can install it natively on
          your device!
          <ul>
            <li>
              <b>PC browser:</b>&nbsp;Click the install shortcut in the address
              bar.
              <br />
              <Image src={installPC} />
            </li>
            <br />
            <li>
              <b>Mobile browser:</b>&nbsp;Tap the three dots&nbsp;
              <i className="ellipsis vertical" color="black"></i>
              &nbsp;and then "Install App".
              <Image src={installMobile} size="medium" />
            </li>
          </ul>
        </div>
      ),
      buttons: {
        okLabel: "Sounds good!",
        okAction: null,
        cancelLabel: null,
        cancelAction: null,
      },
    });
  }

  ///////////////////////////////////////////////////
  /////////// SPLASH RENDERING //////////////////////
  ///////////////////////////////////////////////////
  return (
    <form
      className={`quizzical-container quizzical-container-condensed center ${
        dark ? "quizzical-container-dark" : ""
      }`}
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

      <h1 className={dark ? "dark" : ""} style={{ zIndex: "1" }}>
        Quizzical
      </h1>
      <span
        style={{
          color: dark ? "#aca7c8" : "#191632",
          fontWeight: "700",
          fontSize: "1.2rem",
          paddingBottom: ".5rem",
          zIndex: "1",
        }}
      >
        Decide your fate:
      </span>
      <ButtonGroup style={{ width: "18rem", zIndex: "1" }}>
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
        onClick={() => handleSound("click")}
        style={{
          width: "18rem",
          backgroundColor: dark ? "#191632" : "#6435c9",
          color: dark ? "#aca7c8" : "white",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
          zIndex: "2",
        }}
      />

      <Button
        onClick={clickStart}
        color="violet"
        style={{
          width: "18rem",
          backgroundColor: dark ? "#191632" : "#6435c9",
          color: dark ? "#aca7c8" : "white",
          margin: "0 0 1rem 0",
          zIndex: "1",
        }}
        size="huge"
        animated="fade"
      >
        <Button.Content hidden>Let's do this!</Button.Content>
        <Button.Content visible>Start Quiz</Button.Content>
      </Button>
      <ButtonGroup style={{ width: "18rem", zIndex: "1" }}>
        <Button
          color="violet"
          basic={dark ? true : false}
          style={{ fontWeight: "700" }}
          icon="question"
          inverted
          type="button"
          onClick={handleInstructions}
        />
        <Button
          color="violet"
          basic={dark ? true : false}
          style={{ fontWeight: "700" }}
          icon="bullhorn"
          inverted
          type="button"
          onClick={handleCredits}
        />
        <Button
          color="violet"
          basic={dark ? true : false}
          style={{ fontWeight: "700" }}
          icon="setting"
          inverted
          type="button"
          onClick={handleSettings}
        />
        <Button
          color="blue"
          basic={dark ? true : false}
          style={{ fontWeight: "700" }}
          content="Install"
          icon="download"
          inverted
          type="button"
          onClick={installApp}
        />
      </ButtonGroup>
      <span
        className={dark ? "small-text small-text-dark" : "small-text"}
        style={{ zIndex: "1" }}
      >
        Proud supporter of Ukraine&nbsp;
        <Flag name="ua" />
        <br />
        <br />
        v3.04
      </span>
    </form>
  );
}
