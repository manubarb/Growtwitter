import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import themesReducer from './slices/themesSlice'
import tweetReducer from './slices/tweetSlice' 

const rootReducer = combineReducers({
    themes: themesReducer,
    tweets: tweetReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['themes'] 
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer