import React, { useEffect } from "react";
import { connect } from "react-redux";

import Cell from "components/Cell";
import Edge from "components/Edge";
import Grid from "components/Grid";
import { actions, selectors } from "ducks";
import { NO_COLOR } from "utils/colors";

const Board = ({
  players,
  height,
  width,
  startMatch,
  boardElements,
  edgeSelected
}) => {
  useEffect(() => {
    startMatch(players, height, width);
  }, [startMatch, players, width, height]);

  const cells = Object.values(boardElements.cells);
  const edges = Object.values(boardElements.edges);

  return (
    <Grid rows={height * 2 + 1} columns={width * 2 + 1}>
      {cells.map(({ id, type, x, y, color }) => (
        <Cell key={id} color={color} type={type} column={x} row={y} />
      ))}
      {edges.map(({ id, type, x, y, color }) => (
        <Edge
          key={id}
          color={color}
          type={type}
          column={x}
          row={y}
          onClick={color === NO_COLOR ? () => edgeSelected(x, y) : undefined}
        />
      ))}
    </Grid>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    startMatch: (...args) => dispatch(actions.startMatch(...args)),
    edgeSelected: (...args) => dispatch(actions.edgeSelected(...args))
  };
}

function mapStateToProps(state) {
  return {
    boardElements: selectors.boardElementsSelector(state)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
