import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import reducers from "./rootReducer";
import asyncError from "middleware/asyncError";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
	applyMiddleware(asyncError, reduxThunk, promise)
);

const persistConfig = {
	key: "spreadprolimited.com",
	storage,
	stateReconciler: autoMergeLevel2,
	whitelist: ["auth", "user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, enhancers);
export const persistor = persistStore(store);

export default store;
