import { combineReducers } from "redux";
import Todos from "./Todos";
import visibilityFilters from "./visibilityFilters";

export default combineReducers({
  Todos,
  visibilityFilters,
});
