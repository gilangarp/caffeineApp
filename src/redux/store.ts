import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { PersistConfig } from "redux-persist/lib/types";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import { authState } from "./reducers/AuthReducer";
import authSlice from './reducers/AuthReducer';

const authPersistConfig: PersistConfig<authState> = {
  key: "token",
  storage,
  whitelist: ["token"  , "id" ],
};
const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializeableCheck: false,
      immutableCheck: false,
    }),
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
