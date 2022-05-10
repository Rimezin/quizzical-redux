import React from "react";

export default function Timer(props) {
  const { seconds, setSeconds, dark, checked, handleSound } = props;

  React.useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0 && !checked) {
        setSeconds(seconds - 1);
        if (seconds === 4) {
          handleSound("countdown");
        }
      } else if (seconds === 0) {
        clearInterval(myInterval);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  function timerColor() {
    if (seconds > 10) {
      if (dark) {
        return "#aca7c8";
      } else {
        return "darkslateblue";
      }
    } else {
      return "red";
    }
  }

  return (
    <div>
      <i className={`big icons`}>
        {seconds > 0 && !checked && (
          <i
            className={`spinner loading icon`}
            style={{ color: timerColor() }}
          ></i>
        )}
        <i
          className="clock outline icon"
          style={{
            paddingRight: "4px",
            color: timerColor(),
          }}
        ></i>
      </i>
      <label
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          verticalAlign: "middle",
          paddingLeft: "0.25rem",
          color: timerColor(),
        }}
      >
        {seconds > 0 ? seconds : "Time's up!"}
      </label>
    </div>
  );
}
