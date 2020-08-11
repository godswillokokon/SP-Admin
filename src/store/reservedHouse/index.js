import propertyActionTypes from "./actionTypes";
import parseError from "utils/ParseError";

const initialState = {
  data: null,
  actionLoading: false,
  loading: false,
  error: null,
};

export const reservedHouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case propertyActionTypes.GET_RESERVED_HOUSE.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case propertyActionTypes.GET_RESERVED_HOUSE.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
        data: { ...action.payload.data },
      };
    }
    case propertyActionTypes.GET_RESERVED_HOUSE.rejected: {
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

export default reservedHouseReducer;
