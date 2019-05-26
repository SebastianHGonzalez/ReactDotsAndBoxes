import { types as boardTypes } from "ducks/match/board";
import { BoardElement } from "utils/board";
import { NO_COLOR } from "utils/colors";

export const types = {
  COLOR_EDGE: "edges/COLOR_EDGE",
  EDGE_SELECTED: "edges/EDGE_SELECTED"
};

export const actions = {
  colorEdge: (x, y, color) => ({ type: types.COLOR_EDGE, x, y, color }),
  edgeSelected: (x, y) => ({ type: types.EDGE_SELECTED, x, y })
};

export const selectors = {
  edgesSelector: state => state.edges
};

const INITIAL_STATE = [];

function edgesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case boardTypes.INIT_BOARD:
      return makeEdges(action.height, action.width);

    case types.COLOR_EDGE:
      return state
        .filter(edge => edge.x !== action.x || edge.y !== action.y)
        .concat(BoardElement("edge", action.x, action.y, action.color));

    default:
      return state;
  }
}

function makeEdges(h, w) {
  let edges = [];

  const width = w * 2 + 1;
  const height = h * 2 + 1;

  for (let y of Array(height).keys()) {
    for (let x of Array(width).keys()) {
      if (isValid(x, y)) {
        edges.push(BoardElement("edge", x, y, NO_COLOR));
      }
    }
  }
  return edges;
}

function isValid(x, y) {
  return (x + y) % 2;
}

export default edgesReducer;
