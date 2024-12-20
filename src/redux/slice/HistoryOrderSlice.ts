import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { historyOrderThunk } from "../actions/TransactionAction";
import { IPagination } from "../types/Pagiination";
import {
  IFilterHistoryOrder,
  IHistoryOrderBody,
} from "../types/TransactionType";

export interface IHistoryOrderState {
  isLoading: boolean;
  history: IHistoryOrderBody[];
  filter: IFilterHistoryOrder[];
  pagination: IPagination;
}

const initialState: IHistoryOrderState = {
  isLoading: false,
  history: [],
  filter: [],
  pagination: {
    prevLink: null,
    nextLink: null,
    currentPage: 1,
    totalPages: 1,
  },
};

const historySlice = createSlice({
  name: "historyOrder",
  initialState,
  reducers: {
    setHistory: (state, action: PayloadAction<IHistoryOrderBody[]>) => {
      state.history = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(historyOrderThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(historyOrderThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.history = action.payload.history;
        state.pagination = action.payload.pagination;
      });
  },
});

export const historyOrderActions = {
  ...historySlice.actions,
  historyOrderThunk,
};

export type HistoryOrderState = ReturnType<typeof historySlice.reducer>;
export const historyOrderReducer = historySlice.reducer;
