import { createStore, applyMiddleware, combineReducers } from "redux";
import TodoReducer from "./TodoReducer";

import thunk from "redux-thunk";

const reducer = combineReducers({
  Todo: TodoReducer,
});

const initialState = {};
const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
