// /src/store/thunks/fetchProduct.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../types';

const productApiUrl = 'https://api-test.innoloft.com/product/6781/';

export const fetchProduct = createAsyncThunk<Product, void>(
  'product/fetch',
  async () => {
    const response = await axios.get<Product>(productApiUrl);
    return response.data;
  }
);
