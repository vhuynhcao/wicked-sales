import React from 'react';
import CartSummaryItems from './cart-summary-items';

function CartSummary(props) {
  const cartItems = props.viewCart;

  let totalPrice = 0;
  cartItems.map(product => (totalPrice = totalPrice + product.price));
  return (
    <div>
      <div
        className="backLink text-muted"
        onClick={() => props.setView('catalog')}
      >
        {'< Back to Catalog'}
      </div>
      <h1>My Cart</h1>
      {cartItems.map(item => {
        return <CartSummaryItems key={item.productId} cartInfo={item} />;
      })}
      <h2>Total Price {'$' + (totalPrice / 100).toFixed(2)}</h2>
    </div>
  );
}

export default CartSummary;
