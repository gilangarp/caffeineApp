import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPagination } from "../types/Pagiination";
import {
  IDataTransaction,
  IFilterHistoryOrder,
  IHistoryOrderBody,
  IHistoryResponse,
  ITransactionResponse,
  ITransactionWithDetailsBody,
} from "../types/TransactionType";
import axios, { AxiosError, AxiosResponse } from "axios";
import { IOrderDetail } from "../types/TransactionType";

export const historyOrderThunk = createAsyncThunk<
  { history: IHistoryOrderBody[]; pagination: IPagination },
  {
    filters: IFilterHistoryOrder;
    uuid: string;
    currentPage: number;
    historyPerPage: number;
  },
  { rejectValue: { error: Error; status?: number } }
>(
  "historyOrder/fetchHistory",
  async (
    { filters = {}, uuid, currentPage, historyPerPage },
    { rejectWithValue }
  ) => {
    try {
      const url = `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/transaction/history-order/${uuid}`;
      const result: AxiosResponse<IHistoryResponse> = await axios.get(url, {
        params: { ...filters, page: currentPage, limit: historyPerPage },
      });

      const dataToCache = {
        history: result.data.data,
        pagination: {
          totalData: result.data.meta?.totalData || 0,
          totalPages: result.data.meta?.totalPage || 1,
          prevLink: result.data.meta?.prevLink || null,
          nextLink: result.data.meta?.nextLink || null,
          currentPage,
        },
      };
      return dataToCache;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue({
          error: error.response?.data || new Error("An error occurred"),
          status: error.response?.status,
        });
      }
      return rejectWithValue({ error: new Error("An unknown error occurred") });
    }
  }
);

export const historyOrderDetailThunk = createAsyncThunk<
  IOrderDetail[],
  { id: string },
  { rejectValue: { error: Error; status?: number } }
>("historyOrder/fetchHistory", async ({ id }, { rejectWithValue }) => {
  try {
    const url = `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/transaction/detail-history/${id}`;
    const result: AxiosResponse<{ data: IOrderDetail[] }> = await axios.get(
      url
    );
    return result.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue({
        error: error.response?.data || new Error("An error occurred"),
        status: error.response?.status,
      });
    }
    return rejectWithValue({ error: new Error("An unknown error occurred") });
  }
});

export const transactionThunk = createAsyncThunk<
  IDataTransaction[],
  ITransactionWithDetailsBody,
  { rejectValue: { error: string; status?: number } }
>("transaction/create", async (form, { rejectWithValue }) => {
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/transaction/add`;
  try {
    const result: AxiosResponse<ITransactionResponse> = await axios.post(
      url,
      form
    );
    return result.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage =
        error.response?.data?.error?.message || "An unexpected error occurred";
      const status = error.response?.status;
      return rejectWithValue({
        error: errorMessage,
        status: status,
      });
    }
    return rejectWithValue({
      error: "An unexpected error occurred.",
    });
  }
});
