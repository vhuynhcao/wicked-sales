import React from 'react';

function CartSummaryItems(props) {
  const imgSize = {
    maxHeight: '200px',
    objectFit: 'contain'
  };

  const cartItemId = props.cartInfo.cartItemId;
  const productId = props.cartInfo.productId;
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={props.cartInfo.image} className="card-img" style={imgSize}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">{props.cartInfo.name}</h4>
            <h6 className="card-text text-muted">{'$' + (props.cartInfo.price / 100).toFixed(2)}</h6>
            <p className="card-text">{props.cartInfo.shortDescription}</p>
            <p className="linkPointer text-secondary" onClick={() => { props.deleteItem({ cartItemId, productId }); }}>Remove Item</p>
          </div>
        </div>
      </div>
    </div>);
}

export default CartSummaryItems;
