import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';

import reducer, { saga } from "ducks";

const sagaMiddleware = createSagaMiddleware()

const middleware = [
  sagaMiddleware,
];

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

sagaMiddleware.run(saga);

export default store;
