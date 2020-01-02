import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleInputSubmit(event) {
    event.preventDefault();
    this.props.placeOrder(this.state);
  }

  render() {
    const { firstName, lastName, creditCard, shippingAddress } = this.state;
    const isEnabled = firstName.length > 1 && lastName.length > 1 && creditCard.length > 0 && shippingAddress.length > 0;
    let totalPrice = 0;
    this.props.viewPrice.map(product => (totalPrice = totalPrice + product.price));
    return (
      <div className="container">
        <h1>Checkout</h1>
        <h4 className="text-muted">
          Order Total: {'$' + (totalPrice / 100).toFixed(2)}
        </h4>
        <form className="mt-4" onSubmit={this.handleInputSubmit}>
          <p className="warning">
            Please do not use real personal information in the form.
          </p>
          <div className="row">
            <div className="col">
              <label>Given Name</label>
              <input
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
                type="text"
                className="form-control"
                placeholder="Given Name"
              />
            </div>
            <div className="col">
              <label>Family Name</label>
              <input
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
                type="text"
                className="form-control"
                placeholder="Family Name"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Credit Card</label>
            <input
              name="creditCard"
              value={this.state.creditCard}
              onChange={this.handleInputChange}
              type="text"
              className="form-control"
              placeholder="0000 0000 0000 0000"
              minLength="16"
              maxLength="16"
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
          <div className="container d-flex justify-content-between mt-3 mb-5">
            <div
              className="linkPointer text-muted"
              onClick={() => this.props.setView('catalog')}
            >
              <i className="fas fa-angle-double-left mr-2" />
              Continue Shopping
            </div>
            <button
              disabled={!isEnabled}
              type="submit"
              className="linkPointer btn btn-primary"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
