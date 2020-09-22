import propertyActionTypes from "./actionTypes";
import parseError from "utils/ParseError";

const initialState = {
  data: null,
  landData: null,
  actionLoading: false,
  loading: false,
  error: null,
};

export const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case propertyActionTypes.CREATE_HOUSE_PROPERTY.pending:
    case propertyActionTypes.CREATE_LAND_PROPERTY.pending:
    case propertyActionTypes.DELETE_HOUSE.pending:
    case propertyActionTypes.EDIT_HOUSE.pending: {
      return {
        ...state,
        actionLoading: true,
        error: false,
      };
    }
    case propertyActionTypes.CREATE_HOUSE_PROPERTY.fulfilled:
    case propertyActionTypes.CREATE_LAND_PROPERTY.fulfilled:
    case propertyActionTypes.DELETE_HOUSE.fulfilled:
    case propertyActionTypes.EDIT_HOUSE.fulfilled: {
      return {
        ...state,
        actionLoading: false,
        error: false,
      };
    }
    case propertyActionTypes.CREATE_HOUSE_PROPERTY.rejected:
    case propertyActionTypes.CREATE_LAND_PROPERTY.rejected:
    case propertyActionTypes.DELETE_HOUSE.rejected:
    case propertyActionTypes.EDIT_HOUSE.rejected: {
      return {
        ...state,
        actionLoading: false,
        error: parseError(action.payload),
      };
    }
    case propertyActionTypes.GET_HOUSE.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case propertyActionTypes.GET_HOUSE.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
        data: { ...action.payload.data },
      };
    }
    case propertyActionTypes.GET_HOUSE.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }

    case propertyActionTypes.GET_LANDS.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case propertyActionTypes.GET_LANDS.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
        landData: { ...action.payload.data },
      };
    }
    case propertyActionTypes.GET_LANDS.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }
    case propertyActionTypes.GET_SINGLE_HOUSE.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case propertyActionTypes.GET_SINGLE_HOUSE.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
        data: { ...action.payload.data },
      };
    }
    case propertyActionTypes.GET_SINGLE_HOUSE.rejected: {
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

export default propertyReducer;
