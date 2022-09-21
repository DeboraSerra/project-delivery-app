import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';

const initialState = defineState({ active: false, forced: false })('darkMode');

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    setDarkMode: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setDarkMode } = darkModeSlice.actions;
