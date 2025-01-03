import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProfileBody, IProfileInputBody, IProfileResponse, IUsersParams } from "../types/ProfileType";
import axios, { AxiosError, AxiosResponse } from "axios";

export const profileThunk = createAsyncThunk<
  IProfileBody[],
  IUsersParams,
  { rejectValue: { error: Error; status?: number } }
>("productThunk", async (params: IUsersParams, { rejectWithValue }) => {
  try {
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/profile/${params.id}`;
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
  { rejectValue: { error: Error; status?: number } }
>("createUserThunk", async (params: IProfileInputBody, { rejectWithValue }) => {
  try {
    console.log("Debug - profile_image:", params.profile_image);
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/profile/setting/${params.id}`;
    const result: AxiosResponse<IProfileResponse> = await axios.patch(url, params,{
      headers: {
        'Content-Type': 'multipart/form-data',
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
