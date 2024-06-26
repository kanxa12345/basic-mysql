import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/reducerSlice/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => [logger, sagaMiddleware],
});

export const persistor = persistStore(store);
