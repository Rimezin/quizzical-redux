import React from "react";
import { Button, ButtonGroup, Icon } from "semantic-ui-react";
import { DarkMode } from "../App";

export default function Difficulty(props) {
  const {
    prevPage,
    nextPage,
    handleSound,
    handleSettings,
    difficulty,
    chooseDifficulty,
  } = props;
  const dark = React.useContext(DarkMode);

  // Handle Difficulty Selection //
  function handleDifficulty(event) {
    handleSound("click");
    event.preventDefault();
    const diff = event.target.value;
    chooseDifficulty(diff);
  }

  return (
    <div
      className={`quizzical-container quizzical-container-condensed center ${
        dark ? "quizzical-container-dark" : ""
      }`}
    >
      <div style={{ position: "absolute", top: "0" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "inherit",
            marginBottom: "3rem",
          }}
          id="header-buttons"
        >
          <span
            id="litte-logo"
            className={`little-logo henny ${dark ? "dark" : ""}`}
          >
            Quizzical
          </span>
        </div>
        <span
          style={{
            color: dark ? "#aca7c8" : "#191632",
            fontWeight: "700",
            fontSize: "1.75rem",
            paddingBottom: ".5rem",
            zIndex: "1",
          }}
        >
          Choose Difficulty:
        </span>
      </div>
      <Button
        color="violet"
        content="Easy"
        onClick={handleDifficulty}
        value="easy"
        toggle
        className={difficulty === "easy" ? "" : "alpha"}
        style={{ width: "20rem", marginBottom: "1rem" }}
        size="huge"
      />
      <Button
        color="purple"
        content="Medium"
        onClick={handleDifficulty}
        value="medium"
        toggle
        className={difficulty === "medium" ? "" : "alpha"}
        style={{ width: "20rem", marginBottom: "1rem" }}
        size="huge"
      />
      <Button
        color="pink"
        content="Hard"
        onClick={handleDifficulty}
        value="hard"
        toggle
        className={difficulty === "hard" ? "" : "alpha"}
        style={{ width: "20rem" }}
        size="huge"
      />
      <ButtonGroup
        style={{
          width: "95%",
          maxWidth: "25rem",
          position: "absolute",
          bottom: "0",
        }}
      >
        <Button
          color="violet"
          style={{
            margin: "0 0 1rem 0",
            zIndex: "1",
          }}
          basic={dark ? true : false}
          icon="setting"
          inverted
          type="button"
          onClick={handleSettings}
          size="large"
        />
        <Button
          onClick={prevPage}
          color="violet"
          style={{
            margin: "0 0 1rem 0",
            zIndex: "1",
          }}
          basic={dark ? true : false}
          inverted
          type="button"
          size="big"
        >
          <Icon name="left arrow" />
          Back
        </Button>
        <Button
          onClick={nextPage}
          color="violet"
          style={{
            margin: "0 0 1rem 0",
            zIndex: "1",
          }}
          basic={dark ? true : false}
          inverted
          type="button"
          size="big"
        >
          Next
          <Icon name="right arrow" />
        </Button>
      </ButtonGroup>
    </div>
  );
}
