import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditedData, Trl, Category, Model, Type, Product } from '../types';
import { fetchProduct } from '../thunks/fetchProduct';
import { updateProduct } from '../thunks/updateProduct';

const initialState: EditedData = {
  name: '',
  description: '',
  picture: '',
  type: null,
  categories: [],
  trl: null,
  video: '',
  businessModels: [],
  loading: false,
  error: null,
};

const productEditSlice = createSlice({
  name: 'productEdit',
  initialState,
  reducers: {
    setEditedData: (state, action: PayloadAction<EditedData>) => {
      return action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setType: (state, action: PayloadAction<Type>) => {
      state.type = action.payload;
    },
    setPicture: (state, action: PayloadAction<string>) => {
      state.picture = action.payload;
    },
    setVideo: (state, action: PayloadAction<string>) => {
      state.video = action.payload;
    },
    setTrl: (state, action: PayloadAction<Trl>) => {
      state.trl = action.payload;
    },
    setCategory: (state, action: PayloadAction<Category>) => {
      const existingCategoryIndex = state.categories?.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingCategoryIndex !== undefined && existingCategoryIndex !== -1) {
        const updatedCategories = [...(state.categories || [])];
        updatedCategories[existingCategoryIndex] = action.payload;
        state.categories = updatedCategories;
      } else {
        state.categories = [...(state.categories || []), action.payload];
        console.log('added new category: ', action.payload);
      }
    },
    setModel: (state, action: PayloadAction<Model>) => {
      const existingModelIndex = state.businessModels?.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingModelIndex !== undefined && existingModelIndex !== -1) {
        const updatedModels = [...(state.businessModels || [])];
        updatedModels[existingModelIndex] = action.payload;
        state.businessModels = updatedModels;
      } else {
        state.businessModels = [
          ...(state.businessModels || []),
          action.payload,
        ];
        console.log('added new model: ', action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          return {
            ...state,
            name: action.payload.name,
            description: action.payload.description,
            type: action.payload.type,
            picture: action.payload.picture,
            trl: action.payload.trl,
            categories: action.payload.categories,
            businessModels: action.payload.businessModels,
            video: action.payload.video,
          };
        }
      )
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.name = action.payload.name;
          state.description = action.payload.description;
          state.type = action.payload.type;
          state.picture = action.payload.picture;
          state.trl = action.payload.trl;
          state.categories = action.payload.categories;
          state.businessModels = action.payload.businessModels;
          state.video = action.payload.video;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Failed to update product data.';
        console.log(action);
      });
  },
});

export const {
  setEditedData,
  setName,
  setDescription,
  setType,
  setPicture,
  setVideo,
  setTrl,
  setCategory,
  setModel,
} = productEditSlice.actions;
export default productEditSlice.reducer;
