import counterReducer from "./counter";
import isLogged from "./islogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  logged: isLogged
});

export default allReducers;
