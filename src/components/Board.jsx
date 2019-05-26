import React, { useEffect } from "react";
import { connect } from "react-redux";

import Cell from "components/Cell";
import Grid from "components/Grid";
import { actions, selectors } from "ducks";
import { NO_COLOR } from "utils/colors";

const Board = ({ players, height, width, startMatch, cells, edgeSelected }) => {
  useEffect(() => {
    startMatch(players, height, width);
  }, [startMatch, players, width, height]);

  return (
    <Grid rows={height * 2 + 1} columns={width * 2 + 1}>
      {cells.map(({ type, x, y, color }) => (
        <Cell
          key={`${x}-${y}`}
          color={color}
          onClick={
            type === "edge" && color === NO_COLOR
              ? () => edgeSelected(x, y)
              : undefined
          }
          type={type}
          column={x}
          row={y}
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
    cells: selectors.boardElementsSelector(state)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
