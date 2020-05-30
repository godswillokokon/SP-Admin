import propertyActionTypes from "./actionTypes";
import parseError from "utils/ParseError";

const initialState = {
  data: null,
  actionLoading: false,
  loading: false,
  error: null,
};

export const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case propertyActionTypes.CREATE_HOUSE_PROPERTY.pending: {
      return {
        ...state,
        actionLoading: true,
        error: false,
      };
    }
    case propertyActionTypes.CREATE_HOUSE_PROPERTY.fulfilled: {
      return {
        ...state,
        actionLoading: false,
        error: false,
      };
    }
    case propertyActionTypes.CREATE_HOUSE_PROPERTY.rejected: {
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

export default propertyReducer;
