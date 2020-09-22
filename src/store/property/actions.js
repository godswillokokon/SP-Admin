import api from "utils/api";
import propertyActionTypes from "./actionTypes";

export const createHouse = (data) => (dispatch) => {
  const payload = api.post("/api/house/create", data);
  return dispatch({
    type: propertyActionTypes.CREATE_HOUSE_PROPERTY.default,
    payload,
  });
};

export const createLand = (data) => (dispatch) => {
  const payload = api.post("/api/land/create", data);
  return dispatch({
    type: propertyActionTypes.CREATE_LAND_PROPERTY.default,
    payload,
  });
};

export const getHouses = (limit) => (dispatch) => {
  const payload = api.get("/api/admin/houses?limit=" + limit);
  return dispatch({
    type: propertyActionTypes.GET_HOUSE.default,
    payload,
  });
};

export const getSingleHouse = (slug) => (dispatch) => {
  const payload = api.get(`/api/house/${slug}`);
  return dispatch({
    type: propertyActionTypes.GET_SINGLE_HOUSE.default,
    payload,
  });
};

export const getLands = (limit) => (dispatch) => {
  const payload = api.get("/api/admin/lands?limit=" + limit);
  return dispatch({
    type: propertyActionTypes.GET_LANDS.default,
    payload,
  });
};

export const deleteHouse = (slug) => (dispatch) => {
  const payload = api.delete("/api/house/" + slug);
  return dispatch({
    type: propertyActionTypes.DELETE_HOUSE.default,
    payload,
  })
}

export const editHouse = (slug, data) => (dispatch) => {
  const payload = api.patch("/api/house/update/" + slug, data);
  return dispatch({
    type: propertyActionTypes.EDIT_HOUSE.default,
    payload
  })
}