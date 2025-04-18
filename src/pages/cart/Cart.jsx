import React from 'react';
import './Cart.css';
import { useCart } from '../../context/CartContext.jsx';
import CartItem from '../../components/cart-item/CartItem.jsx';

const Cart = () => {
  const { state, dispatch, totalCartPrice } = useCart();

  const handleEmptyCart = () => {
    dispatch({ type: 'EMPTY_CART' });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title mb-4 text-center">🛒 Your Shopping Cart</h2>

              {state.cart.length === 0 ? (
                <div className="alert alert-info text-center" role="alert">
                  No items in your cart at the moment.
                </div>
              ) : (
                <>
                  <div className="row g-3">
                    {state.cart.map((val) => (
                      <div className="col-md-12" key={val.item.id}>
                        <CartItem cartItem={val} />
                      </div>
                    ))}
                  </div>

                  <hr className="my-4" />

                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">Total Price: <span className="text-success">USD {totalCartPrice.toFixed(2)}</span></h4>
                    <button
                      className="btn btn-danger"
                      onClick={handleEmptyCart}
                    >
                      Empty Cart
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;