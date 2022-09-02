import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./like.type";

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    setLike: (state, action) => {
      state.likeStore = action.payload;
    },
  },
});

export const { setLike} = likeSlice.actions;

export default likeSlice.reducer;
