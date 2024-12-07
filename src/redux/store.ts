import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { PersistConfig } from "redux-persist/lib/types";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import { productReducer, productState } from "./slice/ProductSlice";
import { authState, authReducer } from "./slice/AuthSlice";
import { selectProductReducer } from "./slice/SelectProductSlice";
import { productDetailReducer } from "./slice/ProducDetailtSlice";
import { testimonialReducer } from "./slice/TestimonialSlice";
import { checkoutReducer, checkoutState } from "./slice/CheckoutSlice";
import { testimonialInputReducer } from "./slice/TestimonialInputSlice";
import { historyOrderReducer } from "./slice/HistoryOrderSlice";
import { profileReducer } from "./slice/ProfileSlice";
import { profileSettingReducer } from "./slice/ProfileSettingSlice";
import { UserInputReducer } from "./slice/UserInputSlice";
import { historyOrderDetailReducer } from "./slice/HistoryOrderDetailSlice";

const authPersistConfig: PersistConfig<authState> = {
  key: "auth-token",
  storage,
  whitelist: ["token", "id"],
};
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const productPersistConfig: PersistConfig<productState> = {
  key: "product-coffee",
  storage,
  whitelist: ["id", "uuid"],
};
const persistedProductReducer = persistReducer( productPersistConfig, productReducer);

const checkoutPersistConfig: PersistConfig<checkoutState> = {
  key: "checkout",
  storage
};
const persistedCheckoutReducer = persistReducer(checkoutPersistConfig , checkoutReducer)


export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    profile: profileReducer,
    profileSetting: profileSettingReducer,
    product: persistedProductReducer,
    selectProduct: selectProductReducer,
    checkout: persistedCheckoutReducer,
    detailProduct: productDetailReducer,
    testimonial: testimonialReducer,
    testimonialIput: testimonialInputReducer,
    historyOrder: historyOrderReducer,
    register: UserInputReducer,
    detailHistory: historyOrderDetailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
      immutableCheck: false,
    }),
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
