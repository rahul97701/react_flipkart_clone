import { createSlice } from "@reduxjs/toolkit"

const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState: {
        productList: [],
        Categories: [
            // {
            //     name: "Top Offers",
            //     image: "img/category/offers.webp",

            // },
            // {
            //     name: "Mobiles",
            //     image: "img/category/Mobiles.webp",
            // },
            // {
            //     name: "Grocery",
            //     image: "img/category/Grocery.webp",
            // }

        ],
        error: {
            isError: false,
            message: "",
        },
    },
    reducers: {
        saveProductList: (state, action) => {
            // console.log(action.payload);
            state.productList = action.payload;
        },
        saveCategoryList: (state, action) => {
            state.Categories = action.payload;
        },
        getCategoryList: (state, action) => {
            // console.log('getCategoryList action called')
        },
        getProductList: (state, action) =>{

        },
        setError: (state, action) => {
            state.error = {
                isError: true,
                message: action.payload,
            };
        },    
        resetError: (state) => {
            state.error = {
                isError: false,
                message: "",
            };
        },
},
});

export default ProductSlice;
export const {  
    setError, 
    resetError, 
    getCategoryList,
    saveProductList, 
    getProductList,
    saveCategoryList } = ProductSlice.actions;