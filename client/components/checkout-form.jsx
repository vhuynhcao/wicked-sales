import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
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
    const { firstName, lastName, email, creditCard, shippingAddress } = this.state;
    const isEnabled = firstName.length > 1 && lastName.length > 1 && email.length > 5 && creditCard.length > 0 && shippingAddress.length > 0;
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
            <div className="col-md-6">
              <label>First name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-6">
              <label>Last name</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <label>Email</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label>Address Line 1</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-6">
              <label>Address Line 2</label>
              <input
                type="text"
                className="form-control"
                placeholder="Apartment, suite, unit, etc. (Optional)"
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-3">
              <label>Country</label>
              <select className="form-control">
                <option>Choose...</option>
                <option>USA</option>
              </select>
            </div>
            <div className="col-md-3">
              <label>City</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3">
              <label>Zip Code</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3">
              <label>State</label>
              <select className="form-control">
                <option>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-4">
              <label>Credit card number</label>
              <input
                type="text"
                className="form-control"
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div className="col-md-4">
              <label>Expiration date</label>
              <input type="text" className="form-control" placeholder="MM/YY" />
            </div>
            <div className="col-md-4">
              <label>CVV</label>
              <input type="text" className="form-control" />
            </div>
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
