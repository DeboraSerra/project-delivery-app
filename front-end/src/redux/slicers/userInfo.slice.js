import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';

const initialState = defineState({
  email: '', id: 0, name: '', role: '', token: '',
})('userInfo');

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;
