import api from "utils/api";
import onlineInspectionActionTypes from "./actionTypes";

export const fetchOnlineInspection = () => (dispatch) => {
  const payload = api.get("/api/online_inspection");
  return dispatch({
    type: onlineInspectionActionTypes.GET_ONLINE_INSPECTION.default,
    payload,
  });
};
