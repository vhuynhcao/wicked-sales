import React from 'react';
import CartSummaryItems from './cart-summary-items';

function CartSummary(props) {
  const cartItems = props.viewCart;

  return (
    <div>
      <div
        className="backLink text-muted"
        onClick={() => props.setView('catalog')}
      >
        {'< Back to Catalog'}
      </div>
      <h1>My Cart</h1>
      {cartItems.map(item => (
        <CartSummaryItems key={item.productId} cartInfo={item} />
      ))}
      <h2>Total Price $0</h2>
    </div>
  );
}

export default CartSummary;
