import React from "react";
import Toggle from "./Toggle";
// import Logo from "./Logo";

export default function Splash(props) {
  const { clickStart, chooseDifficulty, chooseCategory, dark, handleDark } =
    props;

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
      <Toggle
        toggleText={dark ? "Light" : "Dark"}
        dark={dark}
        handleDark={handleDark}
      />
      <br />
      {/* <Logo /> */}
      <h1 className={dark ? "h1-dark" : ""}>Quizzical</h1>
      <span style={dark ? { color: "#aca7c8" } : { color: "#191632" }}>
        Choose your destiny:
      </span>
      <select
        id="difficultySelector"
        onChange={(value) => chooseDifficulty(value)}
      >
        <option name="easy">Easy</option>
        <option name="medium">Medium</option>
        <option name="hard">Hard</option>
      </select>
      <select id="categorySelector" onChange={(value) => chooseCategory(value)}>
        <option value="any">Any Category</option>
        <option value="27">Animals</option>
        <option value="25">Art</option>
        <option value="26">Celebrities</option>
        <option value="16">Entertainment: Board Games</option>
        <option value="10">Entertainment: Books</option>
        <option value="32">Entertainment: Cartoon & Animation</option>
        <option value="29">Entertainment: Comics</option>
        <option value="11">Entertainment: Film</option>
        <option value="31">Entertainment: Japanese Anime & Manga</option>
        <option value="12">Entertainment: Music</option>
        <option value="13">Entertainment: Musicals & Theatres</option>
        <option value="14">Entertainment: Television</option>
        <option value="15">Entertainment: Video Games</option>
        <option value="9">General Knowledge</option>
        <option value="22">Geography</option>
        <option value="23">History</option>
        <option value="20">Mythology</option>
        <option value="24">Politics</option>
        <option value="17">Science & Nature</option>
        <option value="18">Science: Computers</option>
        <option value="30">Science: Gadgets</option>
        <option value="19">Science: Mathematics</option>
        <option value="21">Sports</option>
        <option value="28">Vehicles</option>
      </select>
      <button
        onClick={clickStart}
        className={dark ? "button-normal button-normal-dark" : "button-normal"}
      >
        Start Quiz
      </button>
      <span
        className={dark ? "small-text small-text-dark" : "small-text"}
        style={{ zIndex: "1" }}
      >
        Powered by Open Trivia API
        <br />
        Special thanks to the Scrimba Community
        <br />
        View on{" "}
        <a
          href="https://github.com/Rimezin/quizzical"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </span>
    </form>
  );
}
