import { combineReducers } from "redux";

import board, {
  selectors as boardSelectors,
  actions as boardActions
} from "ducks/match/board";
import turn, { actions as turnActions } from "ducks/match/turn";

export const actions = {
  ...boardActions,
  ...turnActions
};

export const selectors = {
  boardElementsSelector: state =>
    boardSelectors.boardElementsSelector(state.board)
};

const matchReducer = combineReducers({ board, turn });

export default matchReducer;
