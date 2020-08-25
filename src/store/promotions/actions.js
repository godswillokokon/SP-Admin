import api from "utils/api";
import promoActionTypes from "./actionTypes";

export const createPromo = ({ ...data }) => (dispatch) => {
  const payload = api.post("/api/promotions", { ...data });
  return dispatch({
    type: promoActionTypes.CREATE_PROMOTION.default,
    payload,
  });
};
// FETCH PromoS
export const fetchAllPromo = () => (dispatch) => {
  const payload = api.get("/api/admin/promotions");
  return dispatch({ type: promoActionTypes.FETCH_PROMOTION.default, payload });
};
export const updatePromo = ({ id, data }) => (dispatch) => {
  const payload = api.patch(`/api/promotions/${id}`, { ...data });
  return dispatch({
    type: promoActionTypes.UPDATE_PROMOTION.default,
    payload,
  });
};
// Promo
export const deletePromo = (id) => (dispatch) => {
  const payload = api.delete(`/api/Promo/${id}`);
  return dispatch({ type: promoActionTypes.DELETE_PROMOTION.default, payload });
};

export const activatePromo = (id) => (dispatch) => {
  const payload = api.get(`/api/promotions/${id}/activate`);
  return dispatch({
    type: promoActionTypes.ACTIVATE_PROMOTION.default,
    payload,
  });
};
export const deactivatePromo = (id) => (dispatch) => {
  const payload = api.get(`/api/promotions/${id}/deactivate`);
  return dispatch({
    type: promoActionTypes.DEACTIVATE_PROMOTION.default,
    payload,
  });
};
