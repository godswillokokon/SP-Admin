import careerActionTypes from "./actionTypes";
import parseError from "utils/ParseError";

const initialState = {
  data: null,
  actionLoading: false,
  loading: false,
  error: null,
};

export const careerReducer = (state = initialState, action) => {
  switch (action.type) {
    case careerActionTypes.CREATE_CAREER.pending: {
      return {
        ...state,
        actionLoading: true,
        error: false,
      };
    }
    case careerActionTypes.CREATE_CAREER.fulfilled: {
      return {
        ...state,
        actionLoading: false,
        error: false,
      };
    }
    case careerActionTypes.CREATE_CAREER.rejected: {
      return {
        ...state,
        actionLoading: false,
        error: parseError(action.payload),
      };
    }
    // fetching of all career

    case careerActionTypes.FETCH_CAREER.pending: {
      return {
        ...state,
        actionLoading: true,
        error: false,
      };
    }
    case careerActionTypes.FETCH_CAREER.fulfilled: {
      return {
        ...state,
        actionLoading: false,
        error: false,
        data: { ...action.payload.data },
      };
    }
    case careerActionTypes.FETCH_CAREER.rejected: {
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

export default careerReducer;
