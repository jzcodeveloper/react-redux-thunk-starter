import { combineReducers } from "redux";

import movies from "./movies/reducer";

const reducer = combineReducers({
  movies,
});

export default reducer;
