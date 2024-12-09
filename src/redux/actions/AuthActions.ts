import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { IAuthResponse } from "../types/AuthType";

export const loginThunk = createAsyncThunk<
  { token: string; id: string },
  { user_email: string; user_pass: string },
  { rejectValue: { error: string; status?: number } }
>(
  "auth/login",
  async (form, { rejectWithValue }) => {
    try {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/login`;
      const result: AxiosResponse<IAuthResponse> = await axios.post(url, form);
      const { token, id } = result.data.data[0];
      return { token, id };
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.error?.message || "An unexpected error occurred";
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