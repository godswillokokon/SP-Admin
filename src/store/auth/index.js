import authActionTypes from "./actionTypes";
import parseError from "utils/ParseError";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN.pending: {
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    }

    case authActionTypes.LOGIN.fulfilled: {
      return {
        ...state,
        loading: false,
        error: null,
        data: {
          token: action.payload.data.access_token,
        },
      };
    }

    case authActionTypes.LOGIN.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }

    case authActionTypes.RESET: {
      return initialState;
    }

    default:
      return state;
  }
};

export default authReducer;
