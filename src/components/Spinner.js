import React, { useState, useEffect } from "react";
const Spinner = ({ timer, onFinish }) => {
  const [position, setPosition] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(null);
  const forceUpdateHandler = () => {
    reset();
  };

  const reset = () => {
    if (timer) {
      clearInterval(timer);
    }

    start = setStartPosition();

    setPosition(start);
    setTimeRemaining(timer);

    timer = setInterval(() => {
      tick();
    }, 100);
  };

  const state = {
    position: 0,
    lastPosition: null,
  };
  const iconHeight = 188;
  const multiplier = Math.floor(Math.random() * (4 - 1) + 1);

  const start = setStartPosition();
  const speed = iconHeight * multiplier;

  const setStartPosition = () => {
    return Math.floor(Math.random() * 9) * iconHeight * -1;
  };

  const moveBackground = () => {
    setPosition(position - speed);
    setTimeRemaining(timeRemaining - 100);
  };

  const getSymbolFromPosition = () => {
    const totalSymbols = 9;
    const maxPosition = iconHeight * (totalSymbols - 1) * -1;
    let moved = (timer / 100) * multiplier;
    let startPosition = start;
    let currentPosition = startPosition;

    for (let i = 0; i < moved; i++) {
      currentPosition -= iconHeight;

      if (currentPosition < maxPosition) {
        currentPosition = 0;
      }
    }

    onFinish(currentPosition);
  };

  const tick = () => {
    if (timeRemaining <= 0) {
      clearInterval(timer);
      getSymbolFromPosition();
    } else {
      moveBackground();
    }
  };
  useEffect(() => {
    clearInterval(timer);
    setPosition(start);
    setTimeRemaining(timer);

    timer = setInterval(() => {
      tick();
    }, 100);
  }, []);

  return (
    <div
      style={{ backgroundPosition: "0px " + position + "px" }}
      className={`icons`}
    />
  );
};
export default Spinner;
