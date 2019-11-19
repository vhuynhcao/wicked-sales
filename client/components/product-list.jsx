import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    var productTable = this.props.product.map(item => {
      return (
        <ProductListItem key={item.id} id={item.id} item={item} image={item.image} name={item.name} price={item.price} info={item.shortDescription}/>
      );
    });

    return (
      <div className="row">
        {productTable}
      </div>
    );
  }
}

export default ProductList;
