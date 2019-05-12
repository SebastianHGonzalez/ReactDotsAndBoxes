import { combineReducers } from "redux";
import { createSelector } from "reselect";

import cells, {
  selectors as cellsSelectors,
  actions as cellsActions
} from "ducks/match/cells";
import edges, {
  selectors as edgesSelectors,
  actions as edgesActions
} from "ducks/match/edges";

export const types = {
  INIT_BOARD: "board/INIT_BOARD"
};

export const actions = {
  ...cellsActions,
  ...edgesActions,
  initializeBoard: (height, width) => ({
    type: types.INIT_BOARD,
    height,
    width
  })
};

export const selectors = {
  boardElementsSelector: createSelector(
    cellsSelectors.cellsSelector,
    edgesSelectors.edgesSelector,
    (cells, edges) => {debugger; return cells.concat(edges)}
  )
};

const boardReducer = combineReducers({ cells, edges });

export default boardReducer;
