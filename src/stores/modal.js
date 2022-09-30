import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name : false,
    open: false,
    data: false
}

const modal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) =>{
            state.name = action.payload.name
            state.data = action.payload.data
            state.open = true
        },
        closeModal: state => {
            state.name = false
            state.data = false
            state.open = false
        }
    }
})

export const { openModal, closeModal } = modal.actions
export default modal.reducer