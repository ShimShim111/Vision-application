import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./archive.type";

export const archiveSlice = createSlice({
  name: "archive",
  initialState,
  reducers: {
    setArchive: (state, action) => {
      state.archiveStore = action.payload;
    },
  },
});

export const { setArchive} = archiveSlice.actions;

export default archiveSlice.reducer;
