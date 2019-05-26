import { types as boardTypes } from "ducks/match/board";
import { BoardElement } from "utils/board";
import { NO_COLOR } from "utils/colors";

export const types = {
  COLOR_CELL: "cells/COLOR_CELL"
};

export const actions = {
  colorCell: (x, y, color) => ({
    type: types.COLOR_CELL,
    payload: BoardElement("cell", x, y, color)
  })
};

export const selectors = {
  cellsSelector: state => state.cells.cells,
  coloredSelector: state=> state.cells.colored,
};

const INITIAL_STATE = { cells: {}, colored: {} };

function cellsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case boardTypes.INIT_BOARD:
      return {
        ...INITIAL_STATE,
        cells: makeCells(action.height, action.width)
      };
    case types.COLOR_CELL:
      return {
        ...state,
        colored: {
          ...state.colored,
          [action.payload.color]: (
            state.colored[action.payload.color] || []
          ).concat(action.payload.id)
        },
        cells: {
          ...state.cells,
          [action.payload.id]: action.payload
        }
      };
    default:
      return state;
  }
}

function makeCells(h, w) {
  let cells = {};

  for (let y of Array(h).keys()) {
    for (let x of Array(w).keys()) {
      let cell = BoardElement("cell", x * 2 + 1, y * 2 + 1, NO_COLOR);

      cells[cell.id] = cell;
    }
  }

  return cells;
}

export default cellsReducer;
