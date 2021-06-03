import { combineReducers } from "redux";
import authSlice from "./slices/auth/authSlice";
import filtersSlice from "./slices/filters/filtersSlice";

const rootReducer = combineReducers({
  authSlice,
  filtersSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
