import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRegisterResponse, IUserBody } from "../types/UserType";
import axios, { AxiosError, AxiosResponse } from "axios";

export const userInputThunk = createAsyncThunk<
  IUserBody[],
  IUserBody,
  { rejectValue: { error: Error; status?: number } }
>("createUserTunk", async (params: IUserBody, { rejectWithValue }) => {
  try {
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/register`;
    const result: AxiosResponse<IRegisterResponse> = await axios.post(
      url,
      params
    );

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
