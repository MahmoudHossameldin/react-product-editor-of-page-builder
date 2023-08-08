import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductState, Product } from '../types';
import { fetchProduct } from '../thunks/fetchProduct';

const initialState: ProductState = {
  data: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateProductData: (state, action: PayloadAction<Product>) => {
      state.data = action.payload;
    },
  },
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
      });
  },
});

export const { updateProductData } = productSlice.actions;

export default productSlice.reducer;
