import { combineReducers } from "redux";
import board from "ducks/match/board";
import turn from "ducks/match/turn";

const matchReducer = combineReducers({ board, turn });

export default matchReducer;
