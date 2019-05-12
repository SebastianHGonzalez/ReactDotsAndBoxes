import { combineReducers } from "redux";
import cells from "./cells";
import edges from "./edges";

export const types = {
  INIT_BOARD: "board/INIT_BOARD"
};

export const actions = {
  initializeBoard: (height, width) => ({ type: types.INIT_BOARD, height, width })
};

const boardReducer = combineReducers({ cells, edges });

export default boardReducer;
