import { combineReducers } from "redux";
import authReducer from "./auth";
import userReducer from "./users";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
});
