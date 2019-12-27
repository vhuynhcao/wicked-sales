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
        <div className="container d-flex justify-content-between">
          <h2>Total Price {'$' + (totalPrice / 100).toFixed(2)}</h2>
          <button type="button" className="linkPointer btn btn-primary" onClick={() => props.setView('checkout')}>Checkout</button>
        </div>
      </>
    );
  }
  return (
    <>
      <div
        className="linkPointer text-muted"
        onClick={() => props.setView('catalog')}
      >
        <i className="fas fa-angle-double-left mr-2"/>Back to Catalog
      </div>
      <h1>My Cart</h1>
      {display}
    </>
  );
}

export default CartSummary;
