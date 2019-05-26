import { combineReducers } from "redux";
import { takeLatest, put, take, select } from "redux-saga/effects";

import board, {
  selectors as boardSelectors,
  actions as boardActions,
  types as boardTypes
} from "ducks/match/board";
import turn, {
  actions as turnActions,
  types as turnTypes
} from "ducks/match/turn";

export const types = {
  ...boardTypes,
  ...turnTypes,
  START_MATCH: "match/START_MATCH"
};

export const actions = {
  ...boardActions,
  ...turnActions,
  startMatch: (playerAmount, height, width) => ({
    type: types.START_MATCH,
    playerAmount,
    height,
    width
  })
};

export const selectors = {
  boardElementsSelector: state =>
    boardSelectors.boardElementsSelector(state.board),
  winnerSelector: state => undefined
};

const matchReducer = combineReducers({ board, turn });

export default matchReducer;

export const saga = takeLatest(types.START_MATCH, matchSaga);

function* matchSaga({ playerAmount, width, height }) {
  yield put(actions.initializeBoard(height, width));
  yield put(actions.nextTurn(0));

  while ((yield select(selectors.winnerSelector)) === undefined) {
    const {x, y} = yield take(types.EDGE_SELECTED);
    yield put(actions.colorEdge(x, y, "black"))
  }

  return;
}
