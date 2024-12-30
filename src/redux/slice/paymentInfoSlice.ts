import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPaymentInfoState {
  user_email: string;
  user_fullname: string;
  user_address: string;
  selected_delivery: number;
  selected_payment: string;
}

const initialState: IPaymentInfoState = {
  user_email: "",
  user_fullname: "",
  user_address: "",
  selected_delivery: 1,
  selected_payment: "",
};

const paymentInfoSlice = createSlice({
  name: "paymentInfo",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.user_email = action.payload;
    },
    setFullName: (state, action: PayloadAction<string>) => {
      state.user_fullname = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.user_address = action.payload;
    },
    setDelivery: (state, action: PayloadAction<number>) => {
      state.selected_delivery = action.payload;
    },
    setPayment: (state, action: PayloadAction<string>) => {
      state.selected_payment = action.payload;
    },
  },
});

export const paymentInfoActions = paymentInfoSlice.actions;

export type PaymentInfoState = ReturnType<typeof paymentInfoSlice.reducer>;
export const paymentInfoReducer = paymentInfoSlice.reducer;
