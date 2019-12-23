import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

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
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    fetch('/api/cart')
      .then(response => response.json())
      .then(cartItem => this.setState({ cart: this.state.cart.concat(cartItem) }))
      .catch(error => console.error('Fetch fail: ', error));
  }

  addToCart(product) {
    const request = {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/cart', request)
      .then(response => response.json())
      .then(product => {
        this.setState({ cart: this.state.cart.concat(product) });
      })
      .catch(error => console.error('Add error: ', error));
  }

  setView(name, params) {
    this.setState({
      view: { name, params }
    });
  }

  placeOrder({ name, creditCard, shippingAddress }) {
    const request = {
      method: 'POST',
      body: JSON.stringify({ name, creditCard, shippingAddress }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/orders', request)
      .then(response => response.json())
      .then(order => {
        this.setState({
          view: {
            name: 'catalog',
            params: {}
          }
        });
      })
      .then(error => console.error('Failed to post', error));
  }

  render() {
    let currentView;
    const stateName = this.state.view.name;
    const stateParams = this.state.view.params;
    if (stateName === 'catalog') {
      currentView = (
        <div className="productBox">
          <ProductList setView={this.setView} />
        </div>
      );
    } else if (stateName === 'details') {
      currentView = <ProductDetails productParams={stateParams} setView={this.setView} addToCart={this.addToCart}/>;
    } else if (stateName === 'cart') {
      currentView = <CartSummary setView={this.setView} viewCart={this.state.cart}/>;
    } else if (stateName === 'checkout') {
      currentView = <CheckoutForm setView={this.setView} placeOrder={this.placeOrder} viewPrice={this.state.cart}/>;
    }

    return (
      <div className="salesCont">
        <Header text="Simply Creative" cartItemCount={this.state.cart.length} setView={this.setView}/>
        <div className="container mt-4">
          {currentView}
        </div>
      </div>
    );

  }
}
