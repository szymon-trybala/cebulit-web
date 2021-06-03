import { AvailableFilters } from "../../../api/pcParts/models";

export interface FiltersState {
  availableFilters?: AvailableFilters;
  promise: "initial" | "pending" | "error" | "fulfilled";
  error: string | undefined;
}

export interface FiltersFetchError {
  errorMessage: string;
}
