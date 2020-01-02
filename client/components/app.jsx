import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import DemoModal from './demo-modal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'cart',
        params: {}
      },
      cart: [],
      isOpen: false
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.updateCartItems = this.updateCartItems.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.removeCartItems = this.removeCartItems.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    fetch('/api/cart')
      .then(response => response.json())
      .then(cartItem =>
        this.setState({ cart: this.state.cart.concat(cartItem) })
      )
      .catch(error => console.error('Fetch fail: ', error));
  }

  removeCartItems({ cartItemId, productId }) {
    const request = {
      method: 'DELETE',
      body: JSON.stringify({ cartItemId, productId }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/cart', request)
      .then(response => response.json())
      .then(deleted => this.getCartItems())
      .catch(error => console.error('Fetch fail: ', error));
  }

  updateCartItems({ productId, operator }) {
    const request = {
      method: 'POST',
      body: JSON.stringify({ productId, operator }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/cart', request)
      .then(response => response.json())
      .then(product => {
        if (this.state.cart.some(cartItem => cartItem.productId === product.productId)) {
          const cart = this.state.cart.filter(cartItem => {
            return cartItem.cartItemId !== product.cartItemId;
          });
          cart.push(product);
          this.setState({ cart });
        } else {
          this.setState({ cart: this.state.cart.concat(product) });
        }
      }
      )
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
      body: JSON.stringify({
        name,
        creditCard,
        shippingAddress
      }),
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
          },
          cart: []
        });
      });
  }

  showModal() {
    this.setState({ isOpen: true });
  }

  hideModal() {
    this.setState({ isOpen: false });
  }

  render() {
    let currentView;
    const stateName = this.state.view.name;
    const stateParams = this.state.view.params;
    if (stateName === 'catalog') {
      currentView = (
        <div className="productBox col-md-12">
          <ProductList setView={this.setView} />
        </div>
      );
    } else if (stateName === 'details') {
      currentView = (
        <ProductDetails
          productParams={stateParams}
          setView={this.setView}
          addToCart={this.updateCartItems}
        />
      );
    } else if (stateName === 'cart') {
      currentView = (
        <CartSummary
          setView={this.setView}
          viewCart={this.state.cart}
          deleteItem={this.removeCartItems}
          updateCart={this.updateCartItems}
        />
      );
    } else if (stateName === 'checkout') {
      currentView = (
        <CheckoutForm
          setView={this.setView}
          placeOrder={this.placeOrder}
          viewPrice={this.state.cart}
        />
      );
    }

    const showModal = this.state.isOpen ? (
      <DemoModal close={this.hideModal} />
    ) : null;

    return (
      <>
        <div className="container">{showModal}</div>
        <Header
          text="Simply Creative"
          cartItemCount={this.state.cart}
          setView={this.setView}
        />
        <div className="container mt-4">{currentView}</div>
      </>
    );
  }
}
