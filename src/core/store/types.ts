export interface FetchedDataState {
  promise: "initial" | "pending" | "error" | "fulfilled";
  error: string | undefined;
}

export interface FetchedDataError {
  errorMessage: string;
}

export const initialFetchedDataState: FetchedDataState = {
  error: undefined,
  promise: "initial",
};
