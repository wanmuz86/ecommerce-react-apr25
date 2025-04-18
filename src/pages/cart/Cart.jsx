import React from 'react'
import './Cart.css'
import {useCart} from '../../context/CartContext.jsx'
import CartItem from '../../components/cart-item/CartItem.jsx'
const Cart = () => {

  const {state, dispatch} = useCart()

  return (
    <div className='container my-3'>
      <h2>Your Cart</h2>
      <div>
        {
          state.cart.length === 0 ?
<p>No item in the cart available at the moment</p>
          :
          state.cart.map(val=><CartItem cartItem={val} key={val.item.id}/>)
        }
      </div>
    </div>
  )
}

export default Cart