import React from 'react';

function Header(props) {
  let cartItemTotal = 0;
  for (let cartTotalIndex = 0; cartTotalIndex < props.cartItemCount.length; cartTotalIndex++) {
    cartItemTotal += props.cartItemCount[cartTotalIndex].quantity;
  }
  const totalItems = cartItemTotal === 1 ? '1' : `${cartItemTotal}`;
  return (
    <nav className="navbar sticky-top bg-light header">
      <div className="nav-brand">
        <div
          className="linkPointer shopName"
          onClick={() => props.setView('catalog')}
        >
          {props.text}
        </div>
      </div>
      <div
        className="linkPointer float-right"
        onClick={() => props.setView('cart')}
      >
        {totalItems}{' '}Items{' '}
        <i className="fas fa-shopping-bag"></i>
      </div>
    </nav>
  );
}

export default Header;
