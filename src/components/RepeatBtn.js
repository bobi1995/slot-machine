const RepeatButton = ({ onClick }) => {
  return (
    <button
      aria-label="Play again."
      id="repeatButton"
      onClick={onClick}
    ></button>
  );
};

export default RepeatButton;
