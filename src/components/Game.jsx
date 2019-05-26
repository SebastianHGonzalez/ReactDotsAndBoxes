import React, { Fragment, useState } from "react";

import Board from "components/Board";
import TurnIndicator from "components/TurnIndicator";
import ScoreBoard from "components/ScoreBoard";

import { COLORS } from "utils/colors";

function Game(props) {
  const [playing, setPlaying] = useState(false);
  const [playerCount, setPlayerCount] = useState(2);

  return (
    <div style={{ margin: "auto", width: "80vw", height: "80vh" }}>
      {playing ? (
        <TurnIndicator>
          <ScoreBoard />
          <Board players={playerCount} height={10} width={10} />
        </TurnIndicator>
      ) : (
        <Fragment>
          <form onSubmit={() => setPlaying(!playing)}>
            <label htmlFor="playerCount">Players </label>
            <input
              id="playerCount"
              type="number"
              value={playerCount}
              onChange={e =>
                setPlayerCount(
                  Math.min(COLORS.length, Math.max(0, +e.target.value))
                )
              }
            />
            <input type="submit" value="play" />
          </form>
        </Fragment>
      )}
    </div>
  );
}

export default Game;
