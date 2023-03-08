import React from "react";
import { Button, ButtonGroup, Flag } from "semantic-ui-react";
import { DarkMode } from "../App";
import { modalConfig, svgData } from "../config";
import { Util } from "../util";

export default function Splash(props) {
  const { nextPage, setModal, handleSound, handleSettings, handleScoreboard } =
    props;
  const dark = React.useContext(DarkMode);

  //// Instructions Modal ////
  function handleInstructions() {
    handleSound("button");
    setModal(modalConfig.howToPlay);
  }

  //// Credits Modal ////
  function handleCredits() {
    handleSound("button");
    setModal(modalConfig.credits);
  }

  //// Install App Modal ////
  function installApp() {
    handleSound("button");
    setModal(modalConfig.installApp);
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
          d={svgData.blob1}
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
          d={svgData.blob2}
          transform="translate(100 100)"
        />
      </svg>

      <h1 className={dark ? "dark" : ""} style={{ zIndex: "1" }}>
        Quizzical
      </h1>
      <Button
        onClick={nextPage}
        color="violet"
        style={{
          width: "19rem",
          backgroundColor: dark ? "#191632" : "#6435c9",
          color: dark ? "#aca7c8" : "white",
          margin: "0 0 1rem 0",
          zIndex: "1",
        }}
        size="huge"
        animated="fade"
      >
        <Button.Content hidden>Let's get quizzical!</Button.Content>
        <Button.Content visible>Start Game</Button.Content>
      </Button>
      <ButtonGroup style={{ width: "19rem", zIndex: "1" }}>
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
          color="green"
          basic={dark ? true : false}
          style={{ fontWeight: "700" }}
          icon="share alternate"
          inverted
          type="button"
          onClick={Util.handleShare}
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
      <Button
        color="purple"
        inverted
        onClick={() => handleScoreboard(true, 0, false)}
        content="Scoreboard"
        style={{
          width: "19rem",
          margin: "1rem 0 1rem 0",
          zIndex: "1",
        }}
        icon="users"
      />
      <span
        className={dark ? "small-text small-text-dark" : "small-text"}
        style={{ zIndex: "1" }}
      >
        Proud supporter of Ukraine&nbsp;
        <Flag name="ua" />
        <br />
        <br />
        v4.9
      </span>
    </form>
  );
}
