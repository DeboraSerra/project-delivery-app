import { configureStore } from '@reduxjs/toolkit';
import storeSynchronize from 'redux-localstore';
import {
  darkModeSlice, userInfoSlice, cartItemsSlice, productsSlice,
} from './slicers';

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
    userInfo: userInfoSlice.reducer,
    cartItems: cartItemsSlice.reducer,
    products: productsSlice.reducer,
  },
});

storeSynchronize(store);
