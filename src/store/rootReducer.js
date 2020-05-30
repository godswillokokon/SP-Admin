import { combineReducers } from "redux";
import authReducer from "./auth";
import propertyReducer from "./property";

export default combineReducers({
	auth: authReducer,
	properties: propertyReducer,
});
