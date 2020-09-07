import api from "../../utils/api";
import userActionTypes from "./actionType";

export const fetchAllUsers = () => (dispatch) => {
  const payload = api.get("/api/users");
  return dispatch({ type: userActionTypes.FETCH_ALL_USER.default, payload });
};

export const deleteUser = (id) => (dispatch) => {
  const payload = api.delete(`/api/user/${id}`);
  return dispatch({ type: userActionTypes.DELETE_USER.default, payload });
};
