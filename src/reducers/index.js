import { combineReducers } from "redux";
import statsReducer from "../reducers/statsReducer";
import animationReducer from "../reducers/animationReducer";

const rootReducer = combineReducers({
  stats: statsReducer,
  state: animationReducer,
});

export default rootReducer;
