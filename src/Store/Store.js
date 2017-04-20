import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger";
import { authReducer } from "./Reducers/reducer"

const rootReducer = combineReducers({
    authReducer,
    //all reducers
})
const logger = createLogger();

let store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;