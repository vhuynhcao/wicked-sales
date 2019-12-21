import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
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
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              type="text"
              className="form-control"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <label>Credit Card</label>
            <input
              name="creditCard"
              value={this.state.creditCard}
              onChange={this.handleInputChange}
              type="text"
              className="form-control"
              placeholder="Credit Card"
            />
          </div>
          <div className="form-group">
            <label>Shipping Address</label>
            <textarea
              name="shippingAddress"
              value={this.state.shippingAddress}
              onChange={this.handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
        </form>
        <div className="container d-flex justify-content-between mt-3">
          <div className="linkPointer text-muted"
            onClick={() => this.props.setView('catalog')}>
            <i
              className="fas fa-angle-double-left mr-2"/>
            Continue Shopping
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.props.placeOrder(this.state)}
          >
            Place Order
          </button>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
