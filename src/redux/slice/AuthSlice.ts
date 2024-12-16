import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginThunk } from "../actions/AuthActions";

export interface IAuthState {
  token: string | null;
  role: string | null;
  id: string | null;
  isLoading: boolean;
  isRejected: boolean;
  isFulfilled: boolean;
  errorMessage: string | null;
}

const initialState: IAuthState = {
  token: null,
  role: null,
  id: null,
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
  errorMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
    setRole: (state, action: PayloadAction<{ role: string }>) => {
      state.role = action.payload.role;
    },
    setId: (state, action: PayloadAction<{ id: string }>) => {
      state.id = action.payload.id;
    },
    removeToken: (state) => {
      state.token = null;
    },
    removeRole: (state) => {
      state.role = null;
    },
    removeId: (state) => {
      state.id = null;
    },
    logout: (state) => {
      state.token = null;
      state.id = null;
      state.role = null;
      state.isLoading = false;
      state.isRejected = false;
      state.isFulfilled = false;
      state.errorMessage = null;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.isFulfilled = false;
        state.isRejected = false;
        state.errorMessage = null;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isRejected = true;
        state.errorMessage = payload?.error || "An error occurred.";
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.role = payload.role;
        state.id = payload.id;
        state.isLoading = false;
        state.isFulfilled = true;
        state.errorMessage = null;
      });
  },
});

export const authAction = {
  ...authSlice.actions,
  loginThunk,
};

export type authState = ReturnType<typeof authSlice.reducer>;
export const authReducer = authSlice.reducer;
