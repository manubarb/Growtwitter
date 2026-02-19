import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import themesReducer from './slices/themesSlice'

const rootReducer = combineReducers({
	themes: themesReducer
})

//criando o persister
export const persistedReducer = persistReducer({
	key: 'themes',
	storage
}, rootReducer)

export default rootReducer