import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.query = action.payload;
    },
  },
});

export default slice.reducer;
export const { changeFilter } = slice.actions;
