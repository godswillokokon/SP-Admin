import api from "utils/api";
import categoriesActionTypes from "./actionTypes";

export const getHouseCategories = () => (dispatch) => {
  const payload = api.get("/api/house-categories");
  return dispatch({
    type: categoriesActionTypes.GET_HOUSE_CATEGORIES.default,
    payload,
  });
};

export const getLandCategories = () => (dispatch) => {
  const payload = api.get("/api/land-categories");
  return dispatch({
    type: categoriesActionTypes.GET_LAND_CATEGORIES.default,
    payload,
  });
};

export const createHouseCategory = (data) => (dispatch) => {
  const payload = api.post("/api/house-category/create", data);
  return dispatch({
    type: categoriesActionTypes.CREATE_HOUSE_CATEGORY.default,
    payload,
  });
};

export const createLandCategory = (data) => (dispatch) => {
  const payload = api.post("/api/land-category/create", data);
  return dispatch({
    type: categoriesActionTypes.CREATE_LAND_CATEGORY.default,
    payload,
  });
};

export const deleteHouseCategory = (data) => (dispatch) => {
  const payload = api.delete(
    "/api/house-categories/" + data + "/delete"
  );
  return dispatch({
    type: categoriesActionTypes.DELETE_HOUSE_CATEGORY.default,
    payload,
  });
};

export const deleteLandCategory = (data) => (dispatch) => {
  const payload = api.delete(
    "/api/land-categories/" + data + "/delete"
  );
  return dispatch({
    type: categoriesActionTypes.DELETE_LAND_CATEGORY.default,
    payload,
  });
};

export const createSubcategory = (categoryName, newSubCategory) => (
  dispatch
) => {
  const payload = api.post(
    "/api/subCategory/" + categoryName + "/create",
    newSubCategory
  );
  return dispatch({
    type: categoriesActionTypes.CREATE_HOUSE_SUBCATEGORY.default,
    payload,
  });
};

export const editLandCategory = (categoryName, editData) => (
  dispatch
) => {
  const payload = api.patch(
    "/api/land-categories/" + categoryName + "/update",
    editData
  );
  return dispatch({
    type: categoriesActionTypes.EDIT_LAND_CATEGORY.default,
    payload,
  });
};

export const editHouseCategory = (categoryName, editData) => (
  dispatch
) => {
  const payload = api.patch(
    "/api/house-categories/" + categoryName + "/update",
    editData
  );
  return dispatch({
    type: categoriesActionTypes.EDIT_HOUSE_CATEGORY.default,
    payload,
  });
};
