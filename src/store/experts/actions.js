import api from "../../utils/api";
import userActionTypes from "./actionType";

export const fetchAllExperts = () => (dispatch) => {
  const payload = api.get("/api/experts");
  return dispatch({ type: userActionTypes.FETCH_ALL_EXPERTS.default, payload });
};

export const approveExpert = (id) => (dispatch) => {
  const payload = api.get(`/api/expert/approve/${id}`);
  return dispatch({ type: userActionTypes.APPROVE_EXPERTS.default, payload });
};
export const rejectExpert = (id) => (dispatch) => {
  const payload = api.get(`/api/expert/reject/${id}`);
  return dispatch({ type: userActionTypes.REJECTS_EXPERTS.default, payload });
};
