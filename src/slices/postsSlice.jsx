import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import getPosts from '../Api/requests'
const initialState = {
  posts: [],
  status: 'idle',
  error: null,
}

export const fetchPosts = createAsyncThunk (
  'posts/fetchPosts',
  async () => {
    const response = await getPosts();

    return response
  }
)

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchPosts.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchPosts.fulfilled, (state, actions) => {
          state.status = 'done';
          state.posts = actions.payload;
        })
        .addCase(fetchPosts.rejected, (state, actions) => {
          state.status = 'failed';
          state.error = actions.payload;
        })
  }
})


export default postsSlice.reducer