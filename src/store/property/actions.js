import api from "utils/api";
import propertyActionTypes from "./actionTypes";

export const createHouse = (data) => (dispatch) => {
  const payload = api.post("/api/house/create", data);
  return dispatch({
    type: propertyActionTypes.CREATE_HOUSE_PROPERTY.default,
    payload,
  });
};

export const getHouses = () => (dispatch) => {
  const payload = api.get("/api/houses");
  return dispatch({ type: propertyActionTypes.GET_HOUSE.default, payload });
};

export const getSingleHouse = (slug) => (dispatch) => {
  const payload = api.get(`/api/user/house/${slug}`);
  return dispatch({
    type: propertyActionTypes.GET_SINGLE_HOUSE.default,
    payload,
  });
};
