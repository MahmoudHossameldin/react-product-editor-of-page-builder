import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import productReducer from './slices/productSlice';
import modeReducer from './slices/modeSlice';
import productEditReducer from './slices/productEditSlice'; // Import the new slice

const store = configureStore({
  reducer: {
    product: productReducer,
    mode: modeReducer,
    productEdit: productEditReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

export * from './slices/productEditSlice';
export * from './slices/modeSlice';

export * from './thunks/fetchProduct';
export * from './thunks/updateProduct';
