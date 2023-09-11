import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const [message, setMessage] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const [colorCounts, setColorCounts] = useState({
    green: 0,
    goldenrod: 0,
    red: 0
  });
  const [totalQuestions, setTotalQuestions] = useState(0);

  const handleReset = () => {
    setMessage("Think of a Question");
    setColor("black");
    setColorCounts({
      green: 0,
      goldenrod: 0,
      red: 0
    });
    setTotalQuestions(0);
  };

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[randomIndex];
    setMessage(msg);
    setColor(color);

    setColorCounts((prevColorCounts) => ({
      ...prevColorCounts,
      [color]: prevColorCounts[color] + 1
    }));

    setTotalQuestions((prevTotalQuestions) => prevTotalQuestions + 1);
  };

  return (
    <div className="epos">
      <div className={`eball eball-${color}`} onClick={handleClick}>
        <div className={`msg-circle msg-circle-${color}`}>{message}</div>
      </div>
      <button onClick={handleReset}>Reset</button>
      <div className="color-counts">
        <span>Green: {colorCounts.green}</span>
        <span>Goldenrod: {colorCounts.goldenrod}</span>
        <span>Red: {colorCounts.red}</span>
      </div>
      <div className="total-questions">
        This is how many times you've asked your question: {totalQuestions}
      </div>
    </div>
  );
};

export default EightBall;
