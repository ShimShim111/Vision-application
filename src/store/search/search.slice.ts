import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./search.type";

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchStore = action.payload;
    },
  },
});

export const { setSearch} = searchSlice.actions;

export default searchSlice.reducer;
