import { createSlice } from '@reduxjs/toolkit';
import { modules } from '../../Database';

const initialState = {
  modules: modules,
  module: {
    _id: '-1',
    name: 'New Module',
    description: 'New Description',
    course: '',
    lessons: [],
  },
};

const moduleSlice = createSlice({
  name: 'modules',
  initialState,
  reducers: {
    addModule: (state, action) => {
      state.modules = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.modules,
      ];
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(module => module._id !== action.payload);
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map(module => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});

export const { addModule, deleteModule, updateModule, setModule } = moduleSlice.actions;
export default moduleSlice.reducer;
