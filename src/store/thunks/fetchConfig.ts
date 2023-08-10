import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Config } from '../types';

const appId = process.env.REACT_APP_APP_ID || 1;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const configApiUrl = `${API_BASE_URL}/configuration/${appId}/`;

export const fetchConfig = createAsyncThunk<Config, void>(
  'product/fetch',
  async () => {
    const response = await axios.get<Config>(configApiUrl);
    return response.data;
  }
);
