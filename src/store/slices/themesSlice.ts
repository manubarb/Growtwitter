import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mode: 'light'
}
const themesSlice = createSlice({
	name: 'themes', 
	initialState,
	reducers: {
		toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
            }
	} 
})

export const {toggleTheme} = themesSlice.actions
export default themesSlice.reducer