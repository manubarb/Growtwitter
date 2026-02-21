import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import themesReducer from './slices/themesSlice'
import tweetReducer from './slices/tweetSlice' 

const rootReducer = combineReducers({
	themes: themesReducer,
    tweets: tweetReducer,
})

export const persistedReducer = persistReducer({
	key: 'themes',
	storage
}, rootReducer)

export default rootReducer