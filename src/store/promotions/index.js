import promoActionTypes from "./actionTypes";
import parseError from "utils/ParseError";

const initialState = {
  data: null,
  actionLoading: false,
  loading: false,
  error: null,
};

export const promotionReducer = (state = initialState, action) => {
  switch (action.type) {
    case promoActionTypes.CREATE_PROMOTION.pending: {
      return {
        ...state,
        actionLoading: true,
        error: false,
      };
    }
    case promoActionTypes.CREATE_PROMOTION.fulfilled: {
      return {
        ...state,
        actionLoading: false,
        error: false,
      };
    }
    case promoActionTypes.CREATE_PROMOTION.rejected: {
      return {
        ...state,
        actionLoading: false,
        error: parseError(action.payload),
      };
    }
    // fetching of all career

    case promoActionTypes.FETCH_PROMOTION.pending: {
      return {
        ...state,
        actionLoading: true,
        error: false,
      };
    }
    case promoActionTypes.FETCH_PROMOTION.fulfilled: {
      return {
        ...state,
        actionLoading: false,
        error: false,
        data: { ...action.payload.data },
      };
    }
    case promoActionTypes.FETCH_PROMOTION.rejected: {
      return {
        ...state,
        actionLoading: false,
        error: parseError(action.payload),
      };
    }

    //delete career
    case promoActionTypes.DELETE_PROMOTION.pending: {
      return {
        ...state,
        actionLoading: true,
        error: false,
      };
    }
    case promoActionTypes.DELETE_PROMOTION.fulfilled: {
      return {
        ...state,
        actionLoading: false,
        error: false,
      };
    }
    case promoActionTypes.DELETE_PROMOTION.rejected: {
      return {
        ...state,
        actionLoading: false,
        error: parseError(action.payload),
      };
    }
    // update
    case promoActionTypes.UPDATE_PROMOTION.pending: {
      return {
        ...state,
        actionLoading: true,
        error: false,
      };
    }
    case promoActionTypes.UPDATE_PROMOTION.fulfilled: {
      return {
        ...state,
        actionLoading: false,
        error: false,
      };
    }
    case promoActionTypes.UPDATE_PROMOTION.rejected: {
      return {
        ...state,
        actionLoading: false,
        error: parseError(action.payload),
      };
    }

    //activate promotions
    case promoActionTypes.ACTIVATE_PROMOTION.pending: {
      return {
        ...state,
        actionLoading: true,
        error: false,
      };
    }
    case promoActionTypes.ACTIVATE_PROMOTION.fulfilled: {
      return {
        ...state,
        actionLoading: false,
        error: false,
      };
    }
    case promoActionTypes.ACTIVATE_PROMOTION.rejected: {
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

export default promotionReducer;
