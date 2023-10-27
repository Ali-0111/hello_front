import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'api/v1/messages';

const getMessagesAPI = createAsyncThunk(
  'msgSlice/getMessages',
  async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },
);

export default getMessagesAPI;
