import React from 'react';

function Header(props) {
  return (
    <nav className="navbar sticky-top header">
      <div className="nav-brand">
        <div className="linkPointer shopName" onClick={() => props.setView('catalog')}>{props.text}</div>
      </div>
      <div
        className="linkPointer float-right"
        onClick={() => props.setView('cart')}
      >
        {props.cartItemCount} Items
        <i className="fas fa-shopping-cart" />
      </div>
    </nav>
  );
}

export default Header;
