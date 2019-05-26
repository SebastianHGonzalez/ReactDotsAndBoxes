import React, { useState } from "react";

import Board from "components/Board";
import TurnIndicator from "components/TurnIndicator";
import ScoreBoard from "components/ScoreBoard";
import MainMenu from "components/MainMenu";

function Game() {
  const [gameConfig, setGameConfig] = useState(null);

  return gameConfig ? (
    <TurnIndicator>
      <ScoreBoard />
      <Board {...gameConfig} onFinish={() => setGameConfig(null)} />
    </TurnIndicator>
  ) : (
    <MainMenu onGameStart={setGameConfig} />
  );
}

export default Game;
