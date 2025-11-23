import { createSlice } from '@reduxjs/toolkit'
const initialState = 'light'

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    set: (state, action) => action.payload,
  },
})

export const { set } = themeSlice.actions

export default themeSlice.reducer