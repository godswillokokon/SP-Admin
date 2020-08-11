import { combineReducers } from "redux";
import authReducer from "./auth";
import propertyReducer from "./property";
import userReducer from "./users";
import allUserReducer from "./allUsers";
import categoryReducer from "./categories";
import agentReducer from "./agent";
import careerReducer from "./career";
import onlineInspectionReducer from "./onlineInspection";
import expertReducer from "./experts";
import reservedHouseReducer from "./reservedHouse";

export default combineReducers({
  auth: authReducer,
  properties: propertyReducer,
  user: userReducer,
  allUsers: allUserReducer,
  categories: categoryReducer,
  agent: agentReducer,
  career: careerReducer,
  onlineInspection: onlineInspectionReducer,
  experts: expertReducer,
  reservedHouse: reservedHouseReducer,
});
