import { BuildsFiltersParams } from "../../../api/builds/models";
import { AvailableFilters } from "../../../api/pcParts/models";
import { FetchedDataState, FetchedDataError } from "../../types";

export interface FiltersState extends FetchedDataState {
  availableFilters?: AvailableFilters;
  selectedFilters?: BuildsFiltersParams;
}

export interface FiltersFetchError extends FetchedDataError {}
