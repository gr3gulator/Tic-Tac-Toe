const PlayerDisplay = (props) => {
  return (
    <div>
      <div
        className="player-display-widget"
        style={{
          backgroundColor: props.activePlayer === "X" ? "green" : "white",
        }}
      >
        Player 1 (X)
        {props.winner === "Player 1" ? (
          <div style={{ fontWeight: "bold", color: "pink" }}> Winner </div>
        ) : (
          <div></div>
        )}
      </div>
      <div
        className="player-display-widget"
        style={{
          backgroundColor: props.activePlayer === "O" ? "green" : "white",
        }}
      >
        Player 2 (0)
        {props.winner === "Player 2" ? (
          <div style={{ fontWeight: "bold", color: "pink" }}> Winner </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default PlayerDisplay;