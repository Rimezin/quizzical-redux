import React from "react";
import { Button } from "semantic-ui-react";

export default function Toggle(props) {
  const { dark, handleDark } = props;

  return (
    <Button
      inverted
      style={{ maxWidth: "3rem" }}
      color={dark ? "grey" : "violet"}
      onClick={handleDark}
      icon={dark ? "sun" : "moon"}
    />
  );
}
