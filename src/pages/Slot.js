import Spinner from "../components/Spinner";
import React, { useState, useRef, forceUpdateHandler, forwardRef } from "react";
import RepeatButton from "../components/RepeatBtn";

const Slot = () => {
  const [winner, setWinner] = useState(null);
  const _child1 = useRef(null);
  const _child2 = useRef(null);
  const _child3 = useRef(null);

  const handleClick = () => {
    setWinner(null);
    _child1.forceUpdateHandler();
    _child2.forceUpdateHandler();
    _child3.forceUpdateHandler();
  };

  const loser = [
    "Not quite",
    "Stop gambling",
    "Hey, you lost!",
    "Ouch! I felt that",
    "Don't beat yourself up",
    "There goes the college fund",
    "I have a cat. You have a loss",
    "You're awesome at losing",
    "Coding is hard",
    "Don't hate the coder",
  ];

  let matches = [];

  const finishHandler = (value) => {
    matches.push(value);

    if (matches.length === 3) {
      const first = matches[0];
      let results = matches.every((match) => match === first);
      setWinner(results);
    }
  };

  const emptyArray = () => {
    matches = [];
  };

  const getLoser = () => {
    return loser[Math.floor(Math.random() * Slot.loser.length)];
  };
  let repeatButton = null;
  let winningSound = null;

  if (winner !== null) {
    repeatButton = <RepeatButton onClick={handleClick} />;
  }

  if (winner) {
    winningSound = "hui";
  }

  return (
    <div>
      {winningSound}
      <h1 style={{ color: "white" }}>
        <span>
          {winner === null
            ? "Waiting…"
            : winner
            ? "🤑 Pure skill! 🤑"
            : getLoser()}
        </span>
      </h1>

      <div className={`spinner-container`}>
        <Spinner onFinish={finishHandler} ref={_child1} timer="1000" />
        <Spinner onFinish={finishHandler} ref={_child2} timer="1400" />
        <Spinner onFinish={finishHandler} ref={_child3} timer="2200" />
        <div className="gradient-fade"></div>
      </div>
      {repeatButton}
    </div>
  );
};
export default Slot;
