import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer";

import rootSaga from "./saga";

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    //eslint-disable-next-line
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  //@ts-ignore
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
