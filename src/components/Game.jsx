import React from "react";
import Board from "components/Board";
import TurnIndicator from "components/TurnIndicator";
import ScoreBoard from "components/ScoreBoard";

function Game(props) {
  return (
    <div
      className="board"
      style={{ padding: "1rem", width: "50vw", height: "50vw" }}
    >
      <TurnIndicator>
        <ScoreBoard />
        <Board players={4} height={10} width={10} />
      </TurnIndicator>
    </div>
  );
}

export default Game;
