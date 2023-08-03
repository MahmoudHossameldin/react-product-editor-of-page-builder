import { createSlice } from '@reduxjs/toolkit';

type ModeState = {
  isEditPage: boolean;
};

const initialState: ModeState = {
  isEditPage: false,
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setEditMode: (state) => {
      state.isEditPage = true;
    },
    setViewMode: (state) => {
      state.isEditPage = false;
    },
  },
});

export const { setEditMode, setViewMode } = modeSlice.actions;
export default modeSlice.reducer;
