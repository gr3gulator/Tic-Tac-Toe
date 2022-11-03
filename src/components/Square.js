
const Square = (props) => {
  // console.log(props);
  return (
    <button
      className="game-button"
      onClick={() => props.onClick(props.position)}
    >
      {props.gameButtonValue}
    </button>
  );
};


export default Square;