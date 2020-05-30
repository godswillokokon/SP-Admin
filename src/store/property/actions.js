import api from "utils/api";
import propertyActionTypes from "./actionTypes";

export const createHouse = ({ ...data }) => (dispatch) => {
	const payload = api.post("/api/house/create", { ...data });
	return dispatch({
		type: propertyActionTypes.CREATE_HOUSE_PROPERTY.default,
		payload,
	});
};
