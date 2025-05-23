import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const initialState = {
        cart: []
    }

    const cartReducer = (state, action) => {
        // We will define all the actions on the state
        switch (action.type) {
            case 'ADD_ITEM':
                // if item already exists in the cart, add the quantity by 1
                // Find the index of the given item id, if exists , I will get the index, if not i will get -1
                const existingItemIndexAdd = state.cart.findIndex(item => item.item.id === action.payload.item.id);

                if (existingItemIndexAdd !== -1) {
                    // Array Spread operator, copy in updatedCart
                    const updatedCart = [...state.cart];
                    updatedCart[existingItemIndexAdd].quantity++; // Increment the quantity of the item
                    // Update the state with the new item quantity
                    return {
                        ...state,
                        cart: updatedCart
                    }

                }
                else {

                    // if not, add it in the cart, and set the quantity to 1
                    return {
                        ...state,
                        cart: [...state.cart, action.payload]
                    }
                }

            case 'REMOVE_ITEM':
                // if item is already in the cart // {item:{id:}, quantiy:1}
                const existingItemIndexDel = state.cart.findIndex(val => val.item.id === action.payload.item.id)
                if (existingItemIndexDel !== -1) {
                    console.log(existingItemIndexDel)
                    // if the item quantity is > 1, remove the quantity by1
                    const updatedCart = [...state.cart];
                    if (updatedCart[existingItemIndexDel].quantity > 1) {
                        updatedCart[existingItemIndexDel].quantity--
                        return {
                            ...state,
                            cart: updatedCart
                        }
                    }
                    else {
                        // if it is equal to 1 , remove the cart
                        return {
                            ...state,
                            cart: state.cart.filter(val => val.item.id !== action.payload.item.id)
                        }

                    }
                }
                return state;
           
            case 'EMPTY_CART':
                // Modify the start by updating the cart to []
                return {
                    ...state,
                    cart: []
                }
            default:
                return state
        }

    }
    // State to retrieve the state, dispatch to perform an action on the state
    const [state, dispatch] = useReducer(cartReducer, initialState)

    // Perform an operation on a state, and return it to the compoenent - Derived state
    const totalItemInCart = state.cart.reduce( (acc,val) => acc+val.quantity,0 ) 
    const totalCartPrice = state.cart.reduce((acc,val)=> acc+ val.item.price * val.quantity,0)


    return <CartContext.Provider value={{ state, dispatch , totalItemInCart, totalCartPrice}}>
         {children} </CartContext.Provider>

}

const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a Cart Provider')
    }
    return context
}



export { CartProvider, useCart }