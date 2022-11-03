import Square from "./Square";
import PlayerDisplay from "./PlayerDisplay"; 
import React, { useState } from "react";

const GameBoard = () => {
  const [activePlayer, updateActivePlayer] = useState("X");
  const [playerOneMoves, updatePlayerOneMoves] = useState([]);
  const [playerTwoMoves, updatePlayerTwoMoves] = useState([]);
  const playedMoves = playerOneMoves.concat(playerTwoMoves);
  const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],  
            ];

  const calculateWinner = (playerOneMoves, playerTwoMoves) => {
    let status = null
    winningCombinations.some((combo) => {
      const x = combo.every((element) => playerOneMoves.includes(element));
      const o = combo.every((element) => playerTwoMoves.includes(element));
      const winnerDetected = x || o ? true : false;
      if (winnerDetected) {
        if (x) {
          status = "Player 1";
        } else {
          status = "Player 2";
        }
      }
      return winnerDetected;
    });
    return status
  };

  const winner = calculateWinner(playerOneMoves, playerTwoMoves)

  const onGameButtonClick = (value) => {
    console.log("Button Clicked");
    // If move has already been made, return
    if (playedMoves.includes(value)) {
      return;
    }
    // Update moves for active player
    if (activePlayer === "X") {
      const x = [...playerOneMoves, value];
      updatePlayerOneMoves(x);
    } else {
      updatePlayerTwoMoves([...playerTwoMoves, value]);
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
      <PlayerDisplay winner={winner} activePlayer={activePlayer} />
      <div style={{ display: "flex" }}>
        <Square
          key={0}
          position={0}
          gameButtonValue={gameButtonValue(0)}
          onClick={onGameButtonClick}
        ></Square>
        <Square
          key={1}
          position={1}
          gameButtonValue={gameButtonValue(1)}
          onClick={onGameButtonClick}
        ></Square>
        <Square
          key={2}
          position={2}
          gameButtonValue={gameButtonValue(2)}
          onClick={onGameButtonClick}
        ></Square>
      </div>
      <div style={{ display: "flex" }}>
        <Square
          key={3}
          position={3}
          gameButtonValue={gameButtonValue(3)}
          onClick={onGameButtonClick}
        ></Square>
        <Square
          key={4}
          position={4}
          gameButtonValue={gameButtonValue(4)}
          onClick={onGameButtonClick}
        ></Square>
        <Square
          key={5}
          position={5}
          gameButtonValue={gameButtonValue(5)}
          onClick={onGameButtonClick}
        ></Square>
      </div>
      <div style={{ display: "flex" }}>
        <Square
          key={6}
          position={6}
          gameButtonValue={gameButtonValue(6)}
          onClick={onGameButtonClick}
        ></Square>
        <Square
          key={7}
          position={7}
          gameButtonValue={gameButtonValue(7)}
          onClick={onGameButtonClick}
        ></Square>
        <Square
          key={8}
          position={8}
          gameButtonValue={gameButtonValue(8)}
          onClick={onGameButtonClick}
        ></Square>
      </div>
    </div>
  );
};

export default GameBoard;
