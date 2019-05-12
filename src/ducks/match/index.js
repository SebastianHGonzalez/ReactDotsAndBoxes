import { combineReducers } from "redux";
import board from "./board";
import turn from "./turn";

const matchReducer = combineReducers({ board, turn });

export default matchReducer;
