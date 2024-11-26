import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDetailProduct } from "../types/ProductType";
import { productDetailThunk } from "../actions/ProductAction";

export interface IProductState {
  isLoading: boolean;
  productDetail: IDetailProduct[];
}

const initialState: IProductState = {
  isLoading: false,
  productDetail: [],
};

const producDetailtSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProductDetail: (state, action: PayloadAction<IDetailProduct[]>) => {
      state.productDetail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productDetailThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(productDetailThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(productDetailThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetail = action.payload; 
      });
  },
});

export const producDetailtAction = {
  ...producDetailtSlice.actions,
  productDetailThunk,
};

export type productDetailState = ReturnType<typeof producDetailtSlice.reducer>;
export const productDetailReducer = producDetailtSlice.reducer;

