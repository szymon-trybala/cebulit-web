import { Build } from "../../../api/builds/models";
import { FetchedDataError, FetchedDataState } from "../../types";

export interface BuildsState extends FetchedDataState {
  builds?: Build[];
}

export interface BuildsFetchError extends FetchedDataError {}
