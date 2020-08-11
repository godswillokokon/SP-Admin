import api from "utils/api";
import propertyActionTypes from "./actionTypes";

export const getReservedHouse = () => (dispatch) => {
  const payload = api.get("/api/reserved_house");
  return dispatch({
    type: propertyActionTypes.GET_RESERVED_HOUSE.default,
    payload,
  });
};
