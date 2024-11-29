import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { testimonialInputThunk } from "../actions/TestimonialAction";
import { IRejectValue } from "../types/TestimonialType";

interface TestimonialState {
  user_id: string | null;
  comment: string | null;
  rating: number | null;
  loading: boolean; 
  error: string | null;
}

const initialState: TestimonialState = {
  user_id: null,
  comment: null,
  rating: null,
  loading: false,
  error: null,
};

const testimonialInputSlice = createSlice({
  name: 'testimonial',
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(testimonialInputThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(testimonialInputThunk.fulfilled, (state, action: PayloadAction<{ user_id: string; comment: string; rating: number }>) => {
        state.loading = false;
        state.user_id = action.payload.user_id;
        state.comment = action.payload.comment;
        state.rating = action.payload.rating;
      })
      .addCase(testimonialInputThunk.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          const { error }: IRejectValue = action.payload;
          state.error = error;
        } else {
          state.error = 'An unexpected error occurred';
        }
      });
  },
});

export type testimonialInputState = ReturnType<typeof testimonialInputSlice.reducer>;
export const testimonialInputReducer = testimonialInputSlice.reducer;

