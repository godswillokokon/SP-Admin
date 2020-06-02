import { combineReducers } from "redux";
import authReducer from "./auth";
import propertyReducer from "./property";
import userReducer from "./users";
import allUserReducer from "./allUsers";
import agentReducer from "./agent";

export default combineReducers({
  auth: authReducer,
  properties: propertyReducer,
  user: userReducer,
  allUsers: allUserReducer,
  agent: agentReducer,
});
