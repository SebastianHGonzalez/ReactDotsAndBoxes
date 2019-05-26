import React, { useEffect } from "react";
import { connect } from "react-redux";

import ColoredBackground from "components/ColoredBackground";
import Cell from "components/Cell";
import Grid from "components/Grid";
import { actions, selectors } from "ducks";

const Board = ({ height, width, initializeBoard, cells }) => {
  useEffect(() => {
    initializeBoard(width, height);
  }, [initializeBoard, width, height]);

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
            />
          </Cell>
        ))}
      </Grid>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    initializeBoard: (h, w) => dispatch(actions.initializeBoard(h, w))
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
