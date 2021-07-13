import { createAsyncThunk } from "@reduxjs/toolkit";
import { BuildsFetchError } from "../../store/slices/builds/types";
import { AppDispatch } from "../../store/store";
import { Build, BuildsFiltersParams } from "./models";

interface TagMatchedBuildsParams {
  tags: string[];
}

async function getTagMatched(
  params?: TagMatchedBuildsParams
): Promise<Build[]> {
  try {
    const response = await fetch("api/builds/getTagMatched", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: params ? JSON.stringify(params) : undefined,
    });
    if (!response || !response.ok)
      return Promise.reject(new Error("Błąd serwera"));
    else if (response.status === 401)
      return Promise.reject(new Error("Błąd autoryzacji użytkownika"));

    const body = (await response.json()) as Build[];
    return body;
  } catch (error) {
    console.error(error);
    return Promise.reject(new Error("Błąd serwera"));
  }
}

const initialFilters: BuildsFiltersParams = {
  processorIds: [],
  orderBy: "name",
};

const getFiltered = createAsyncThunk<
  Build[],
  {
    filters?: BuildsFiltersParams;
    userSpecific?: boolean;
  },
  {
    dispatch: AppDispatch;
    rejectValue: BuildsFetchError;
  }
>("api/builds/getFiltered", async ({ filters, userSpecific }, thunkApi) => {
  const token = localStorage.getItem("token");
  const response = await fetch(
    userSpecific ? "api/builds/getFilteredForUser" : "api/builds/getFiltered",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: filters ? JSON.stringify(filters) : JSON.stringify(initialFilters),
    }
  );
  if (!response.ok)
    return thunkApi.rejectWithValue({ errorMessage: "Błąd serwera" });

  const builds = (await response.json()) as Build[];
  return builds;
});

export const buildsService = {
  getTagMatched,
  getFiltered,
};
