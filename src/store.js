import rootReducer from "./ducks";
import { createStore } from "redux";

const store = createStore(rootReducer)

export default store;
