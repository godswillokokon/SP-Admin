import categoriesActionTypes from "./actionTypes";
import parseError from "utils/ParseError";

const initialState = {
  data: null,
  landCategories: null,
  actionLoading: false,
  loading: false,
  error: null,
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoriesActionTypes.GET_HOUSE_CATEGORIES.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case categoriesActionTypes.GET_HOUSE_CATEGORIES.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
        data: { ...action.payload.data },
      };
    }
    case categoriesActionTypes.GET_HOUSE_CATEGORIES.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }
    case categoriesActionTypes.GET_LAND_CATEGORIES.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case categoriesActionTypes.GET_LAND_CATEGORIES.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
        landCategories: { ...action.payload.data },
      };
    }
    case categoriesActionTypes.GET_LAND_CATEGORIES.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }
    case categoriesActionTypes.CREATE_HOUSE_CATEGORY.pending:
    case categoriesActionTypes.CREATE_HOUSE_SUBCATEGORY.pending:
    case categoriesActionTypes.CREATE_LAND_CATEGORY.pending:
    case categoriesActionTypes.DELETE_LAND_CATEGORY.pending:
    case categoriesActionTypes.DELETE_HOUSE_CATEGORY.pending:
    case categoriesActionTypes.EDIT_LAND_CATEGORY.pending:
    case categoriesActionTypes.EDIT_HOUSE_CATEGORY.pending: {
      return {
        ...state,
        actionLoading: true,
        error: false,
      };
    }
    case categoriesActionTypes.CREATE_HOUSE_CATEGORY.fulfilled:
    case categoriesActionTypes.CREATE_HOUSE_SUBCATEGORY.fulfilled:
    case categoriesActionTypes.CREATE_LAND_CATEGORY.fulfilled:
    case categoriesActionTypes.DELETE_LAND_CATEGORY.fulfilled:
    case categoriesActionTypes.EDIT_LAND_CATEGORY.fulfilled:
    case categoriesActionTypes.DELETE_HOUSE_CATEGORY.fulfilled:
    case categoriesActionTypes.EDIT_HOUSE_CATEGORY.fulfilled: {
      return {
        ...state,
        actionLoading: false,
        error: false,
      };
    }
    case categoriesActionTypes.CREATE_HOUSE_CATEGORY.rejected:
    case categoriesActionTypes.CREATE_HOUSE_SUBCATEGORY.rejected:
    case categoriesActionTypes.CREATE_LAND_CATEGORY.rejected:
    case categoriesActionTypes.DELETE_LAND_CATEGORY.rejected:
    case categoriesActionTypes.EDIT_LAND_CATEGORY.rejected:
    case categoriesActionTypes.EDIT_HOUSE_CATEGORY.rejected:
    case categoriesActionTypes.DELETE_HOUSE_CATEGORY.rejected: {
      return {
        ...state,
        actionLoading: false,
        error: parseError(action.payload),
      };
    }
    default:
      return state;
  }
};

export default categoriesReducer;
