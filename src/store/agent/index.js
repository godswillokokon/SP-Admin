import agentActionTypes from "./actionTypes";
import parseError from "utils/ParseError";

const initialState = {
  data: null,
  actionLoading: false,
  loading: false,
  error: null,
};

export const agentReducer = (state = initialState, action) => {
  switch (action.type) {
    case agentActionTypes.CREATE_AGENT.pending: {
      return {
        ...state,
        actionLoading: true,
        error: false,
      };
    }
    case agentActionTypes.CREATE_AGENT.fulfilled: {
      return {
        ...state,
        actionLoading: false,
        error: false,
      };
    }
    case agentActionTypes.CREATE_AGENT.rejected: {
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

export default agentReducer;
