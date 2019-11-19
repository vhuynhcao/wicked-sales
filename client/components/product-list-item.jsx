import React from 'react';

class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="card">
        <img className="card-im-top" src={this.props.image}/>
        <div className="card-body">
          <h2 className="card-title">{this.props.name}</h2>
          <h4 className="card-subtitle mb-2 text-muted">{this.props.price}</h4>
          <p className="card-text">{this.props.info}</p>
        </div>
      </div>
    );
  }

}

export default ProductListItem;
