import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { IDetailCardProduct, IDetailProduct, IFilters, IProductBody, IProductDetailCardResponse, IProductDetailResponse, IProductResponse } from "../types/ProductType";
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
        const errorMessage =
          error.response?.data?.error?.message ||
          "An unexpected error occurred";
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

export const productDetailThunk = createAsyncThunk<
  IDetailProduct[],
  { id: string },
  { rejectValue: { error: Error; status?: number } }
>("productThunk", async (params: { id: string }, { rejectWithValue }) => {
  try {
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/product/detail/${params.id}`;
    const result: AxiosResponse<IProductDetailResponse> = await axios.get(url);

    if (Array.isArray(result.data.data)) {
      return result.data.data;
    } else {
      return rejectWithValue({
        error: new Error("Expected an array of products"),
        status: 400,
      });
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue({
        error: error.response?.data,
        status: error.status,
      });
    }
    throw error;
  }
});

export const productDetailCardThunk = createAsyncThunk<
  IDetailCardProduct[],
  { uuid: string },
  { rejectValue: { error: Error; status?: number } }
>("productDetailCardThunk", async ({ uuid }, { rejectWithValue }) => {
  try {
    const url = `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/product/detail-card/${uuid}`;
    const result: AxiosResponse<IProductDetailCardResponse> = await axios.get(
      url
    );
    return result.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({
        error: error.response?.data || new Error("Network Error"),
        status: error.response?.status,
      });
    }
    return rejectWithValue({
      error: new Error("An unexpected error occurred"),
      status: 500,
    });
  }
});
