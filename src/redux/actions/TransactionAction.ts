import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPagination } from "../types/Pagiination";
import { IFilterHistoryOrder, IHistoryOrderBody, IHistoryResponse } from "../types/TransactionType";
import axios, { AxiosError, AxiosResponse } from "axios";

  export const historyOrderThunk = createAsyncThunk<
    { history: IHistoryOrderBody[]; pagination: IPagination },
    { filters: IFilterHistoryOrder; currentPage: number; historyPerPage: number , uuid: string },
    { rejectValue: { error: Error; status?: number } }
  >(
    "historyOrder/fetchHistory",
    async ({ filters, currentPage, historyPerPage,uuid }, { rejectWithValue }) => {
      try {
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/transaction/history-order/${uuid}`;
        
        const result: AxiosResponse<IHistoryResponse> = await axios.get(url, {
          params: { ...filters, page: currentPage, limit: historyPerPage },
        });
        return {
          history: result.data.data,
          pagination: {
            totalData: result.data.meta?.totalData || 0,
            totalPages: result.data.meta?.totalPage || 1,
            prevLink: result.data.meta?.prevLink || null,
            nextLink: result.data.meta?.nextLink || null,
            currentPage,
          },
        };
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