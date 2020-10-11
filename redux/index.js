import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./rootReducer";

export default function configureStore(initialState) {
  const devTools =
    process.env.NODE_ENV === "production"
      ? applyMiddleware(thunk)
      : composeWithDevTools(applyMiddleware(thunk));

  return createStore(reducer, initialState, devTools);
}
