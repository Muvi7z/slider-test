import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      url: 'https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      name: 'Img 1',
    },
    {
      url: 'https://images.unsplash.com/photo-1490879112094-281fea0883dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      name: 'Img 2',
    },
    {
      url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      name: 'Img 3',
    },
    {
      url: 'https://images.unsplash.com/photo-1528645752497-dce79f475d63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80',
      name: 'Img 4',
    },
    {
      url: 'https://images.unsplash.com/photo-1516545595035-b494dd0161e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Img 5',
    },
    {
      url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      name: 'Img 6',
    },
    {
      url: 'https://images.unsplash.com/photo-1601574968106-b312ac309953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1996&q=80',
      name: 'Img 7',
    },
    {
      url: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2023&q=80',
      name: 'Img 8',
    },
    {
      url: 'https://images.unsplash.com/photo-1501529301789-b48c1975542a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      name: 'Img 9',
    },
  ],
  position: 0,
};

export const sliderSlice = createSlice({
  name: '@@slider',
  initialState: initialState,
  reducers: {
    incPosition: (state) => {
      if (state.position + 1 >= state.items.length) {
        state.position = 0;
      } else if (state.position + 1 < 0) {
        state.position = state.items.length - 1;
      } else {
        state.position = state.position + 1;
      }
    },
    decPosition: (state) => {
      if (state.position - 1 >= state.items.length) {
        state.position = 0;
      } else if (state.position - 1 < 0) {
        state.position = state.items.length - 1;
      } else {
        state.position = state.position - 1;
      }
    },
  },
});

export const { incPosition, decPosition } = sliderSlice.actions;

export const sliderReducer = sliderSlice.reducer;
