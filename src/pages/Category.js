import React from "react";
import { Button, ButtonGroup, Icon } from "semantic-ui-react";
import Card from "../assets/Card";

export default function Category(props) {
  const {
    // clickStart,
    prevPage,
    nextPage,
    dark,
    // setModal,
    handleSound,
    handleSettings,
    category,
    chooseCategory,
  } = props;

  const categories = [
    {
      value: "any",
      icon: "question circle",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "any",
      text: "Any Category",
    },
    {
      value: "27",
      icon: "sticker mule",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "27",
      text: "Animals",
    },
    {
      value: "25",
      icon: "paint brush",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "25",
      text: "Art",
    },
    {
      value: "26",
      icon: "star",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "26",
      text: "Celebrities",
    },
    {
      value: "16",
      icon: "chess",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "16",
      text: "Board Games",
    },
    {
      value: "10",
      icon: "book",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "10",
      text: "Books",
    },
    {
      value: "32",
      icon: "smile",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "32",
      text: "Cartoons & Animation",
    },
    {
      value: "29",
      icon: "newspaper",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "29",
      text: "Comics",
    },
    {
      value: "11",
      icon: "film",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "11",
      text: "Movies & Film",
    },
    {
      value: "31",
      icon: "certificate",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "31",
      text: "Anime & Manga",
    },
    {
      value: "12",
      icon: "music",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "12",
      text: "Music",
    },
    {
      value: "13",
      icon: "podcast",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "13",
      text: "Musicals & Theatres",
    },
    {
      value: "14",
      icon: "tv",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "14",
      text: "Television",
    },
    {
      value: "15",
      icon: "gamepad",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "15",
      text: "Video Games",
    },
    {
      value: "9",
      icon: "cloud",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "9",
      text: "General Knowledge",
    },
    {
      value: "22",
      icon: "tree",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "22",
      text: "Geography",
    },
    {
      value: "23",
      icon: "globe",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "23",
      text: "History",
    },
    {
      value: "20",
      icon: "bug",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "20",
      text: "Mythology",
    },
    {
      value: "24",
      icon: "bullhorn",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "24",
      text: "Politics",
    },
    {
      value: "17",
      icon: "rocket",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "17",
      text: "Science & Nature",
    },
    {
      value: "18",
      icon: "laptop",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "18",
      text: "Computers",
    },
    {
      value: "30",
      icon: "headphones",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "30",
      text: "Gadgets",
    },
    {
      value: "19",
      icon: "calculator",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "19",
      text: "Math",
    },
    {
      value: "21",
      icon: "football ball",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "21",
      text: "Sports",
    },
    {
      value: "28",
      icon: "truck",
      onClick: (e, d) => {
        chooseCategory(e, d);
      },
      key: "28",
      text: "Vehicles",
    },
  ];

  function categoryClick(value) {
    handleSound("click");
    chooseCategory(value);
  }

  const renderCategories = categories.map((cat) => {
    return (
      <Card
        value={cat.value}
        icon={cat.icon}
        action={categoryClick}
        key={cat.key}
        text={cat.text}
        category={category}
        dark={dark}
      />
    );
  });

  return (
    <div
      className={`quizzical-container quizzical-container-condensed center ${
        dark ? "quizzical-container-dark" : ""
      }`}
    >
      <div style={{ position: "absolute", top: "0" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "inherit",
            marginBottom: "3rem",
          }}
          id="header-buttons"
        >
          <span
            id="litte-logo"
            className={`little-logo henny ${dark ? "dark" : ""}`}
          >
            Quizzical
          </span>
        </div>
        <span
          style={{
            color: dark ? "#aca7c8" : "#191632",
            fontWeight: "700",
            fontSize: "1.75rem",
            paddingBottom: ".5rem",
            zIndex: "1",
          }}
        >
          Select Category:
        </span>
      </div>

      {/* Cards */}
      <div className="categories-container">{renderCategories}</div>

      {/* Footer */}
      <ButtonGroup
        style={{
          width: "95%",
          maxWidth: "25rem",
          position: "absolute",
          bottom: "0",
        }}
      >
        <Button
          color="violet"
          style={{
            margin: "0 0 1rem 0",
            zIndex: "1",
          }}
          basic={dark ? true : false}
          icon="setting"
          inverted
          type="button"
          onClick={handleSettings}
          size="large"
        />
        <Button
          onClick={prevPage}
          color="violet"
          style={{
            margin: "0 0 1rem 0",
            zIndex: "1",
          }}
          basic={dark ? true : false}
          inverted
          type="button"
          size="big"
        >
          <Icon name="left arrow" />
          Back
        </Button>
        <Button
          onClick={nextPage}
          color="green"
          style={{
            margin: "0 0 1rem 0",
            zIndex: "1",
          }}
          basic={dark ? true : false}
          inverted
          type="button"
          size="big"
        >
          <Icon name="flag" />
          Start!
        </Button>
      </ButtonGroup>
    </div>
  );
}
