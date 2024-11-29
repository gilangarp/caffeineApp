import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInputThunk } from "../actions/UserActions";
import { IUserBody } from "../types/UserType";

export interface IUserState {
  dataUser: IUserBody[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IUserState = {
  isLoading: false,
  dataUser: [],
  error: null,
};

const UserInputSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<IUserBody[]>) => {
      state.dataUser = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userInputThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userInputThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "An error occurred";
      })
      .addCase(userInputThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataUser = action.payload;
        state.error = null;
      });
  },
});

export const UserInputActions = {
  ...UserInputSlice.actions,
  userInputThunk,
};

export type UserInputState = ReturnType<typeof UserInputSlice.reducer>;
export const UserInputReducer = UserInputSlice.reducer;
