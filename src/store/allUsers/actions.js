import api from "../../utils/api";
import userActionTypes from "./actionType";

export const fetchAllUsers = () => (dispatch) => {
  const payload = api.get("/api/users");
  return dispatch({ type: userActionTypes.FETCH_ALL_USER.default, payload });
};
