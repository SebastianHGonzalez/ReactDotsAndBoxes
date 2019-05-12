import { combineReducers } from "redux";
import cells from "ducks/match/cells";
import edges from "ducks/match/edges";

export const types = {
  INIT_BOARD: "board/INIT_BOARD"
};

export const actions = {
  initializeBoard: (height, width) => ({ type: types.INIT_BOARD, height, width })
};

const boardReducer = combineReducers({ cells, edges });

export default boardReducer;
