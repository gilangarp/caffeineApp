import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import {
  IDetailCardProduct,
  IDetailProduct,
  IProductBody,
  IProductDetailCardResponse,
  IProductDetailResponse,
  IProductResponse,
  IProductThunkArgs,
} from "../types/ProductType";
import { IPagination } from "../types/Pagiination";

export const productThunk = createAsyncThunk<
  { products: IProductBody[]; pagination: IPagination },
  IProductThunkArgs,
  { rejectValue: { error: string; status?: number } }
>(
  "product/fetch",
  async ({ filters, currentPage, productsPage }, { rejectWithValue }) => {
    // Cek apakah data produk sudah ada di localStorage
    const cacheKey = `products_${JSON.stringify(
      filters
    )}_${currentPage}_${productsPage}`;
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      // Jika data ada di localStorage, langsung parse dan kembalikan data
      const parsedData = JSON.parse(cachedData);
      return {
        products: parsedData.products,
        pagination: parsedData.pagination,
      };
    }

    try {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/product`;
      const result: AxiosResponse<IProductResponse> = await axios.get(url, {
        params: { ...filters, page: currentPage, limit: productsPage },
      });

      // Simpan data ke localStorage setelah berhasil mengambil dari API
      const dataToCache = {
        products: result.data.data,
        pagination: {
          totalData: result.data.meta?.totalData || 0,
          totalPages: result.data.meta?.totalPage || 1,
          prevLink: result.data.meta?.prevLink || null,
          nextLink: result.data.meta?.nextLink || null,
          currentPage,
        },
      };
      localStorage.setItem(cacheKey, JSON.stringify(dataToCache));

      return dataToCache;
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.error?.message ||
          "An unexpected error occurred";
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
  }
);

export const productDetailThunk = createAsyncThunk<
  IDetailProduct[],
  { id: string },
  { rejectValue: { error: string; status?: number } }
>("product/fetchDetail", async ({ id }, { rejectWithValue }) => {
  const cacheKey = `product_detail_${id}`;
  const cachedData = localStorage.getItem(cacheKey);
  if (cachedData) {
    const parsedData = JSON.parse(cachedData);
    return parsedData;
  }
  try {
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/product/detail/${id}`;
    const result: AxiosResponse<IProductDetailResponse> = await axios.get(url);
    const productData = result.data.data;
    const dataToReturn = Array.isArray(productData)? productData: [productData];
    localStorage.setItem(cacheKey, JSON.stringify(dataToReturn));

    return dataToReturn;
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

export const productDetailCardThunk = createAsyncThunk<
  IDetailCardProduct[],
  { id: string },
  { rejectValue: { error: string; status?: number } }
>(
  "product/fetchDetailCard",
  async ({ id }, { rejectWithValue }) => {
    const cacheKey = `product_detail_card_${id}`;
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      return parsedData;
    }
    try {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/product/detail-card/${id}`;
      const result: AxiosResponse<IProductDetailCardResponse> = await axios.get(url);
      const productData = result.data.data;
      localStorage.setItem(cacheKey, JSON.stringify(productData));

      return productData;
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
  }
);
