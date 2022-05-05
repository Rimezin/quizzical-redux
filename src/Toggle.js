import React from "react";
import { Button } from "semantic-ui-react";

export default function Toggle(props) {
  const { toggleText, dark, handleDark } = props;

  return (
    <Button
      basic
      floated="left"
      style={{ margin: "10px" }}
      color={dark ? "grey" : "violet"}
      className="toggle"
      onClick={handleDark}
    >
      {toggleText}
    </Button>
  );
}
