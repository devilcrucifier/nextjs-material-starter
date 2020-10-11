import * as types from "./commonActionTypes";

export const logout = () => {
  return {
    type: types.RESET_APPLICATION_STATE
  };
};
