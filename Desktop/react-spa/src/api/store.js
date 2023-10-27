import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./api";
const store = configureStore({
    reducer : {
        cart : cartSlice.reducer
    }
})
export default store;