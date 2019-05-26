import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { selectors } from "ducks";

import { colorForPlayerBackground } from "utils/colors";
import { playerScore } from "utils/board";

const ScoreBoardTable = styled.div.attrs(({ upsideDown }) => ({
  style: {
    transform: upsideDown && "rotate(180deg)"
  }
}))`
  grid-auto-flow: column;
  display: grid;
`;

const ScoreBoard = ({
  currentPlayer,
  totalPlayers,
  coloredCells,
  upsideDown
}) => (
  <ScoreBoardTable upsideDown={upsideDown}>
    {Array.from(Array(totalPlayers).keys()).map(player => (
      <div
        key={player}
        style={{
          border: player === currentPlayer ? `black 0.001rem solid` : "",
          backgroundColor: colorForPlayerBackground(player)
        }}
      >
        {playerScore(player, coloredCells)}
      </div>
    ))}
  </ScoreBoardTable>
);

const mapStateToProps = state => ({
  currentPlayer: selectors.currentPlayerSelector(state),
  totalPlayers: selectors.totalPlayersSelector(state),
  coloredCells: selectors.boardElementsSelector(state).colored
});

export default connect(mapStateToProps)(ScoreBoard);
