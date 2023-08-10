import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const productApiUrl = `${API_BASE_URL}/product/6781/`;

export const fetchProduct = createAsyncThunk<Product, void>(
  'config/fetch',
  async () => {
    const response = await axios.get<Product>(productApiUrl);
    return response.data;
  }
);
