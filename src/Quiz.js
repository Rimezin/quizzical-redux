import React from "react";
import QuestionRedux from "./QuestionRedux";
import { nanoid } from "nanoid";
import he from "he";
import { Button, ButtonGroup } from "semantic-ui-react";
import Score from "./Score";

export default function Quiz(props) {
  const {
    difficulty,
    category,
    setStartQuiz,
    dark,
    setDifficulty,
    setCategory,
    setModal,
    handleSound,
    handleSettings,
    settings,
  } = props;

  const [questions, setQuestions] = React.useState([]);
  // const [questionsValid, setQuestionsValid] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [stage, setStage] = React.useState(0);

  // This shuffle array function from coolaj86 on Stack Overflow.
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  // Main effect used to gather the questions.
  React.useEffect(() => {
    function getAnswers(questionObj) {
      let correctAnswer = [questionObj.correct_answer];
      let allAnswers = questionObj.incorrect_answers;
      allAnswers = allAnswers.concat(correctAnswer);
      allAnswers = shuffle(allAnswers);

      return allAnswers;
    }

    let getCategory = category === "any" ? "" : `&category=${category}`;

    const apiUrl = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple${getCategory}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) =>
        setQuestions(
          data.results.map((questionObj) => ({
            ...questionObj,
            isAnswered: false,
            isCorrect: false,
            questionId: nanoid(),
            question: he.decode(questionObj.question),
            answers: getAnswers(questionObj).map((answer) => ({
              answerId: nanoid(),
              answerLabel: he.decode(answer),
              isChecked: false,
              isCorrect: answer === questionObj.correct_answer ? true : false,
            })),
          }))
        )
      );
    // console.log(questions);
    // if (questions[0].length() > 1) {
    //   setQuestionsValid(true);
    // }
  }, [difficulty, category]);

  // Function for setting answers checked, returns new answers object array.
  /* Params:
   * question object in the state's array
   * the questionId containing the clicked answer.
   * the answerId of the clicked answer.
   */
  function setChecked(questionObj, questId, aid) {
    return questionObj.answers.map((answer) => {
      // If the answer selected is equal to this item in the array, set true //
      if (questionObj.questionId === questId) {
        return {
          ...answer,
          isChecked: aid === answer.answerId ? true : false,
        };
      } else {
        return { ...answer };
      }
    });
  }

  // Function for checking if the selected answer is correct. Returns boolean
  function scoreQuestion(questionObj) {
    let myScore = false;
    if (questionObj.isAnswered) {
      for (let i = 0; i < questionObj.answers.length; i++) {
        let ans = questionObj.answers[i];
        if (
          ans.isChecked &&
          ans.answerLabel === he.decode(questionObj.correct_answer)
        ) {
          myScore = true;
        }
      }
    }

    return myScore;
  }

  // Function for handling onChange, returns new array of question objects
  function handleChange(event) {
    /* Bring in variables from event.target:
     * - the answerId of the clicked answer
     * - the questionId of the question, held in name.
     */
    const { id, name } = event.target;

    setQuestions((prevQuestions) =>
      prevQuestions.map((quest) => {
        let newQuestion = { ...quest };
        // Set new answers array, pass the id that was checked //
        newQuestion.answers = setChecked(newQuestion, name, id);

        // If the selected item was in this question in the array, set isAnswered to true.//
        newQuestion.isAnswered =
          name === newQuestion.questionId ? true : newQuestion.isAnswered;

        // Figure out if question was answered correctly //
        newQuestion.isCorrect = scoreQuestion(newQuestion);
        return newQuestion;
      })
    );
  }

  function handleTimeExpire(name, id) {
    setQuestions((prevQuestions) =>
      prevQuestions.map((quest) => {
        let newQuestion = { ...quest };
        // Set new answers array, pass the id that was checked //
        newQuestion.answers = setChecked(newQuestion, name, id);

        // If the selected item was in this question in the array, set isAnswered to true.//
        newQuestion.isAnswered =
          name === newQuestion.questionId ? true : newQuestion.isAnswered;

        // Figure out if question was answered correctly //
        newQuestion.isCorrect = false;
        return newQuestion;
      })
    );
  }

  function handleReset(isModal) {
    if (isModal) {
      setModal((modal) => ({
        ...modal,
        show: false,
      }));
    }
    setDifficulty("easy");
    setCategory("");
    setSubmitted(false);
    setScore(0);
    setStage(0);
    setStartQuiz(false);
  }

  function handleFinishReset() {
    handleSound("confirm");
    handleReset();
  }

  const renderQuestions = questions.map((question) => {
    return (
      <QuestionRedux
        key={question.questionId}
        question={question}
        handleChange={handleChange}
        submitted={submitted}
        dark={dark}
        score={score}
        handleReset={handleReset}
        setStage={setStage}
        setScore={setScore}
        difficulty={difficulty}
        handleTimeExpire={handleTimeExpire}
        setModal={setModal}
        handleSound={handleSound}
        settings={settings}
        handleSettings={handleSettings}
      />
    );
  });

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
          {stage < 10 && (
            <Button
              color="violet"
              content={`Score: ${score} of ${stage + 1}`}
              inverted={dark ? true : false}
              disabled
            />
          )}
          {stage < 10 && (
            <Button
              color="purple"
              inverted={dark ? true : false}
              content={difficulty}
              disabled
            />
          )}
        </ButtonGroup>
      </div>
      {/* <Divider /> */}
      {stage < 10 && (
        <div id="questions-container">{renderQuestions[stage]}</div>
      )}
      {/* {!questionsValid && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span>
            Unfortunately, there are no questions in the Open Trivia Database
            for the category you selected.
          </span>
          <Button
            color="violet"
            inverted={dark ? true : false}
            onClick={handleFinishReset}
            content="New Game"
            style={{ width: "18rem" }}
            icon="star"
            size="huge"
          />
        </div>
      )} */}

      {stage === 10 && (
        <div className="quizzical-container-finish">
          <Score
            score={score}
            difficulty={difficulty}
            category={category}
            dark={dark}
            handleSound={handleSound}
          />
          <Button
            color="violet"
            inverted={dark ? true : false}
            onClick={handleFinishReset}
            content="New Game"
            style={{ width: "18rem" }}
            icon="star"
            size="huge"
          />
        </div>
      )}
    </div>
  );
}