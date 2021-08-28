import { AuthSlice } from "./types";
import jwtDecode from "jwt-decode";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const emptyAuthObject: AuthSlice = {
  user: undefined,
};

function getInitialAuthStateFromLocalStorate(): AuthSlice {
  try {
    const token = localStorage.getItem("token");
    if (!token) return emptyAuthObject;

    const decoded = jwtDecode<any>(token);
    if (!decoded) return emptyAuthObject;

    if (isTokenExpired(decoded)) {
      localStorage.removeItem("token");
      return emptyAuthObject;
    }

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

function isTokenExpired(token: any | undefined): boolean {
  try {
    const expireDateSeconds = token.exp as number;
    const nowSeconds = new Date().getTime() / 1000;
    return expireDateSeconds < nowSeconds;
  } catch (error) {
    console.error(`Couldn't assert if token expired: ${error}`);
    return false;
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState: getInitialAuthStateFromLocalStorate(),
  reducers: {
    setUser(state, action: PayloadAction<AuthSlice>) {
      return action.payload;
    },
    clearUser(state, action: PayloadAction<void>) {
      state.user = undefined;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
