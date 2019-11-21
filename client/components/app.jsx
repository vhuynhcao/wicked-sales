import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    fetch('/api/cart')
      .then(response => response.json())
      .then(cartItem => this.setState({ cart: cartItem }))
      .catch(error => console.error('Fetch fail: ', error));
  }

  setView(name, params) {
    this.setState({
      view: { name, params }
    });
  }

  render() {
    let singleProductElement;
    const stateName = this.state.view.name;
    const stateParams = this.state.view.params;
    if (stateName === 'catalog') {
      singleProductElement = <ProductList setView={this.setView}/>;
    } else if (stateName === 'details') {
      singleProductElement = <ProductDetails productParams={stateParams} setView={this.setView}/>;
    }
    return (
      <div className="salesCont">
        <Header text="Wicked Sales" cartItemCount={this.state.cart}/>
        <div className="container">
          {singleProductElement}
        </div>
      </div>
    );

  }
}
