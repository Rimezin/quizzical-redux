import axios from "axios";
import React from "react";
import { DarkMode } from "../App";
import { ButtonGroup, Button, Form } from "semantic-ui-react";
import useGoogleSheets from "use-google-sheets";
import { Util } from "../util";

export default function Scoreboard(props) {
  const { scoreboard, handleScoreboard, handleSettings, handleSound } = props;
  const dark = React.useContext(DarkMode);
  const [disable, setDisable] = React.useState(false);

  // Get Data //
  const { data, loading, error, refetch } = useGoogleSheets({
    apiKey: process.env.REACT_APP_API_KEY,
    sheetId: process.env.REACT_APP_DB_ID,
  });

  // Handle Form Data //
  const [formData, setFormData] = React.useState({
    name: "",
    score: scoreboard.score,
    date: Util.date.getFormattedDate(),
    difficulty: scoreboard.difficulty,
  });

  function handleChange(event) {
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      name: value,
    }));
  }

  // Handle Post //
  function handleSubmit(event) {
    event.preventDefault();
    handleSound("confirm");
    axios
      .post(
        `${process.env.REACT_APP_DB_URL}${process.env.REACT_APP_DB_KEY}`,
        formData
      )
      .then((response) => {
        console.log(`API RESPONSE | POST: ${JSON.stringify(response.data)}`);
        setDisable(true);
        refetch();
      });
  }

  // Sort fetched data //
  function sortData() {
    const sortedData = data[0].data.sort((a, b) =>
      parseInt(a.score) < parseInt(b.score) ? 1 : -1
    );
    return sortedData;
  }

  // Render scores as JSX //
  let renderScores;
  if (!loading) {
    let sortedData = sortData();
    const arraySize = sortedData.length < 10 ? sortedData.length : 10;
    sortedData = sortedData.slice(0, arraySize);

    renderScores = sortedData.map((scoreItem) => {
      return (
        <li
          key={sortedData.indexOf(scoreItem)}
          className={`score-item ${dark ? "bg-dark dark" : "bg-light"}`}
        >
          {scoreItem.name} - {scoreItem.score} - {scoreItem.difficulty} -{" "}
          {scoreItem.date}
        </li>
      );
    });
  }

  function handleRefetch() {
    handleSound("button");
    refetch();
  }

  //// MAIN RENDER ////
  return (
    <div
      className={`quizzical-container ${
        dark ? "quizzical-container-dark" : ""
      } quizzical-container-big`}
    >
      <div style={{ display: "flex" }} id="header-buttons">
        <span
          id="litte-logo"
          className={`little-logo henny ${dark ? "dark" : ""}`}
        >
          Quizzical
        </span>
        <ButtonGroup style={{ margin: "1rem" }}>
          <Button
            color="violet"
            basic={dark ? true : false}
            style={{ fontWeight: "700", maxWidth: "3rem" }}
            icon="setting"
            inverted
            type="button"
            onClick={handleSettings}
          />
          <Button
            content={scoreboard.postable ? "New Game" : "Back"}
            color="violet"
            icon={scoreboard.postable ? "star" : "left arrow"}
            inverted={dark ? true : false}
            onClick={() => handleScoreboard(false)}
          />
          <Button
            type="button"
            content="Refresh Scores"
            color="blue"
            icon="cloud download"
            inverted={dark ? true : false}
            onClick={handleRefetch}
          />
        </ButtonGroup>
      </div>
      {scoreboard.postable && (
        <Form
          onSubmit={handleSubmit}
          className={`post-score ${disable ? "disabled" : null}`}
          style={{ maxWidth: "fit-content" }}
        >
          <h3 className={dark ? "dark" : null}>
            Score: {scoreboard.score} {scoreboard.difficulty}
          </h3>
          <h4 className={dark ? "dark" : null}>
            Date: {Util.date.getFormattedDate()}
          </h4>
          <Form.Field>
            <label className={dark ? "dark" : null}>Initials</label>
            <input
              placeholder="AAA"
              onChange={handleChange}
              value={formData.name}
              maxLength="3"
              className={dark ? "bg-dark dark" : null}
              style={{
                textTransform: "uppercase",
                width: "8rem",
                fontSize: "1.75rem",
                textAlign: "center",
                borderRadius: "1.75rem",
              }}
            />
          </Form.Field>
          <Button
            type="submit"
            inverted
            color="blue"
            icon="send"
            content="Post Score"
          />
        </Form>
      )}

      <div
        style={{
          margin: "1rem 2rem .5rem 2rem",
          overflowY: "auto",
        }}
      >
        <h3 className={dark ? "dark" : null}>Top Scores:</h3>
        {loading && (
          <div className={dark ? "dark" : null}>Loading, please wait...</div>
        )}
        {data.length > 0 && (
          <ol style={{ paddingLeft: "0px" }}>{renderScores}</ol>
        )}
        {error && <div>{error}</div>}
      </div>
    </div>
  );
}
