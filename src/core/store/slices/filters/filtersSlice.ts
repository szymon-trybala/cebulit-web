import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AvailableFilters } from "../../../api/pcParts/models";
import { FiltersState } from "./types";
import { pcPartsService } from "../../../api/pcParts/pcPartsService";

const initialState: FiltersState = {
  error: undefined,
  promise: "initial",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<AvailableFilters>) {
      state.availableFilters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(pcPartsService.getAvailableFilters.pending, (state) => {
      state.promise = "pending";
    });
    builder.addCase(
      pcPartsService.getAvailableFilters.fulfilled,
      (state, { payload }) => {
        state.availableFilters = payload;
        state.promise = "fulfilled";
      }
    );
    builder.addCase(
      pcPartsService.getAvailableFilters.rejected,
      (state, action) => {
        state.promise = "error";
        if (action.payload) {
          state.error = action.payload.errorMessage;
        } else {
          state.error = action.error.message;
        }
      }
    );
  },
});

export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
