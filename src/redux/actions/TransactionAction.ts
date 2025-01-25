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
import { IOrderDetail } from "../types/TransactionType";
import axios, { AxiosError, AxiosResponse } from "axios";

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
  { id: string; token: string },
  { rejectValue: { error: Error; status?: number } }
>("historyOrder/fetchHistory", async ({ id, token }, { rejectWithValue }) => {
  try {
    const url = `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/transaction/detail-history/${id}`;
    const result: AxiosResponse<{ data: IOrderDetail[] }> = await axios.get(
      url,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
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
  IDataTransaction,
  ITransactionWithDetailsBody,
  { rejectValue: { error: string; status?: number } }
>(
  "transaction/create",
  async (data: ITransactionWithDetailsBody, { rejectWithValue }) => {
    try {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/transaction/add`;
      const token = data.token;
      const result: AxiosResponse<ITransactionResponse> = await axios.post(
        url,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return result.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Axios Error:",
          error.response?.data?.error?.message || error.message
        );
        const errorMessage =
          error.response?.data?.error?.message ||
          "An unexpected error occurred";
        const status = error.response?.status;
        return rejectWithValue({
          error: errorMessage,
          status: status,
        });
      }
      console.error("Unexpected Error:", error);
      return rejectWithValue({
        error: "An unexpected error occurred.",
      });
    }
  }
);
