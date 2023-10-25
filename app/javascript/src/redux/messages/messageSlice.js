import { createSlice } from '@reduxjs/toolkit';
import getMessagesAPI from '../../apiFn/apiFn';

const initialState = {
  isLoading: false,
  message: '',
};

const messageSlice = createSlice({
  name: 'msgSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [getMessagesAPI.pending]: (state) => ({ ...state, isLoading: true }),
    [getMessagesAPI.fulfilled]: (_, { payload }) => (
      { message: payload.message, isLoading: false }),
    [getMessagesAPI.rejected]: () => ({ message: 'Rejected', isLoading: false }),
  },
});

export default messageSlice;
