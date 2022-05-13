import axios from "axios";
import React from "react";
// import { google, GoogleApis } from "googleapis";
import { ButtonGroup, Button, Form } from "semantic-ui-react";
// import { auth } from "google-auth-library";
import useGoogleSheets from "use-google-sheets";

export default function Scoreboard(props) {
  const { dark, scoreboard, handleScoreboard, handleSettings, handleSound } =
    props;
  const [disable, setDisable] = React.useState(false);

  // Get Data //
  const { data, loading, error, refetch } = useGoogleSheets({
    apiKey: process.env.REACT_APP_API_KEY,
    sheetId: process.env.REACT_APP_DB_ID,
  });

  // Determine Date //
  const date = () => {
    let date = new Date();
    date = `${
      date.getUTCMonth() + 1
    }/${date.getUTCDate()}/${date.getUTCFullYear()} - ${date.getUTCHours()}:${date.getUTCMinutes()} (UTC)`;
    return date;
  };

  // Handle Form Data //
  const [formData, setFormData] = React.useState({
    name: "",
    score: scoreboard.score,
    date: date,
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
          className={`score-item ${dark ? "bg-dark dark" : null}`}
        >
          {scoreItem.name} - {scoreItem.score} - {scoreItem.date}
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
            type="button"
            content="Refresh Scores"
            color="blue"
            icon="cloud download"
            inverted={dark ? true : false}
            onClick={handleRefetch}
          />
          <Button
            content="New Game"
            color="violet"
            icon="star"
            inverted={dark ? true : false}
            onClick={() => handleScoreboard(false)}
          />
        </ButtonGroup>
      </div>
      {/* {renderScores} */}
      {scoreboard.postable && (
        <Form
          onSubmit={handleSubmit}
          className={`post-score ${disable ? "disabled" : null}`}
          style={{ maxWidth: "fit-content" }}
        >
          <h3 className={dark ? "dark" : null}>Score: {scoreboard.score}</h3>
          <h4 className={dark ? "dark" : null}>Date: {date}</h4>
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
        {loading && <div>Loading, please wait...</div>}
        {data.length > 0 && <ol>{renderScores}</ol>}
        {error && <div>{error}</div>}
      </div>
    </div>
  );
}
