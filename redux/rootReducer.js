import { combineReducers } from "redux";
import commonReducer from "./commonReducer";

const appReducer = combineReducers({
  commonReducer
});

const reducer = (state, action) => {
  if (action.type === "RESET_APPLICATION_STATE") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default reducer;
