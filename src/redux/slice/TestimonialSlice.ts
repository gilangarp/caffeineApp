import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITestimonialBody } from "../types/TestimonialType";
import { IPagination } from "../types/Pagiination";
import { testimonialThunk } from "../actions/TestimonialAction";

interface ITestimonialState {
  user: ITestimonialBody[];
  pagination: IPagination;
  loading: boolean;
}

const initialState: ITestimonialState = {
  user: [],
  pagination: {
    prevLink: null,
    nextLink: null,
    currentPage: 1,
    totalPages: 1,
  },
  loading: false,
};

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState,
  reducers: {
    setTestimonials: (
      state,
      { payload }: PayloadAction<ITestimonialBody[]>
    ) => {
      state.user = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(testimonialThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(testimonialThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.pagination = action.payload.pagination;
      })
      .addCase(testimonialThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const testimonialActions = {
  ...testimonialSlice.actions,
  testimonialThunk,
};

export type testimonialState = ReturnType<typeof testimonialSlice.reducer>;
export const testimonialReducer = testimonialSlice.reducer;
