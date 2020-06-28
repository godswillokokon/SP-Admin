import api from "utils/api";
import careerActionTypes from "./actionTypes";

export const createCareer = ({ ...data }) => (dispatch) => {
  const payload = api.post("/api/career", { ...data });
  console.log("sskk ");
  return dispatch({
    type: careerActionTypes.CREATE_CAREER.default,
    payload,
  });
};
export const fetchAllCareer = () => (dispatch) => {
  const payload = api.get("/api/careers");
  return dispatch({ type: careerActionTypes.FETCH_CAREER.default, payload });
};