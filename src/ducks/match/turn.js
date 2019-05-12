const INITIAL_STATE = 0;

export const types = { NEXT: "turn/NEXT" };
export const actions = {
  nextTurn: playerID => ({ type: types.NEXT, payload: playerID })
};

function turnReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.NEXT:
      return action.payload;
    default:
      return state;
  }
}

export default turnReducer;
