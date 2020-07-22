import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// Replacing thunk with redux-saga
// import thunk from "thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
const sagaMiddleware = createSagaMiddleware(); // Creating Middleware
const middlewares = [sagaMiddleware]; // Setting middleware

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Creating each saga by passing it in run
// to be mounted on store before running
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
