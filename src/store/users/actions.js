import api from "../../utils/api";
import userActionTypes from "./actionType";

export const fetchUserProfile = () => (dispatch) => {
  const payload = api.get("/api/profile");
  return dispatch({ type: userActionTypes.FETCH_USER.default, payload });
};
