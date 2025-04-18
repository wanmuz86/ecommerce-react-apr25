import React from 'react'
import './Cart.css'
import {useCart} from '../../context/CartContext.jsx'
const Cart = () => {

  const {state, dispatch} = useCart()

  return (
    <div>
      <h2>Your Cart</h2>
      <div className="container">
        {
          state.cart.map(val=><div><h2>{val.item.title} - {val.quantity}</h2></div>)
        }
      </div>
    </div>
  )
}

export default Cart