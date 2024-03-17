import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: 'Hello World - From Redux!',
};

const helloSlice = createSlice({
  name: 'hello',
  initialState,
  reducers: {},
});

export default helloSlice.reducer;
