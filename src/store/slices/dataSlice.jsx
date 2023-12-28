import { createSlice } from "@reduxjs/toolkit";
import { data, latestTrends } from "../../data";

const dataSlice = createSlice({
    name: "Data",
    initialState: {
        data: data,
        latestTrends: latestTrends 
    },
    reducers:{
        filterSearch(state,action){
            state.data = data.filter(product => product.name.toLowerCase().includes(action.payload.toLowerCase()))
        }
    }
})

export const dataReducer =  dataSlice.reducer