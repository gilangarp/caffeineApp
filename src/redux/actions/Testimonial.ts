import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPagination } from "../types/Pagiination";
import { ITestimonialBody, ITestimonialResponse } from "../types/TestimonialType";
import axios, { AxiosResponse } from "axios";

export const testimonialThunk = createAsyncThunk<
  { user: ITestimonialBody[]; pagination: IPagination },
  { currentPage: number; testimonialPage: number },
  { rejectValue: { error: string; status?: number } }
>(
  "testimonial/fetch",
  async ({ currentPage, testimonialPage }, { rejectWithValue }) => {
    const cacheKey = `testimonials_${currentPage}_${testimonialPage}`;
    const cachedData = localStorage.getItem(cacheKey);
    
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      return {
        user: parsedData.user,
        pagination: parsedData.pagination,
      };
    }

    try {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/testimonial`;
      const result: AxiosResponse<ITestimonialResponse> = await axios.get(url, {
        params: { page: currentPage, limit: testimonialPage },
      });
      const dataToCache = {
        user: result.data.data,
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
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.error?.message || "An unexpected error occurred";
        return rejectWithValue({
          error: errorMessage,
          status: error.response?.status,
        });
      }
      return rejectWithValue({
        error: "An unexpected error occurred.",
      });
    }
  }
);
