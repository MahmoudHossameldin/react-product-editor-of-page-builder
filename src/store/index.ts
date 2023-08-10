import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import productReducer from './slices/productSlice';
import configReducer from './slices/configSlice';
import modeReducer from './slices/modeSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    mode: modeReducer,
    config: configReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

export * from './slices/productSlice';
export * from './slices/modeSlice';
export * from './slices/configSlice';

export * from './thunks/fetchProduct';
export * from './thunks/fetchConfig';
