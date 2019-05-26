import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import match, {
  selectors as matchSelectors,
  actions as matchActions,
  saga as matchSaga
} from "ducks/match";

export const actions = {
  ...matchActions
};

export const selectors = {
  currentPlayerSelector: state =>
    matchSelectors.currentPlayerSelector(state.match),
  totalPlayersSelector: state =>
    matchSelectors.totalPlayersSelector(state.match),
  boardElementsSelector: state =>
    matchSelectors.boardElementsSelector(state.match)
};

export const saga = function* rootSaga() {
  yield all([matchSaga]);
};

const rootReducer = combineReducers({ match });

export default rootReducer;
