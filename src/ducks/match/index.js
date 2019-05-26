import { combineReducers } from "redux";
import { takeLatest, put, take, select } from "redux-saga/effects";

import { calculateWinner, NO_WINNER } from "utils/match";

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
  START_MATCH: "match/START_MATCH",
  SET_WINNER: "match/SET_WINNER",
};

export const actions = {
  ...boardActions,
  ...turnActions,
  setWinner: (playerId) => ({
    type: types.SET_WINNER,
    payload: playerId,
  }),
  startMatch: (playerAmount, height, width) => ({
    type: types.START_MATCH,
    playerAmount,
    height,
    width
  })
};

export const selectors = {
  cellsSelector: state => boardSelectors.cellsSelector(state.match.board),
  boardElementsSelector: state =>
    boardSelectors.boardElementsSelector(state.board),
  winnerSelector: state => state.match.winner,
};

function winnerReducer(state = NO_WINNER, action) {
  switch(action.type) {
    case types.INIT_BOARD: return NO_WINNER;
    case types.SET_WINNER: return action.payload;
    default: return state;
  }
}

const matchReducer = combineReducers({ board, turn, winner: winnerReducer });

export default matchReducer;

export const saga = takeLatest(types.START_MATCH, matchSaga);

function* matchSaga({ playerAmount, width, height }) {
  yield put(actions.initializeBoard(height, width));
  yield put(actions.nextTurn(0));

  while ((yield select(selectors.winnerSelector)) === NO_WINNER) {
    const {x, y} = yield take(types.EDGE_SELECTED);
    yield put(actions.colorEdge(x, y, "black"))

    yield put(actions.setWinner(calculateWinner(yield select(selectors.cellsSelector))))
  }

  return;
}
