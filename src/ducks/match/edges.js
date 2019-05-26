import { types as boardTypes } from "ducks/match/board";
import { BoardElement } from "utils/board";
import { NO_COLOR } from "utils/colors";

export const types = {
  COLOR_EDGE: "edges/COLOR_EDGE",
  EDGE_SELECTED: "edges/EDGE_SELECTED"
};

export const actions = {
  colorEdge: (x, y, color) => ({
    type: types.COLOR_EDGE,
    payload: BoardElement("edge", x, y, color)
  }),
  edgeSelected: (x, y) => ({ type: types.EDGE_SELECTED, x, y })
};

export const selectors = {
  edgesSelector: state => state.edges
};

const INITIAL_STATE = {};

function edgesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case boardTypes.INIT_BOARD:
      return makeEdges(action.height, action.width);

    case types.COLOR_EDGE:
      return {
        ...state,
        [action.payload.id]: action.payload
      } 
      
    default:
      return state;
  }
}

function makeEdges(h, w) {
  let edges = {};

  const width = w * 2 + 1;
  const height = h * 2 + 1;

  for (let y of Array(height).keys()) {
    for (let x of Array(width).keys()) {
      if (isValid(x, y)) {
        let edge = BoardElement("edge", x, y, NO_COLOR);

        edges[edge.id] = edge;
      }
    }
  }
  return edges;
}

function isValid(x, y) {
  return (x + y) % 2;
}

export default edgesReducer;
