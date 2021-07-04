import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AvailableFilters } from "../../../api/pcParts/models";
import { FiltersState } from "./types";
import { pcPartsService } from "../../../api/pcParts/pcPartsService";
import { initialFetchedDataState } from "../../types";
import { BuildsFiltersParams } from "../../../api/builds/models";

const initialState: FiltersState = initialFetchedDataState;

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setAvailableFilters(state, action: PayloadAction<AvailableFilters>) {
      state.availableFilters = action.payload;
    },
    setSelectedFilters(state, action: PayloadAction<BuildsFiltersParams>) {
      state.selectedFilters = action.payload;
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

export const { setAvailableFilters, setSelectedFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
