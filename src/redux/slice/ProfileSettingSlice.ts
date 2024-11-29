import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProfileBody } from "../types/ProfileType";
import { profileSettingThunk } from "../actions/ProfileAction";

export interface IUserState {
  dataUserEdit: IProfileBody[];
  isLoading: boolean;
}

const initialState: IUserState = {
  isLoading: false,
  dataUserEdit: [],
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
      .addCase(profileSettingThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(profileSettingThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataUserEdit = action.payload;
      });
  },
});

export const profileSettingActions = {
  ...profileSettingSlice.actions,
  profileSettingThunk,
};

export type profileSettingState = ReturnType<typeof profileSettingSlice.reducer>;
export const profileSettingReducer = profileSettingSlice.reducer;
