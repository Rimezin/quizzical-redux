import { Image, Icon } from "semantic-ui-react";
import installPC from "./pictures/install-pc.png";
import installMobile from "./pictures/install-mobile.png";

const modalConfig = {
  howToPlay: {
    show: true,
    icon: "question circle",
    title: "How To Play!",
    content: (
      <>
        <b>Welcome to quizzical!</b> The random internet trivia game you never
        knew you needed! Better think quick, because time keeps ticking and
        there's more knowledge to gain!
        <ol>
          <li>Click Start Game</li>
          <li>Select your difficulty</li>
          <li>Choose your category</li>
          <li>Click "Start!"</li>
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
  },

  credits: {
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
        additional functionality to the original design, ultimately the concept
        for this app is not my own and from that course. Anyone looking to learn
        React should seriously consider Bob's course, which was free and easy to
        follow. Otherwise, here's all who went into this:
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
  },

  installApp: {
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
            <Icon name="ellipsis vertical" />
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
  },
};

const svgData = {
  blob1:
    "M38.2,-46.1C48.7,-45,55.9,-32.7,54.2,-21.5C52.6,-10.2,42.1,0,37.4,11.5C32.7,22.9,33.9,35.5,28.6,47.6C23.3,59.6,11.7,71,-1.4,72.9C-14.4,74.8,-28.8,67.1,-33.2,54.8C-37.7,42.5,-32.2,25.6,-39.2,11.1C-46.2,-3.4,-65.7,-15.6,-70.9,-30.4C-76.2,-45.2,-67.2,-62.7,-53,-62.6C-38.8,-62.5,-19.4,-44.7,-2.8,-40.9C13.9,-37.1,27.7,-47.2,38.2,-46.1Z",
  blob2:
    "M22.9,-33.4C30.8,-25.7,39.1,-20.6,46.3,-11.9C53.5,-3.2,59.6,9.1,57.2,19.3C54.9,29.5,44.2,37.8,33.2,47.6C22.3,57.5,11.1,68.9,3,64.8C-5.2,60.7,-10.3,41,-24,32C-37.6,23.1,-59.7,24.8,-67.4,18C-75,11.1,-68.2,-4.4,-60.1,-16.5C-52,-28.6,-42.6,-37.2,-32.4,-44.1C-22.2,-51,-11.1,-56.2,-1.8,-53.7C7.5,-51.2,15,-41.1,22.9,-33.4Z",
};

export { modalConfig, svgData };
