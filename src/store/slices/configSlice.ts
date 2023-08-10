import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Config } from '../types';
import { fetchConfig } from '../thunks/fetchConfig';

type ConfigState = {
  configData: Config | null;
  error: string;
};

const initialState: ConfigState = {
  configData: null,
  error: '',
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConfig.pending, (state) => {
        state.error = '';
      })
      .addCase(
        fetchConfig.fulfilled,
        (state, action: PayloadAction<Config>) => {
          state.configData = action.payload;
          state.error = '';
        }
      )
      .addCase(fetchConfig.rejected, (state, action) => {
        state.error = 'Failed to fetch product data.';
      });
  },
});

export default configSlice.reducer;
