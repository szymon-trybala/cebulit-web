import { Auth } from "./types";
import jwtDecode from "jwt-decode";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const emptyAuthObject: Auth = {
  user: undefined,
};

function getInitialAuthStateFromLocalStorate(): Auth {
  try {
    const token = localStorage.getItem("token");
    if (!token) return emptyAuthObject;

    const decoded = jwtDecode<any>(token);
    if (!decoded) return emptyAuthObject;

    return {
      user: {
        id: decoded.nameid,
        login: decoded.unique_name,
        token: token,
      },
    };
  } catch (error) {
    return emptyAuthObject;
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState: getInitialAuthStateFromLocalStorate(),
  reducers: {
    setUser(state, action: PayloadAction<Auth>) {
      return action.payload;
    },
    clearUser(state, action: PayloadAction<void>) {
      state.user = undefined;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
