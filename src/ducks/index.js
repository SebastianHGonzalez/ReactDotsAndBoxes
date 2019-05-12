import { combineReducers } from "redux";

import match, { selectors as matchSelectors, actions as matchActions } from "ducks/match";

export const actions = {
    ...matchActions,
}

export const selectors = {
  boardElementsSelector: state =>
    matchSelectors.boardElementsSelector(state.match)
};

const rootReducer = combineReducers({ match });

export default rootReducer;
