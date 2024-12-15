import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInputThunk } from "../actions/UserActions";
import { IUserBody } from "../types/UserType";

export interface IUserState {
  dataUser: IUserBody[];
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: IUserState = {
  isLoading: false,
  dataUser: [],
  error: null,
  success: false,
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
    resetState: (state) => {
      state.isLoading = false;
      state.dataUser = [];
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userInputThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(userInputThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error || "An error occurred";
        state.success = false;
      })
      .addCase(userInputThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataUser = action.payload;
        state.error = null;
        state.success = true;
      });
  }  
});

export const UserInputActions = {
  ...UserInputSlice.actions,
  userInputThunk,
};

export type UserInputState = ReturnType<typeof UserInputSlice.reducer>;
export const UserInputReducer = UserInputSlice.reducer;
