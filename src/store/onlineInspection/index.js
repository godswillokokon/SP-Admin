import onlineInspectionActionTypes from "./actionTypes";
import parseError from "utils/ParseError";

const initialState = {
  data: null,
  actionLoading: false,
  loading: false,
  error: null,
};

export const onlineInspectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case onlineInspectionActionTypes.GET_ONLINE_INSPECTION.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case onlineInspectionActionTypes.GET_ONLINE_INSPECTION.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
        data: { ...action.payload.data },
      };
    }
    case onlineInspectionActionTypes.GET_ONLINE_INSPECTION.rejected: {
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

export default onlineInspectionReducer;
