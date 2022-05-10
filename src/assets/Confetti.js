import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default function Party() {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={width}
      height={height}
      initialVelocityY={{ min: -10, max: -4 }}
      gravity={0.07}
    />
  );
}
