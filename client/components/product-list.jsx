import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(productList => {
        const listItem = this.state.products.concat(productList);
        this.setState({ products: listItem });
      })
      .catch(error => console.error('Fetch error: ', error));
  }

  render() {
    var productTable = this.state.products.map(item => {
      return (
        <ProductListItem setView={this.props.setView} key={item.productId} id={item.productId} item={item} image={item.image} name={item.name} price={item.price} info={item.shortDescription}/>
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
