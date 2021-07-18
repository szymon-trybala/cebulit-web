import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Build } from "../../../api/builds/models";
import { CartState } from "./types";

const initialState: CartState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartBuild(state, action: PayloadAction<Build>) {
      state.build = action.payload;
    },
    removeCartBuild(state) {
      state.build = undefined;
    },
  },
});

export const { setCartBuild, removeCartBuild } = cartSlice.actions;
export default cartSlice.reducer;
