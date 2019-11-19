import React from 'react';
import Header from './header';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.componentDidMount();
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
    return (
      <div className="container">
        <Header text="Wicked Sales" />
        <ProductList product={this.state.products}/>
      </div>
    );

  }
}
