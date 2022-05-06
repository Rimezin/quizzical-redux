import React from "react";
import { Button } from "semantic-ui-react";

export default function Toggle(props) {
  const { dark, handleDark } = props;

  return (
    <Button
      basic
      floated="left"
      // style={{ margin: "10px" }}
      color={dark ? "grey" : "violet"}
      // className="toggle"
      onClick={handleDark}
      icon={dark ? "sun" : "moon"}
    />
  );
}
