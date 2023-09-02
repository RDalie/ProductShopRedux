import { ActionTypes } from "../constants/action-types";

//Reducer always takes the initial state and the action
const initialState = {products: [
    {
        id: 1,
        title: "Rabya",
        category: "programmer"
    }
]};
export const productReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state
    } 
}