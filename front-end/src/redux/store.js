import { configureStore } from '@reduxjs/toolkit';
import storeSynchronize from 'redux-localstore';
import { darkModeSlice } from './slicers';

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
  },
});

storeSynchronize(store);
