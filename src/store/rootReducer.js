import { combineReducers } from "redux";
import authReducer from "./auth";
import userReducer from "./users";
import allUserReducer from "./allUsers";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  allUsers: allUserReducer,
});
