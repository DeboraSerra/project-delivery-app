import { configureStore } from '@reduxjs/toolkit';
import storeSynchronize from 'redux-localstore';
import { darkModeSlice, userInfoSlice, cartItemsSlice } from './slicers';

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
    userInfo: userInfoSlice.reducer,
    cartItems: cartItemsSlice.reducer,
  },
});

storeSynchronize(store);
