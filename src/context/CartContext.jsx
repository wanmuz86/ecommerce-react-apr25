import { createContext } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const initialState = {
        cart:[]
    }

    const cartReducer = (state,action) => {
        // We will define all the actions on the state
        switch (action.type){
            case 'ADD_ITEM':

            case 'REMOVE_ITEM':

            case 'EMPTY_CART':


            default:
        }

    }
    return state

}

export {CartProvider}