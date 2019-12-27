import React from 'react';

function ProductListItem(props) {
  const imgSize = {
    maxHeight: '200px',
    objectFit: 'contain'
  };
  return (
    <div className="col-md-3 d-flex align-items-stretch my-2">
      <div className="card link-pointer" onClick={() => props.setView('details', { product: props.id })}>
        <img className="card-img-top" style={imgSize} src={props.image}/>
        <div className="card-body d-flex flex-column justify-content-around">
          <h4 className="card-title">{props.name}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{'$' + (props.price / 100).toFixed(2)}</h6>
          <p className="card-text">{props.info}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
