import React from "react";
import Confetti from "react-confetti";
import useWindowSize from "../hooks/useWindowSize";

export default function Party() {
  const [win] = useWindowSize();
  return (
    <Confetti
      width={win.width}
      height={win.height}
      initialVelocityY={{ min: -10, max: -4 }}
      gravity={0.07}
    />
  );
}
