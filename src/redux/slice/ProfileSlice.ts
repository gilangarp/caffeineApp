import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { profileThunk } from "../actions/ProfileAction";
import { IProfileBody } from "../types/ProfileType";

export interface IProfileState {
  dataProfile: IProfileBody[];
  isLoading: boolean;
}

const initialState: IProfileState = {
  isLoading: false,
  dataProfile: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setDataProfile: (state, action: PayloadAction<IProfileBody[]>) => {
      state.dataProfile = action.payload;
    },
    resetDataProfile: (state) => {
      state.dataProfile = initialState.dataProfile;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(profileThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(profileThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(profileThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataProfile = action.payload;
      });
  },
});

export const profileActions = {
  ...profileSlice.actions,
  profileThunk,
};

export type profileState = ReturnType<typeof profileSlice.reducer>;
export const profileReducer = profileSlice.reducer;
