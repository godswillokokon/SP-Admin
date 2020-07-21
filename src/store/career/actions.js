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
// FETCH CAREERS
export const fetchAllCareer = () => (dispatch) => {
  const payload = api.get("/api/careers");
  return dispatch({ type: careerActionTypes.FETCH_CAREER.default, payload });
};
export const updateCareer = ({ id, data }) => (dispatch) => {
  const payload = api.post(`/api/career/${id}`, { ...data });
  return dispatch({
    type: careerActionTypes.UPDATE_CAREER.default,
    payload,
  });
};
// CAREER
export const deleteCareer = (id) => (dispatch) => {
  const payload = api.delete(`/api/career/${id}`);
  return dispatch({ type: careerActionTypes.DELETE_CAREER.default, payload });
};
