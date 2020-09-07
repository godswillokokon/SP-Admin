import api from "utils/api";
import authActionTypes from "./actionTypes";
import { toastError } from "utils/Toast";

export const login = (data) => async (dispatch) => {
  const payload = api.post("/api/user/login", data);
  return dispatch({
    type: authActionTypes.LOGIN.default,
    payload,
  }).then((res) => {
    if (res?.action?.payload?.data?.privileges !== "admin") {
      toastError("User not allowed access to this platform");
      dispatch(logout());
    }
  });
};

export const logout = () => (dispatch) => {
  return dispatch({ type: authActionTypes.RESET });
};

export const reset = () => (dispatch) =>
  dispatch({ type: authActionTypes.RESET });
