import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IProfileBody,
  IProfileInputBody,
  IProfileResponse,
  IUsersParams,
} from "../types/ProfileType";
import axios, { AxiosError, AxiosResponse } from "axios";

export const profileThunk = createAsyncThunk<
  IProfileBody[],
  IUsersParams,
  { rejectValue: { error: Error; status?: number } }
>("productThunk", async (params: IUsersParams, { rejectWithValue }) => {
  try {
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/profile/${
      params.id
    }`;
    const result: AxiosResponse<IProfileResponse> = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${params.token}`,
      },
    });
    return result.data.data;
  } catch (error) {
    if (error instanceof AxiosError)
      return rejectWithValue({
        error: error.response?.data,
        status: error.status,
      });
    throw error;
  }
});

export const profileSettingThunk = createAsyncThunk<
  IProfileBody[],
  IProfileInputBody,
  { rejectValue: { error: string; status?: number } }
>("createUserThunk", async (params: IProfileInputBody, { rejectWithValue }) => {
  try {
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/profile/setting/${
      params.id
    }`;
    const token = params.token;
    const result: AxiosResponse<IProfileResponse> = await axios.patch(
      url,
      params,
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
