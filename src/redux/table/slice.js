import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rows: [],
};

export const tableSlice = createSlice({
  name: '@@table',
  initialState: initialState,
  reducers: {
    addRows: (state, action) => {
      state.rows = [...state.rows, action.payload];
    },
  },
});

export const { addRows } = tableSlice.actions;

export const tableReducer = tableSlice.reducer;
