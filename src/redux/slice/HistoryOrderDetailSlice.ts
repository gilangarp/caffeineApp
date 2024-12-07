import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { historyOrderDetailThunk } from "../actions/TransactionAction";
import { IOrderDetail } from "../types/TransactionType";

interface HistoryOrderDetailState {
  data: IOrderDetail[];
  loading: boolean;
  error: string | null;
}

const initialState: HistoryOrderDetailState = {
  data: [],
  loading: false,
  error: null,
};

const historyOrderDetailSlice = createSlice({
  name: "historyOrderDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(historyOrderDetailThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        historyOrderDetailThunk.fulfilled,
        (state, action: PayloadAction<IOrderDetail[]>) => {
          state.data = action.payload;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(historyOrderDetailThunk.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload.error.message || "Unknown error";
        } else {
          state.error = "An error occurred";
        }
      });
  },
});

export const historyOrderDetailAction = {
  ...historyOrderDetailSlice.actions,
  historyOrderDetailThunk,
};

export type historyOrderDetailState = ReturnType<typeof historyOrderDetailSlice.reducer>;
export const historyOrderDetailReducer = historyOrderDetailSlice.reducer;
