import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language : 'TR'
}

const language = createSlice({
    name : 'language',
    initialState,
    reducers: {
        setLanguage: state => {
            state.language = state.language === 'TR' ? 'ENG' : 'TR'
        }
    }
})

export const { setLanguage } = language.actions
export default language.reducer
