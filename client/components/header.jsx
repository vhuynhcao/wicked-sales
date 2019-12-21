import React from 'react';

function Header(props) {
  return (
    <nav className="navbar navbar-light bg-light sticky-top">
      <div className="nav-brand">
        <div className="shopName">{props.text}</div>
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
