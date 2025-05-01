import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "language",
  initialState: {
    preferredLanguage: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.preferredLanguage = action.payload;
    },
  },
});

export const { changeLanguage } = langSlice.actions;
export default langSlice.reducer;
