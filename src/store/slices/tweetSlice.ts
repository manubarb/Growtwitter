import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { authAPI } from '../../services/api'
import type { User } from '../../contexts/AuthContext'

export interface Tweet {
  id: string
  content: string
  author: User
  likes: Like[]
}

export interface Like {
  userId: string
  tweetId: string
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
        return response.data.data
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
	reducers: {
        toggleLike: (state, action: PayloadAction<{ tweetId: string, userId: string }>) => {
            const tweet = state.list.find(t => t.id === action.payload.tweetId)
            if (tweet) {
                const liked = tweet.likes.some(like => like.userId === action.payload.userId)
                if (liked) {
                tweet.likes = tweet.likes.filter(like => like.userId !== action.payload.userId)
                } else {
                tweet.likes.push({ 
                    userId: action.payload.userId, 
                    tweetId: action.payload.tweetId 
                })
            }
        }
    }
    },
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
            if (action.payload) {
                    const newTweet = {
                        ...action.payload,
                        author: action.payload.author || state.user 
                    }
                    state.list.unshift(newTweet)
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
export const { toggleLike } = tweetSlice.actions