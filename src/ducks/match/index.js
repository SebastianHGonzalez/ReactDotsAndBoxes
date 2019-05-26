import { combineReducers } from "redux";
import { takeLatest, put, take, select } from "redux-saga/effects";

import { NO_COLOR, colorForPlayer } from "utils/colors";
import { adjacentPositions } from "utils/board";
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
  SET_WINNER: "match/SET_WINNER"
};

export const actions = {
  ...boardActions,
  ...turnActions,
  setWinner: playerId => ({
    type: types.SET_WINNER,
    payload: playerId
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
  edgesSelector: state => boardSelectors.edgesSelector(state.match.board),
  boardElementsSelector: state =>
    boardSelectors.boardElementsSelector(state.board),
  winnerSelector: state => state.match.winner,
  currentPlayerSelector: state => state.match.turn 
};

function winnerReducer(state = NO_WINNER, action) {
  switch (action.type) {
    case types.INIT_BOARD:
      return NO_WINNER;
    case types.SET_WINNER:
      return action.payload;
    default:
      return state;
  }
}

const matchReducer = combineReducers({ board, turn, winner: winnerReducer });

export default matchReducer;

export const saga = takeLatest(types.START_MATCH, matchSaga);

function* matchSaga({ playerAmount, width, height }) {
  yield put(actions.initializeBoard(height, width));
  yield put(actions.nextTurn(0));

  while ((yield select(selectors.winnerSelector)) === NO_WINNER) {
    const { x, y } = yield take(types.EDGE_SELECTED);
    yield put(actions.colorEdge(x, y, "black"));

    yield updateCellsAroundEdgeAt({ x, y });

    yield updateWinner();
  }

  return;
}

function filterElementsAtPositions(positions, elements) {
  return elements.filter(cell =>
    positions.some(pos => cell.x === pos.x && cell.y === pos.y)
  );
}

function* updateCellsAroundEdgeAt({ x, y }) {
  const cells = yield select(selectors.cellsSelector);
  const adjCellPos = adjacentPositions(x, y);

  const adjCells = filterElementsAtPositions(adjCellPos, cells);

  const blankCells = adjCells.filter(cell => cell.color === NO_COLOR);

  const edges = yield select(selectors.edgesSelector);

  const blankSurroundedCells = blankCells.filter(cell => {
    const adjEdgePos = adjacentPositions(cell.x, cell.y);
    const adjEdges = filterElementsAtPositions(adjEdgePos, edges);
    const filledAdjEdges = adjEdges.filter(edge => edge.color !== NO_COLOR);
    return filledAdjEdges.length === adjEdges.length;
  });

  const currentPlayer = yield select(selectors.currentPlayerSelector)
  for (let cell of blankSurroundedCells) {
    yield put(actions.colorCell(cell.x, cell.y, colorForPlayer(currentPlayer)));
  }

  return;
}

function* updateWinner() {
  yield put(
    actions.setWinner(calculateWinner(yield select(selectors.cellsSelector)))
  );
}
