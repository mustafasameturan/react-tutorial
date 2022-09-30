import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme : 'Dark'
}

const theme = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: state => {
            state.theme = state.theme === 'Dark' ? 'Light' : 'Dark'
        }
    }
})

export const { setTheme } = theme.actions
export default theme.reducer