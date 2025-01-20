import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProfileBody } from "../types/ProfileType";
import { profileSettingThunk } from "../actions/ProfileAction";
import { userSettingThunk } from "../actions/UserActions";

export interface IUserState {
  dataUserEdit: IProfileBody[];
  isLoading: boolean;
  errorMessage: string | null;
}

const initialState: IUserState = {
  isLoading: false,
  dataUserEdit: [],
  errorMessage: null,
};

const profileSettingSlice = createSlice({
  name: "profileSetting",
  initialState,
  reducers: {
    submitDataUser: (state, action: PayloadAction<IProfileBody[]>) => {
      state.dataUserEdit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(profileSettingThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(profileSettingThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMessage = payload?.error || "An error occurred.";
      })
      .addCase(profileSettingThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.dataUserEdit = payload;
        state.errorMessage = null;
      })
      .addCase(userSettingThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userSettingThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMessage = payload?.error || "An error occurred.";
      })
      .addCase(userSettingThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.errorMessage = null;
      });
  },
});

export const profileSettingActions = {
  ...profileSettingSlice.actions,
  profileSettingThunk,
  userSettingThunk,
};

export type profileSettingState = ReturnType<
  typeof profileSettingSlice.reducer
>;
export const profileSettingReducer = profileSettingSlice.reducer;
