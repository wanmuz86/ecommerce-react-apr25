import React from 'react'
import './CartItem.css' // optional custom styles
import { useCart } from '../../context/CartContext'

const CartItem = ({ cartItem }) => {
    const {dispatch} = useCart()

    const handleRemove = () => {
        dispatch({type:'REMOVE_ITEM', payload:cartItem})

    }

    const handleAdd = () => {
        dispatch({type:'ADD_ITEM',payload:cartItem})
    }
    
  return (
    <div className="card cart-item-card mb-3 shadow-sm">
      <div className="row g-3 align-items-center p-3">
        <div className="col-4 col-md-3 text-center">
          <img src={cartItem.item.image} alt={cartItem.item.title} className="img-fluid cart-img" />
        </div>
        <div className="col-8 col-md-9">
          <h5 className="mb-1 text-truncate" title={cartItem.item.title}>{cartItem.item.title}</h5>
          <p className="text-muted mb-2">USD {cartItem.item.price}</p>
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-outline-secondary btn-sm"
            onClick={handleRemove}>-</button>
            <span className="px-2">{cartItem.quantity}</span>
            <button className="btn btn-outline-secondary btn-sm"
             onClick={handleAdd}>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem