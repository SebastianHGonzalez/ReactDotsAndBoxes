import React, { useEffect } from "react";
import { connect } from "react-redux";

import ColoredBackground from "components/ColoredBackground";
import Cell from "components/Cell";
import Grid from "components/Grid";
import { actions, selectors } from "ducks";

const Board = ({ height, width, startMatch, cells, edgeSelected }) => {
  useEffect(() => {
    startMatch(2, height, width);
  }, [startMatch, width, height]);

  return (
    <div
      className="board"
      style={{ padding: "1rem", width: "50vw", height: "50vw" }}
    >
      <Grid rows={height * 2 + 1} columns={width * 2 + 1}>
        {cells.map(({ type, x, y, color }) => (
          <Cell key={`${x}-${y}`} type={type} column={x} row={y}>
            <ColoredBackground
              color={color}
              borderColor={type === "cell" ? "red" : "gray"}
              onClick={type === "edge" ? () => edgeSelected(x, y) : undefined}
            />
          </Cell>
        ))}
      </Grid>
    </div>
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
