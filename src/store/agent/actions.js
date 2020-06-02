import api from "utils/api";
import agentActionTypes from "./actionTypes";

export const createAgent = ({ ...data }) => (dispatch) => {
  const payload = api.post("/api/agent	", { ...data });
  console.log("sskk ");
  return dispatch({
    type: agentActionTypes.CREATE_AGENT.default,
    payload,
  });
};
