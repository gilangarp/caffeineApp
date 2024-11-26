import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { PersistConfig } from "redux-persist/lib/types";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import { productReducer, productState } from "./slice/ProductSlice";
import { authState, authReducer } from "./slice/AuthSlice";
import { selectProductReducer } from "./slice/SelectProductSlice";
import { productDetailReducer } from "./slice/ProducDetailtSlice";
import { checkoutReducer, checkoutState } from "./slice/checkoutSlice";

const authPersistConfig: PersistConfig<authState> = {
  key: "token",
  storage,
  whitelist: ["token", "id"],
};
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const productPersistConfig: PersistConfig<productState> = {
  key: "product:coffee",
  storage,
  whitelist: ["id", "uuid"],
};

const checkoutPersistConfig: PersistConfig<checkoutState> = {
  key: "root",
  storage
};
const persistedCheckoutReducer = persistReducer(checkoutPersistConfig , checkoutReducer)

const persistedProductReducer = persistReducer(
  productPersistConfig,
  productReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    product: persistedProductReducer,
    selectProduct: selectProductReducer,
    detailProduct: productDetailReducer,
    checkout: persistedCheckoutReducer,
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
