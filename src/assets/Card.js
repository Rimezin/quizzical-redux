import React from "react";
import { Icon } from "semantic-ui-react";
import { DarkMode } from "../App";

export default function Card(props) {
  // value={category.value}
  // icon={category.icon}
  // clickAction={categoryClick}
  // key={category.key}
  // text={category.text}
  const { value, icon, action, text, category } = props;
  const dark = React.useContext(DarkMode);

  return (
    <div
      className={`category-card ${
        category === value ? "category-selected" : ""
      } ${dark ? "dark bg-dark" : null}`}
      onClick={() => action(value)}
      value={value}
    >
      <span>{text}</span>
      <Icon
        name={icon}
        style={{
          fontSize: "3rem",
          margin: "auto auto 0rem auto",
        }}
        className={`${category === value ? "icon-selected" : ""} ${
          dark ? "dark-icon" : null
        }`}
      />
    </div>
  );
}
