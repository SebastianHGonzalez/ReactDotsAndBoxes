import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { selectors } from "ducks";

import { colorForPlayerBackground } from "utils/colors";
import { playerScore } from "utils/board";

const ScoreBoardTable = styled.div`
  grid-auto-flow: column;
  display: grid;
`;

const ScoreBoard = ({ currentPlayer, totalPlayers, cells }) => (
  <ScoreBoardTable>
    {Array.from(Array(totalPlayers).keys()).map(player => (
      <div
        key={player}
        style={{
          border: player === currentPlayer ? `black 0.1rem dotted` : "",
          backgroundColor: colorForPlayerBackground(player)
        }}
      >
        {playerScore(player, cells)}
      </div>
    ))}
  </ScoreBoardTable>
);

const mapStateToProps = state => ({
  currentPlayer: selectors.currentPlayerSelector(state),
  totalPlayers: selectors.totalPlayersSelector(state),
  cells: selectors.boardElementsSelector(state)
});

export default connect(mapStateToProps)(ScoreBoard);
