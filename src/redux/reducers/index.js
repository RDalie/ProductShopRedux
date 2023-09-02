import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { selectedProduct } from "../actions/productActions";

export const reducers =  combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer
})

