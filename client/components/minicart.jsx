import React from 'react';

function MiniCartList(props) {

  return (
    <li className="list-group-item d-flex justify-content-between">
      <div>
        <h6 className="my-0">{props.name}</h6>
        <small className="text-muted">Quantity: {props.quantity}</small>
      </div>
      <span className="text-muted">
        {'$' + (props.price / 100).toFixed(2)}
      </span>
    </li>
  );
}

export default MiniCartList;
