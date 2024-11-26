import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  currentImage: string;
  count: number;
  selectedSize?: number;
  selectedOption?: number;
}

const initialState: ProductState = {
  currentImage: "",
  count: 1,
  selectedSize: undefined,
  selectedOption: undefined,
};

const selectProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCurrentImage(state, action: PayloadAction<string>) {
      state.currentImage = action.payload;
    },
    incrementCount(state) {
      state.count += 1;
    },
    decrementCount(state) {
      if (state.count > 1) {
        state.count -= 1;
      }
    },
    setSize(state, action: PayloadAction<number>) {
      state.selectedSize = action.payload;
    },
    setOption(state, action: PayloadAction<number>) {
      state.selectedOption = action.payload;
    },
    reset(state) {
      state.count = 1;
      state.selectedSize = undefined;
      state.selectedOption = undefined;
    },
  },
});

export const selectProductActions = selectProductSlice.actions;

export const selectProductReducer = selectProductSlice.reducer;
