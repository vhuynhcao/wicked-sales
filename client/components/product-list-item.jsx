import React from 'react';

class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const imgSize = {
      maxHeight: '200px',
      objectFit: 'contain'
    };
    return (
      <div className="col-12 col-md-4 d-flex align-items-stretch my-3">
        <div className="card">
          <img className="card-img-top" style={imgSize} src={this.props.image}/>
          <div className="card-body d-flex flex-column justify-content-around">
            <h2 className="card-title">{this.props.name}</h2>
            <h4 className="card-subtitle mb-2 text-muted">{'$' + (this.props.price / 100).toFixed(2)}</h4>
            <p className="card-text">{this.props.info}</p>
          </div>
        </div>
      </div>
    );
  }

}

export default ProductListItem;
