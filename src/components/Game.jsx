import React, { Fragment, useState } from "react";

import Board from "components/Board";
import TurnIndicator from "components/TurnIndicator";
import ScoreBoard from "components/ScoreBoard";
import MainMenu from "components/MainMenu";
import MessageBox from "components/MessageBox";

function Game() {
  const [gameConfig, setGameConfig] = useState(null);

  return gameConfig ? (
    <Fragment>
      <TurnIndicator>
        <ScoreBoard />
        <Board {...gameConfig} onFinish={() => setGameConfig(null)} />
        <ScoreBoard upsideDown />
      </TurnIndicator>
      <MessageBox />
    </Fragment>
  ) : (
    <MainMenu onGameStart={setGameConfig} />
  );
}

export default Game;
