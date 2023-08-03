import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductState } from '../types';
import { fetchProduct } from '../thunks/fetchProduct';
import { updateProduct } from '../thunks/updateProduct';

const initialState: ProductState = {
  data: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.data = action.payload;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(fetchProduct.rejected, (state, action) => {
        state.data = null;
        state.loading = false;
        state.error = 'Failed to fetch product data.';
        console.log(action);
      })
      .addCase(
        updateProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.data = action.payload;
        }
      );
  },
});

export default productSlice.reducer;
