import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
  }

  render() {
    let totalPrice = 0;
    this.props.viewPrice.map(product => (totalPrice = totalPrice + product.price));
    return (
      <div className="container">
        <h1>Checkout</h1>
        <h4 className="text-muted">
          Order Total: {'$' + (totalPrice / 100).toFixed(2)}
        </h4>
        <form className="mt-4">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <label>Credit Card</label>
            <input
              type="text"
              className="form-control"
              placeholder="Credit Card"
            />
          </div>
          <div className="from-group">
            <label>Shipping Address</label>
            <textarea type="text" className="form-control" />
          </div>
        </form>
        <div className="container d-flex justify-content-between mt-3">
          <i
            className="backLink text-muted fas fa-angle-double-left mr-1"
            onClick={() => this.props.setView('catalog')}
          >
            {' '}
            Continue Shopping
          </i>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.props.placeOrder()}
          >
            Place Order
          </button>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
