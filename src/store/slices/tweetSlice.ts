import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { authAPI } from '../../services/api'
import type { User } from '../../contexts/AuthContext'

export interface Tweet {
  id: string
  content: string
  author: User
}

interface TweetState {
  list: Tweet[]
  loading: boolean
  error: string | null
  isDeleted: string[]
  user: User | null
}

const initialState: TweetState = {
  list: [],
  loading: false,
  error: null,
  isDeleted: [],
  user: null
}

export const fetchTweets = createAsyncThunk(
    'tweets/fetchTweets',
    async (userId: string) => {
        const response = await authAPI.getTweets(userId)
        return response.data.data
    }
)

export const createTweet = createAsyncThunk(
    'tweets/create',
    async (content: string) => { 
        const response = await authAPI.createTweet(content)
        return response.data 
    }
)

export const deleteTweet = createAsyncThunk(
    'tweets/delete',
     async (id: string) => {
         await authAPI.deleteTweet(id)
         return id
     }
)

export const loadUserData = createAsyncThunk(
    'user/data',
    async (id: string) => {
        const response = await authAPI.loadUserData(id)
        return response.data.data
    }
)

const tweetSlice = createSlice({
	name: 'tweets', 
	initialState,
	reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTweets.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchTweets.fulfilled, (state, action: PayloadAction<Tweet[]>) => {
            state.loading = false
            state.list = action.payload
        } )
        .addCase(fetchTweets.rejected, (state) => {
            state.loading = false
        })
        .addCase(createTweet.pending, (state) => {
            state.loading = true
        })
        .addCase(createTweet.fulfilled, (state, action) => {
            state.loading = false
            if(action.payload){
                state.list.push(action.payload)
            }
        })
        .addCase(createTweet.rejected, (state) => {
            state.loading = false
        })
        .addCase(deleteTweet.pending, (state, action) => {
            state.loading = true
            state.isDeleted.push(action.meta.arg)
        })
        .addCase(deleteTweet.fulfilled, (state, action) => {
            state.loading = false
            state.isDeleted = state.isDeleted.filter(id => id !== action.payload)
            state.list = state.list.filter(item => item.id !== action.payload)
        })
        .addCase(deleteTweet.rejected, (state, action) => {
            state.loading = false
            state.isDeleted = state.isDeleted.filter(id => id !== action.meta.arg)
        })
        .addCase(loadUserData.pending, (state) => {
            state.loading = true
        })
        .addCase(loadUserData.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
        })
        .addCase(loadUserData.rejected, (state) => {
            state.loading = false
        })
    }
})

export default tweetSlice.reducer