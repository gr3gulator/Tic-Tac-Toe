import "./App.css";
import React, { useState } from "react";
import { act } from "react-dom/test-utils";

const GameButton = (props) => {
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

const ActivePlayerDisplay = (props) => {
  // console.log("props.winner:", props.winner);
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

const GameBoard = () => {
  // create buttons for the Game
  const [activePlayer, updateActivePlayer] = useState("X");
  const [playerOneMoves, updatePlayerOneMoves] = useState([]);
  const [playerTwoMoves, updatePlayerTwoMoves] = useState([]);
  const playedMoves = playerOneMoves.concat(playerTwoMoves);
  const [winner, updateWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkForWinner = () => {
    winningCombinations.some((combo) => {
      const x = combo.every((element) => playerOneMoves.includes(element));
      const o = combo.every((element) => playerTwoMoves.includes(element));
      const winnerDetected = x || o ? true : false;
      if (winnerDetected) {
        if (x) {
          updateWinner("Player 1");
        } else {
          updateWinner("Player 2");
        }
      }
      return winnerDetected;
    });
  };

  const onGameButtonClick = (value) => {
    console.log("Button Clicked");
    // If move has already been made, return
    if (playedMoves.includes(value)) {
      return;
    }
    console.log("Active Player", activePlayer);
    // Update moves for active player
    if (activePlayer === "X") {
      console.log("xxxxxxxxxxxxxxxxxxxxx");
      const x = [...playerOneMoves, value];
      console.log(x);
      updatePlayerOneMoves(x);
    } else {
      updatePlayerTwoMoves([...playerTwoMoves, value]);
    }
    console.log(playerOneMoves);
    checkForWinner();
    if (winner) {
      return;
    }

    // Determine who gets the next turn
    const nextActivePlayer = activePlayer === "X" ? "O" : "X";
    // Update the active player
    updateActivePlayer(nextActivePlayer);
  };

  // Handles displaying "X" or "O" when GameButton is clicked
  const gameButtonValue = (value) => {
    if (!playerOneMoves.includes(value) && !playerTwoMoves.includes(value)) {
      return null;
    }
    if (playerOneMoves.includes(value)) {
      return "X";
    }
    if (playerTwoMoves.includes(value)) {
      return "O";
    }
  };

  return (
    <div id="tic-tac-toe-app">
      {/* move active player display to main application component once it is written */}
      <ActivePlayerDisplay winner={winner} activePlayer={activePlayer} />
      <div style={{ display: "flex" }}>
        <GameButton
          key={0}
          position={0}
          gameButtonValue={gameButtonValue(0)}
          onClick={onGameButtonClick}
        ></GameButton>
        <GameButton
          key={1}
          position={1}
          gameButtonValue={gameButtonValue(1)}
          onClick={onGameButtonClick}
        ></GameButton>
        <GameButton
          key={2}
          position={2}
          gameButtonValue={gameButtonValue(2)}
          onClick={onGameButtonClick}
        ></GameButton>
      </div>
      <div style={{ display: "flex" }}>
        <GameButton
          key={3}
          position={3}
          gameButtonValue={gameButtonValue(3)}
          onClick={onGameButtonClick}
        ></GameButton>
        <GameButton
          key={4}
          position={4}
          gameButtonValue={gameButtonValue(4)}
          onClick={onGameButtonClick}
        ></GameButton>
        <GameButton
          key={5}
          position={5}
          gameButtonValue={gameButtonValue(5)}
          onClick={onGameButtonClick}
        ></GameButton>
      </div>
      <div style={{ display: "flex" }}>
        <GameButton
          key={6}
          position={6}
          gameButtonValue={gameButtonValue(6)}
          onClick={onGameButtonClick}
        ></GameButton>
        <GameButton
          key={7}
          position={7}
          gameButtonValue={gameButtonValue(7)}
          onClick={onGameButtonClick}
        ></GameButton>
        <GameButton
          key={8}
          position={8}
          gameButtonValue={gameButtonValue(8)}
          onClick={onGameButtonClick}
        ></GameButton>
      </div>
    </div>
  );
};

export default GameBoard;

const utils = {
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
};
