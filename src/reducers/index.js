import { combineReducers } from "redux";
import { patients, isLoading, hasError } from "./patients";

const rootReducer = combineReducers({
  patients,
  isLoading,
  hasError,
});

export default rootReducer;
