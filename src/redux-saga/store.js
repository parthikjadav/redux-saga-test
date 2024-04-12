import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducre";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga);

export default store;