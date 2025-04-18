import React from 'react'
import './Cart.css'
import { useCart } from '../../context/CartContext.jsx'
import CartItem from '../../components/cart-item/CartItem.jsx'
const Cart = () => {

  const { state, dispatch } = useCart()

  const handleEmptyCart = () => {
    dispatch({type:'EMPTY_CART'})
  }

  return (
    <div className='container my-3'>
      <h2>Your Cart</h2>
      <div>
        {
          state.cart.length === 0 ?
            <p>No item in the cart available at the moment</p>
            :
            <div>
              {
            state.cart.map(val => <CartItem cartItem={val} key={val.item.id} />)
              }
               <button className="btn btn-outline-secondary" onClick={handleEmptyCart}>Empty Cart</button>
            </div>
        }
      </div>

     
    </div>
  )
}

export default Cart