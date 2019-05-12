import { types as boardTypes } from "./board";
import { BoardElement } from "../../utils/board";
import { NO_COLOR } from "../../utils/colors";

export const types = {
  COLOR_CELL: "cells/COLOR_CELL"
};
export const actions = {
  colorCell: (x, y, color) => ({ type: types.COLOR_CELL, x, y, color })
};

const INITIAL_STATE = [];

function cellsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case boardTypes.INIT_BOARD:
      return makeCells(action.height, action.width);
    case types.COLOR_CELL:
      return state
        .filter(cell => cell.x === action.x && cell.y === action.y)
        .concat(
          BoardElement(action.position.x, action.position.y, action.color)
        );
    default:
      return state;
  }
}

function makeCells(h, w) {
  let cells = [];

  for (let y of Array(h).keys()) {
    for (let x of Array(w).keys()) {
      cells = cells.concat(BoardElement(x, y, NO_COLOR));
    }
  }

  return cells;
}

export default cellsReducer;
