import { ActionTypes } from "../constants/action-types";

//Reducer always takes the initial state and the action
const initialState = {products: [

]};
export const productReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload };
        default:
            return state
    } 
}

export const selectedProductReducer = (state={} , {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
            break;
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {...state, ...payload};
            break;      
        default:
            return state;
            break;
    }
}