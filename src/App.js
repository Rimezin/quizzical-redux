import React from "react";
import Modal from "./Modal";
import Quiz from "./Quiz";
import Splash from "./Splash";

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

import { Button, ButtonGroup } from "semantic-ui-react";

// Main Function Start //
export default function App() {
  const [startQuiz, setStartQuiz] = React.useState(false);
  const [difficulty, setDifficulty] = React.useState("easy");
  const [category, setCategory] = React.useState("");
  const [dark, setDark] = React.useState(false);
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

  // Sounds //
  const [musicPlaying, setMusicPlaying] = React.useState(true);
  const [playMusic, { pause }] = useSound(pleasantPorridge, {
    // Music props //
    loop: true,
    autoplay: true,
    volume: 0.5,
  });
  const [playClick] = useSound(click, { volume: "0.25" });
  const [playButton] = useSound(button);
  const [playButtonNo] = useSound(buttonNo);
  const [playShutter] = useSound(shutter, { volume: "0.5" });
  const [playConfirm] = useSound(confirm);
  const [playCorrect] = useSound(correct);
  const [playCountdown] = useSound(countdown);
  const [playLoseGame] = useSound(losegame);
  const [playWinGame] = useSound(wingame);
  const [playWrong] = useSound(wrong);
  const [playToggle] = useSound(toggle, { volume: "0.20" });

  const [muteSound, setMuteSound] = React.useState(false);

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
  });

  //// GAME FUNCTIONS ////

  function clickStart(event) {
    event.preventDefault();
    handleSound("button");
    setStartQuiz((startQuiz) => !startQuiz);
  }

  function chooseDifficulty(value) {
    setDifficulty(value.toLowerCase());
  }
  function chooseCategory(e, data) {
    handleSound("click");
    setCategory(data.value);
  }

  function handleDark() {
    // event.preventDefault();
    handleSound("toggle");
    setDark(!dark);
  }

  // Handle Settings //
  function handleSettings() {
    handleSound("shutter");
    setSettings(!settings);
  }

  // APP INSTALLER //
  // let deferredPrompt;

  // window.addEventListener("beforeinstallprompt", (e) => {
  //   e.preventDefault();
  //   deferredPrompt = e;
  // });

  // async function installApp() {
  //   handleSound("click");
  //   if (deferredPrompt !== null && typeof deferredPrompt !== undefined) {
  //     deferredPrompt.prompt();
  //     const { outcome } = await deferredPrompt.userChoice;
  //     if (outcome === "accepted") {
  //       deferredPrompt = null;
  //     }
  //   }
  // }

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
            inverted="true"
            style={{ transition: ".75s" }}
          />
          <Button
            id="music-button"
            type="button"
            onClick={handleSoundMute}
            icon={!muteSound ? "volume up" : "volume off"}
            color={dark ? "grey" : "violet"}
            inverted="true"
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

      {/* Quiz */}
      {!startQuiz && (
        <Splash
          clickStart={clickStart}
          chooseDifficulty={chooseDifficulty}
          chooseCategory={chooseCategory}
          dark={dark}
          difficulty={difficulty}
          setModal={setModal}
          handleSound={handleSound}
          handleSettings={handleSettings}
        />
      )}
      {startQuiz && (
        <Quiz
          difficulty={difficulty}
          category={category}
          setStartQuiz={setStartQuiz}
          dark={dark}
          setDifficulty={setDifficulty}
          setCategory={setCategory}
          setModal={setModal}
          handleSound={handleSound}
          handleSettings={handleSettings}
          settings={settings}
        />
      )}
    </div>
  );
}
