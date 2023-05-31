import { configureStore } from '@reduxjs/toolkit';
import { tableReducer } from './table/slice';
import { sliderReducer } from './slider/slice';

export const store = configureStore({
  reducer: {
    table: tableReducer,
    slider: sliderReducer,
  },
  devTools: true,
});
