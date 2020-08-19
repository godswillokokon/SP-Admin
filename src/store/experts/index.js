import expertsActionTypes from "./actionType";
import parseError from "../../utils/ParseError";

const initialState = {
  data: null,
  actionLoading: false,
  loading: false,
  error: null,
};

export const expertReducer = (state = initialState, action) => {
  switch (action.type) {
    case expertsActionTypes.FETCH_ALL_EXPERTS.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case expertsActionTypes.FETCH_ALL_EXPERTS.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
        data: { ...action.payload.data },
      };
    }
    case expertsActionTypes.FETCH_ALL_EXPERTS.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }

    // Approve user

    case expertsActionTypes.APPROVE_EXPERTS.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case expertsActionTypes.APPROVE_EXPERTS.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case expertsActionTypes.APPROVE_EXPERTS.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }
    // reject user

    case expertsActionTypes.REJECTS_EXPERTS.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case expertsActionTypes.REJECTS_EXPERTS.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case expertsActionTypes.REJECTS_EXPERTS.rejected: {
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

export default expertReducer;
