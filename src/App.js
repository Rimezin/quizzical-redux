import React from "react";
import Quiz from "./Quiz";
import Splash from "./Splash";

export default function App() {
  const [startQuiz, setStartQuiz] = React.useState(false);
  const [difficulty, setDifficulty] = React.useState("easy");
  const [category, setCategory] = React.useState("");
  const [dark, setDark] = React.useState(false);

  function clickStart(event) {
    event.preventDefault();
    setStartQuiz((startQuiz) => !startQuiz);
  }

  function chooseDifficulty(value) {
    setDifficulty(value.toLowerCase());
    // setDifficulty(event.target.value.toLowerCase());
  }
  function chooseCategory(e, data) {
    setCategory(data.value);
  }

  function handleDark(event) {
    event.preventDefault();
    setDark(!dark);
  }

  // // APP INSTALLER //
  // // Initialize deferredPrompt for use later to show browser install prompt.
  // let deferredPrompt;

  // window.addEventListener("beforeinstallprompt", (e) => {
  //   // Prevent the mini-infobar from appearing on mobile
  //   e.preventDefault();
  //   // Stash the event so it can be triggered later.
  //   deferredPrompt = e;
  //   // Update UI notify the user they can install the PWA
  //   // showInstallPromotion();
  //   // Optionally, send analytics event that PWA install promo was shown.
  //   console.log(`'beforeinstallprompt' event was fired.`);
  // });

  return (
    <div className={dark ? "body body-dark" : "body"}>
      {!startQuiz && (
        <Splash
          clickStart={clickStart}
          chooseDifficulty={chooseDifficulty}
          chooseCategory={chooseCategory}
          dark={dark}
          handleDark={handleDark}
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
        />
      )}
    </div>
  );
}
