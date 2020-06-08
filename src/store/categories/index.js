import categoriesActionTypes from "./actionTypes";
import parseError from "utils/ParseError";

const initialState = {
  data: null,
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
    default:
      return state;
  }
};

export default categoriesReducer;
