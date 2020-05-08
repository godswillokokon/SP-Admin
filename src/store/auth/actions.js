import api from "utils/api";
import authActionTypes from "./actionTypes";

export const login = (data) => async (dispatch) => {
	const payload = api.post("/api/user/login", data);
	return dispatch({ type: authActionTypes.LOGIN.default, payload });
};

export const logout = () => (dispatch) => {
	return dispatch({ type: authActionTypes.RESET });
};

export const reset = () => (dispatch) =>
	dispatch({ type: authActionTypes.RESET });
