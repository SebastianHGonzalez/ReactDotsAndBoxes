import React from "react";
import Board from "components/Board";
import TurnIndicator from "components/TurnIndicator";

function Game(props) {
  return (
    <div
      className="board"
      style={{ padding: "1rem", width: "50vw", height: "50vw" }}
    >
      <TurnIndicator>
        <Board height={10} width={10} />
      </TurnIndicator>
    </div>
  );
}

export default Game;
