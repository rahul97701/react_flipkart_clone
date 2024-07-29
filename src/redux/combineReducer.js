import ErrorSlice from "./error.slice";
import ProductSlice from "./product.slice";
import { combineReducers } from "@reduxjs/toolkit";



const reducer = combineReducers({
    products: ProductSlice.reducer,
    errors: ErrorSlice.reducer,
});

export default reducer;