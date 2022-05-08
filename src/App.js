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

  // Sounds //
  const [musicPlaying, setMusicPlaying] = React.useState(false);
  const [playMusic, { pause }] = useSound(pleasantPorridge);
  const [playClick] = useSound(click);
  const [playButton] = useSound(button);
  const [playButtonNo] = useSound(buttonNo);
  const [playShutter] = useSound(shutter);
  const [playConfirm] = useSound(confirm);
  const [playCorrect] = useSound(correct);
  const [playCountdown] = useSound(countdown);
  const [playLoseGame] = useSound(losegame);
  const [playWinGame] = useSound(wingame);
  const [playWrong] = useSound(wrong);

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
      }
    }
  }

  // Handle Sound muting //
  function handleSoundMute() {
    setMuteSound(!muteSound);
  }

  function handleMusic() {
    handleSound("click");
    setMusicPlaying(!musicPlaying);
    if (!musicPlaying) {
      playMusic();
    } else {
      pause();
    }
  }

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

  function handleDark(event) {
    event.preventDefault();
    handleSound("shutter");
    setDark(!dark);
  }

  // APP INSTALLER //
  let deferredPrompt;

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
  });

  async function installApp() {
    handleSound("click");
    if (deferredPrompt !== null) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        deferredPrompt = null;
      }
    }
  }

  /////////////////////////////////////////
  ////////// APP RENDERING ////////////////
  /////////////////////////////////////////

  return (
    <div className={dark ? "body body-dark" : "body"}>
      <Modal
        modal={modal}
        setModal={setModal}
        dark={dark}
        handleSound={handleSound}
      />
      {!startQuiz && (
        <Splash
          clickStart={clickStart}
          chooseDifficulty={chooseDifficulty}
          chooseCategory={chooseCategory}
          dark={dark}
          handleDark={handleDark}
          difficulty={difficulty}
          installApp={installApp}
          modal={modal}
          setModal={setModal}
          musicPlaying={musicPlaying}
          handleMusic={handleMusic}
          handleSound={handleSound}
          handleSoundMute={handleSoundMute}
          muteSound={muteSound}
        />
      )}
      {startQuiz && (
        <Quiz
          difficulty={difficulty}
          category={category}
          setStartQuiz={setStartQuiz}
          dark={dark}
          handleDark={handleDark}
          setDifficulty={setDifficulty}
          setCategory={setCategory}
          setModal={setModal}
          musicPlaying={musicPlaying}
          handleMusic={handleMusic}
          handleSound={handleSound}
          handleSoundMute={handleSoundMute}
          muteSound={muteSound}
        />
      )}
    </div>
  );
}
