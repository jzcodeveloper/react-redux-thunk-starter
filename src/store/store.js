import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);
