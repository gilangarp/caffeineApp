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
      const newCheckout = [...state.checkout];
      const index = newCheckout.findIndex(
        (product) =>
          product.id === action.payload.id &&
          product.size_id === action.payload.size_id &&
          product.ice_hot === action.payload.ice_hot &&
          product.img_product === action.payload.img_product &&
          product.product_name === action.payload.product_name &&
          product.product_price === action.payload.product_price &&
          product.discount_price === action.payload.discount_price
      );
      if (index > -1) {
        const selectedCheckout = { ...newCheckout[index] };
        selectedCheckout.count += 1;
        newCheckout[index] = selectedCheckout;
        state.checkout = newCheckout;
      } else {
        newCheckout.push(action.payload);
        state.checkout = newCheckout;
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const newCheckout = state.checkout.filter(
        (_, index) => index !== action.payload
      );
      state.checkout = newCheckout;
    },
    removeAll: (state) => {
      state.checkout = []; 
    },
  },
  extraReducers: () => {
  },
});


export const checkoutAction = {
  ...checkoutSlice.actions,
};
export type checkoutState = ReturnType<typeof checkoutSlice.reducer>;
export const checkoutReducer = checkoutSlice.reducer;
