import { combineReducers } from "redux";
import authSlice from "./slices/auth/authSlice";
import filtersSlice from "./slices/filters/filtersSlice";
import buildsSlice from "./slices/builds/buildsSlice";

const rootReducer = combineReducers({
  authSlice,
  filtersSlice,
  buildsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
