import { createAsyncThunk } from "@reduxjs/toolkit";
import { FiltersFetchError } from "../../store/slices/filters/types";
import { AppDispatch } from "../../store/store";
import { AvailableFilters } from "./models";

const getAvailableFilters = createAsyncThunk<
  AvailableFilters,
  undefined,
  {
    dispatch: AppDispatch;
    rejectValue: FiltersFetchError;
  }
>("api/pcParts/getAvailableFilters", async (_, thunkApi) => {
  const response = await fetch("api/pcParts/getAvailableFilters", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (response.status === 401) {
    return thunkApi.rejectWithValue({ errorMessage: "Nie jesteś zalogowany" });
  } else if (!response.ok) {
    return thunkApi.rejectWithValue({ errorMessage: "Błąd serwera" });
  }

  const chats = (await response.json()) as AvailableFilters;
  return chats;
});

export const pcPartsService = {
  getAvailableFilters,
};
