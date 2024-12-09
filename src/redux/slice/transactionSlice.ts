import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDataTransaction } from "../types/TransactionType";
import { transactionThunk } from "../actions/TransactionAction";

interface TransactionState {
  transactions: IDataTransaction[];
  loading: boolean;
  error?: string;
}

const initialState: TransactionState = {
  transactions: [],
  loading: false,
  error: undefined,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    clearError(state) {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(transactionThunk.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(
        transactionThunk.fulfilled,
        (state, action: PayloadAction<IDataTransaction[]>) => {
          state.loading = false;
          state.transactions = action.payload;
        }
      )
      .addCase(transactionThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || "Failed to fetch transactions.";
      });
  },
});

export const transactionActions = {
  ...transactionSlice.actions,
  transactionThunk,
};

export type transactionState = ReturnType<typeof transactionSlice.reducer>;
export const transactionReducer = transactionSlice.reducer;
