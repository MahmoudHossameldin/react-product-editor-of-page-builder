import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const productApiUrl = 'https://api-test.innoloft.com/product/6781/';

export const updateProduct = createAsyncThunk<any>(
  'product/update',
  async (updatedProduct) => {
    const response = await axios.put<any>(productApiUrl, updatedProduct);
    return response.data;
  }
);
