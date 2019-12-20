import React from 'react';
import CartSummaryItems from './cart-summary-items';

function CartSummary(props) {
  const cartItems = props.viewCart;

  let totalPrice = 0;
  cartItems.map(product => (totalPrice = totalPrice + product.price));

  let display = null;
  if (cartItems.length === 0) {
    display = (
      <h4 className="text-danger">No items in cart</h4>
    );
  } else {
    display = (
      <>
        {cartItems.map(item => {
          return <CartSummaryItems key={item.productId} cartInfo={item} />;
        })}
        <h2>Total Price {'$' + (totalPrice / 100).toFixed(2)}</h2>
        <button type="button" className="btn btn-primary" onClick={() => props.setView('checkout')}>Checkout</button>
      </>
    );
  }
  return (
    <div>
      <div
        className="backLink text-muted"
        onClick={() => props.setView('catalog')}
      >
        {'< Back to Catalog'}
      </div>
      <h1>My Cart</h1>
      {display}
    </div>
  );
}

export default CartSummary;
