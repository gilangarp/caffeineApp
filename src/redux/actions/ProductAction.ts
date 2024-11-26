import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { IFilters, IProductBody, IProductResponse } from "../types/ProductType";
import { IPagination } from "../types/Pagiination";

export const productThunk = createAsyncThunk<
  { products: IProductBody[]; pagination: IPagination },
  { filters: IFilters; currentPage: number; productsPage: number },
  { rejectValue: { error: string; status?: number } }
>(
  "product/fetch",
  async ({ filters, currentPage, productsPage }, { rejectWithValue }) => {
    try {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/product`;
      const result: AxiosResponse<IProductResponse> = await axios.get(url, {
        params: { ...filters, page: currentPage, limit: productsPage },
      });
      return {
        products: result.data.data,
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
        const errorMessage = error.response?.data?.error?.message || "An unexpected error occurred";
        const status = error.response?.status;

        console.log(errorMessage);
        return rejectWithValue({
          error: errorMessage,
          status: status,
        });
      }
      return rejectWithValue({
        error: "An unexpected error occurred.",
      });
    }
  }
);
