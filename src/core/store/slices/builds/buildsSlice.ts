import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { buildsService } from "../../../api/builds/buildsService";
import { Build } from "../../../api/builds/models";
import { initialFetchedDataState } from "../../types";
import { BuildsState } from "./types";

const initialState: BuildsState = initialFetchedDataState;

const buildsSlice = createSlice({
  name: "builds",
  initialState,
  reducers: {
    setBuilds(state, action: PayloadAction<Build[]>) {
      state.builds = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buildsService.getFiltered.pending, (state) => {
      state.promise = "pending";
    });
    builder.addCase(
      buildsService.getFiltered.fulfilled,
      (state, { payload }) => {
        state.builds = payload;
        state.promise = "fulfilled";
      }
    );
    builder.addCase(buildsService.getFiltered.rejected, (state, action) => {
      state.promise = "error";
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    });
  },
});

export const { setBuilds } = buildsSlice.actions;
export default buildsSlice.reducer;
