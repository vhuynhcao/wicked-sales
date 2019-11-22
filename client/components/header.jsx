import React from 'react';

function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-info sticky-top">
      <div className="nav-brand">
        <i className="fas fa-dollar-sign mr-1"/>
        {props.text}
      </div>
      <div className="float-right">
        {props.cartItemCount} Items
        <i className="fas fa-shopping-cart" />
      </div>
    </nav>
  );
}

export default Header;
