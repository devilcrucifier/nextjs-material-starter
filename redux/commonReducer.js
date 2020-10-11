import * as types from "./commonActionTypes";

const stateObject = {
  isLoading: false,
  isSuccess: false,
  payload: {},
  error: null,
  isError: false
};

const initialState = {
  ...stateObject
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_POSITION:
      return {
        ...state,
        payload: action.payload
      };
    default:
      return state;
  }
}
