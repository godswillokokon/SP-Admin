import { combineReducers } from "redux";
import authReducer from "./auth";
import propertyReducer from "./property";
import userReducer from "./users";
import allUserReducer from "./allUsers";

export default combineReducers({
	auth: authReducer,
	properties: propertyReducer,
	user: userReducer,
	allUsers: allUserReducer,
});
