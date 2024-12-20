import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDetailCardProduct, ITransactionProduct } from "../types/ProductType";

export interface IProductState {
  checkout: ITransactionProduct[];
  productInfo: IDetailCardProduct[];
  isLoading: boolean;
}

const initialState: IProductState = {
  checkout: [],
  productInfo: [],
  isLoading: false,
};

const checkoutSlice = createSlice({
  name: "checkoutSlice",
  initialState,
  reducers: {
    checkoutProduct: (state, action: PayloadAction<ITransactionProduct>) => {
      const existingProduct = state.checkout.find(
        (product) =>
          product.id === action.payload.id &&
          product.size_id === action.payload.size_id &&
          product.ice_hot === action.payload.ice_hot
      );

      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        state.checkout.push({ ...action.payload, count: 1 });
      }
    },

    removeProduct: (state, action: PayloadAction<number>) => {
      if (action.payload >= 0 && action.payload < state.checkout.length) {
        state.checkout.splice(action.payload, 1); 
      }
    },

    removeAll: (state) => {
      state.checkout = [];
    },

    decreaseProduct: (state, action: PayloadAction<ITransactionProduct>) => {
      const existingProduct = state.checkout.find(
        (product) =>
          product.id === action.payload.id &&
          product.size_id === action.payload.size_id &&
          product.ice_hot === action.payload.ice_hot
      );

      if (existingProduct) {
        if (existingProduct.count > 1) {
          existingProduct.count -= 1; 
        } else {
          state.checkout = state.checkout.filter(
            (product) => product !== existingProduct
          ); 
        }
      }
    },
  },
  extraReducers: () => {},
});

export const checkoutAction = {
  ...checkoutSlice.actions,
};
export type checkoutState = ReturnType<typeof checkoutSlice.reducer>;
export const checkoutReducer = checkoutSlice.reducer;
