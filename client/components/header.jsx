import React from 'react';

function Header(props) {
  let cartItemTotal = 0;
  for (let cartTotalIndex = 0; cartTotalIndex < props.cartItemCount.length; cartTotalIndex++) {
    cartItemTotal += props.cartItemCount[cartTotalIndex].quantity;
  }
  const totalItems = cartItemTotal === 1 ? '1' : `${cartItemTotal}`;
  return (
    <div className="fade-in">
      <nav className="navbar sticky-top bg-light header">
        <div className="nav-brand">
          <div
            className="link-pointer shop-name"
            onClick={() => props.setView('catalog')}
          >
            {props.text}
          </div>
        </div>
        <div
          className="link-pointer float-right modal-item-name"
          onClick={() => props.setView('cart')}
        >
          {totalItems} Items <i className="fas fa-shopping-bag"></i>
        </div>
      </nav>
    </div>
  );
}

export default Header;
