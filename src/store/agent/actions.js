import api from "utils/api";
import agentActionTypes from "./actionTypes";

export const createAgent = ({ ...data }) => (dispatch) => {
  const payload = api.post("/api/agent", { ...data });
  console.log("sskk ");
  return dispatch({
    type: agentActionTypes.CREATE_AGENT.default,
    payload,
  });
};
export const fetchAllAgent = () => (dispatch) => {
  const payload = api.get("/api/agents");
  return dispatch({ type: agentActionTypes.FETCH_AGENT.default, payload });
};
