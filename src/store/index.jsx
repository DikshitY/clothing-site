import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./slices/dataSlice";
import { toggleReducer, changeState } from "./slices/toggleSlice";
import { searchTermReducer, changeSearchTerm } from "./slices/searchTermSlice";
import {
  filterReducer,
  changeBrand,
  changePrice,
  changeRating,
} from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    productsData: dataReducer,
    toggleSection: toggleReducer,
    searchTerm: searchTermReducer,
    filter: filterReducer,
  },
});

export {
  store,
  changeState,
  changeSearchTerm,
  changeBrand,
  changePrice,
  changeRating,
};
