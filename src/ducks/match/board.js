import { combineReducers } from "redux";
import { createSelector } from "reselect";

import cells, {
  selectors as cellsSelectors,
  actions as cellsActions,
  types as cellTypes
} from "ducks/match/cells";
import edges, {
  selectors as edgesSelectors,
  actions as edgesActions,
  types as edgeTypes
} from "ducks/match/edges";

export const types = {
  ...cellTypes,
  ...edgeTypes,
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
  ...cellsSelectors,
  ...edgesSelectors,
  boardElementsSelector: createSelector(
    cellsSelectors.cellsSelector,
    edgesSelectors.edgesSelector,
    cellsSelectors.coloredSelector,
    (cells, edges, colored) => ({cells, edges, colored})
  )
};

const boardReducer = combineReducers({ cells, edges });

export default boardReducer;
