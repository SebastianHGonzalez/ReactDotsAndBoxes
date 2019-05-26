const INITIAL_STATE = { current: 0, total: 0 };

export const types = {
  INITIALIZE_PLAYERS: "turn/INITIALIZE_PLAYERS",
  NEXT: "turn/NEXT"
};

export const actions = {
  initializePlayers: playerAmount => ({
    type: types.INITIALIZE_PLAYERS,
    payload: playerAmount
  }),
  nextTurn: () => ({ type: types.NEXT })
};

function turnReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.INITIALIZE_PLAYERS:
      return { ...INITIAL_STATE, total: action.payload };
    case types.NEXT:
      return { ...state, current: (state.current + 1) % state.total };
    default:
      return state;
  }
}

export default turnReducer;
