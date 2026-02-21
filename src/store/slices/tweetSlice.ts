import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { Tweet } from '../../contexts/TweetContext'
import { authAPI } from '../../services/api'

interface TweetState {
  list: Tweet[]
  loading: boolean
  error: string | null
  isDeleted: string[]
}

const initialState: TweetState = {
  list: [],
  loading: false,
  error: null,
  isDeleted: []
}

export const deleteTweet = createAsyncThunk(
  'tweets/delete',
  async (id: string) => {
    await authAPI.deleteTweet(id)
    return id
  }
)

const tweetSlice = createSlice({
	name: 'tweets', 
	initialState,
	reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(deleteTweet.pending, (state, action) => {
            state.isDeleted.push(action.meta.arg)
        })
        .addCase(deleteTweet.fulfilled, (state, action) => {
            state.isDeleted = state.isDeleted.filter(id => id !== action.payload)
            state.list = state.list.filter(item => item.id !== action.payload)
        })
        .addCase(deleteTweet.rejected, (state, action) => {
            state.isDeleted = state.isDeleted.filter(id => id !== action.meta.arg)
        })
    }
})

export default tweetSlice.reducer