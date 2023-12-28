import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    brand: "",
    price: "",
    rating: "",
  },
  reducers: {
    changeBrand(state, action) {
      state.brand = action.payload === state.brand ? "" : action.payload;
    },
    changePrice(state, action) {
      state.price = action.payload === state.price ? "" : action.payload;
    },
    changeRating(state, action) {
      state.rating = action.payload === state.rating ? "" : action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeBrand, changePrice, changeRating } = filterSlice.actions;
