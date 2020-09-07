import isPromise from "../utils/isPromise";

export default function asyncError(store) {
  return next => action => {
    if (!isPromise(action.payload)) {
      return next(action);
    }
    return next(action).catch(error => {
      throw error;
    });
  };
}
