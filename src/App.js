//// Main Quizzical App ////
// Created by Rimezin 2022 //

import React from "react";

// Assets //
import Modal from "./assets/Modal";

// Custom Hooks //
import useStickyState from "./hooks/useStickyState";

// Sounds //
import useSound from "use-sound";
import pleasantPorridge from "./sounds/pleasant-porridge.mp3";
import click from "./sounds/click.wav";
import button from "./sounds/button.wav";
import buttonNo from "./sounds/button-no.wav";
import confirm from "./sounds/confirm.wav";
import correct from "./sounds/correct.wav";
import countdown from "./sounds/countdown.wav";
import losegame from "./sounds/losegame.wav";
import shutter from "./sounds/shutter.wav";
import wingame from "./sounds/wingame.wav";
import wrong from "./sounds/wrong.wav";
import toggle from "./sounds/toggle.wav";

// Pages //
import Quiz from "./pages/Quiz";
import Splash from "./pages/Splash";
import Category from "./pages/Category";
import Difficulty from "./pages/Difficulty";

import { Button, ButtonGroup } from "semantic-ui-react";

// Main Function Start //
export default function App() {
  ///////////////////
  //// Dark Mode ////
  const [dark, setDark] = useStickyState(false, "quizzical-dark");
  function handleDark() {
    handleSound("toggle");
    setDark(!dark);
  }

  ///////////////
  //// Music ////
  const [musicPlaying, setMusicPlaying] = useStickyState(
    true,
    "quizzical-musicPlaying"
  );
  const [playMusic, { pause }] = useSound(pleasantPorridge, {
    loop: true,
    autoplay: musicPlaying,
    volume: 0.5,
  });

  function handleMusic() {
    handleSound("toggle");
    setMusicPlaying(!musicPlaying);
    if (!musicPlaying) {
      playMusic();
    } else {
      pause();
    }
  }

  // Simulate Click to start Music //
  React.useEffect(() => {
    document.getElementById("quizzical-app").click();

    console.log(process.env.REACT_APP_API_KEY);
  });

  ////////////////
  //// Sounds ////
  const [playClick] = useSound(click, { volume: "0.25" });
  const [playButton] = useSound(button, { volume: "0.5" });
  const [playButtonNo] = useSound(buttonNo, { volume: "0.5" });
  const [playShutter] = useSound(shutter, { volume: "0.5" });
  const [playConfirm] = useSound(confirm);
  const [playCorrect] = useSound(correct, { volume: "0.5" });
  const [playCountdown] = useSound(countdown);
  const [playLoseGame] = useSound(losegame, { volume: "0.5" });
  const [playWinGame] = useSound(wingame, { volume: "0.5" });
  const [playWrong] = useSound(wrong, { volume: "0.5" });
  const [playToggle] = useSound(toggle, { volume: "0.20" });

  const [muteSound, setMuteSound] = useStickyState(
    false,
    "quizzical-muteSound"
  );

  // Switch Function to play sounds //
  function handleSound(sound) {
    if (!muteSound) {
      switch (sound) {
        case "click":
          playClick();
          break;
        case "button":
          playButton();
          break;
        case "buttonNo":
          playButtonNo();
          break;
        case "shutter":
          playShutter();
          break;
        case "confirm":
          playConfirm();
          break;
        case "correct":
          playCorrect();
          break;
        case "countdown":
          playCountdown();
          break;
        case "loseGame":
          playLoseGame();
          break;
        case "winGame":
          playWinGame();
          break;
        case "wrong":
          playWrong();
          break;
        case "toggle":
          playToggle();
          break;
        default:
          return;
      }
    }
  }

  // Handle Sound muting //
  function handleSoundMute() {
    setMuteSound(!muteSound);
    handleSound("toggle");
  }

  /////////////////////////
  //// State for modal ////
  const [modal, setModal] = React.useState({
    show: false,
    icon: "question circle",
    title: "Modal Title",
    content: "Some words",
    buttons: {
      okLabel: "Sounds good!",
      okAction: null,
      cancelLabel: null,
      cancelAction: null,
    },
  });

  // Separate state for settings modal //
  const [settings, setSettings] = React.useState(false);
  function handleSettings() {
    handleSound("shutter");
    setSettings(!settings);
  }

  /////////////////////////////////
  //// GAME STATES & FUNCTIONS ////
  // Pages //
  const [page, setPage] = React.useState(0);
  /**
   * 0 - Splash
   * 1 - Difficulty
   * 2 - Category
   * 3 - Quiz
   */

  function nextPage(event) {
    event.preventDefault();
    handleSound("button");
    setPage((page) => page + 1);
  }
  function prevPage(event) {
    event.preventDefault();
    handleSound("button");
    setPage((page) => page - 1);
  }

  // Difficulty & Category //
  const [difficulty, setDifficulty] = React.useState("easy");
  const [category, setCategory] = React.useState("");

  function chooseDifficulty(value) {
    setDifficulty(value.toLowerCase());
  }
  function chooseCategory(value) {
    setCategory(value);
  }

  /////////////////////////////////////////
  ////////// APP RENDERING ////////////////
  /////////////////////////////////////////

  return (
    <div id="quizzical-app" className={dark ? "body body-dark" : "body"}>
      <Modal
        modal={modal}
        setModal={setModal}
        dark={dark}
        handleSound={handleSound}
      />
      {/* Top Bar */}
      <div
        className={`topBar ${!settings ? "slide" : ""}`}
        style={{ backgroundColor: dark ? "#35304f" : "#dad8e7" }}
      >
        <ButtonGroup>
          <Button
            type="button"
            color={dark ? "grey" : "violet"}
            onClick={handleDark}
            icon={dark ? "sun" : "moon"}
            content={dark ? "Light" : "Dark"}
            inverted
          />
          <Button
            id="music-button"
            type="button"
            onClick={handleMusic}
            icon={musicPlaying ? "music" : "dont"}
            color={dark ? "grey" : "violet"}
            content="Music"
            inverted={true}
            style={{ transition: ".75s" }}
          />
          <Button
            id="music-button"
            type="button"
            onClick={handleSoundMute}
            icon={!muteSound ? "volume up" : "volume off"}
            color={dark ? "grey" : "violet"}
            inverted={true}
            content="Sounds"
          />
        </ButtonGroup>
        <br />
        <div
          style={{ width: "100%", cursor: "pointer" }}
          onClick={handleSettings}
        >
          <i className="ellipsis horizontal violet inverted icon icon-button"></i>
        </div>
      </div>

      {/* Splash - Page 0 */}
      {page === 0 && (
        <Splash
          // clickStart={clickStart}
          nextPage={nextPage}
          prevPage={prevPage}
          dark={dark}
          setModal={setModal}
          handleSound={handleSound}
          handleSettings={handleSettings}
        />
      )}

      {/* Difficulty - Page 1 */}
      {page === 1 && (
        <Difficulty
          nextPage={nextPage}
          prevPage={prevPage}
          dark={dark}
          setModal={setModal}
          handleSound={handleSound}
          handleSettings={handleSettings}
          //
          difficulty={difficulty}
          chooseDifficulty={chooseDifficulty}
        />
      )}

      {/* Category - Page 2 */}
      {page === 2 && (
        <Category
          nextPage={nextPage}
          prevPage={prevPage}
          dark={dark}
          setModal={setModal}
          handleSound={handleSound}
          handleSettings={handleSettings}
          //
          category={category}
          chooseCategory={chooseCategory}
        />
      )}

      {/* Quiz - Page 3 */}
      {page === 3 && (
        <Quiz
          // setStartQuiz={setStartQuiz}
          prevPage={prevPage}
          setPage={setPage}
          dark={dark}
          setModal={setModal}
          handleSound={handleSound}
          settings={settings}
          handleSettings={handleSettings}
          //
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          //
          category={category}
          setCategory={setCategory}
        />
      )}
    </div>
  );
}
