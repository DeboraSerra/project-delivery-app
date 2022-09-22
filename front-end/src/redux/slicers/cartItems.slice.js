import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';

const initialState = defineState([])('cartItems');

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    setCartItems: (state, { payload }) => {
      const product = state.find((e) => e.productId === payload.productId);

      if (product) {
        product.qty = payload.qty;
      } else {
        state.push(payload);
      }
    },
  },
});

export const { setCartItems } = cartItemsSlice.actions;
