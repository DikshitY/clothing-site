import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "Toggle",
    initialState: {
        toggle: false
    },
    reducers: {
        changeState(state,action){
            state.toggle = !state.toggle
        }
    }
})

export const toggleReducer = toggleSlice.reducer;
export const {changeState} = toggleSlice.actions;