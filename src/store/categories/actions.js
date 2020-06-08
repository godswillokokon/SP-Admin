import api from "utils/api";
import categoriesActionTypes from "./actionTypes";

export const getHouseCategories = () => (dispatch) => {
	const payload = api.get("/api/house-categories");
	return dispatch({
		type: categoriesActionTypes.GET_HOUSE_CATEGORIES.default,
		payload,
	});
};
