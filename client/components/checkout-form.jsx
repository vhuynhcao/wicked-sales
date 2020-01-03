import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      address1: '',
      address2: '',
      city: '',
      zip: '',
      state: '',
      creditCard: '',
      expMonth: '',
      expYear: '',
      cvv: ''
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
              <input
                type="text"
                className="form-control"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label>Address Line 1</label>
              <input
                type="text"
                className="form-control"
                placeholder="123 ABC St"
              />
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
            <div className="col-md-4">
              <label>City</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>Zip Code</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>State</label>
              <select className="form-control">
                <option>Choose...</option>
                <option>AL</option>
                <option>AK</option>
                <option>AZ</option>
                <option>AR</option>
                <option>CA</option>
                <option>CO</option>
                <option>CT</option>
                <option>DE</option>
                <option>FL</option>
                <option>GA</option>
                <option>HI</option>
                <option>ID</option>
                <option>IL</option>
                <option>IN</option>
                <option>IA</option>
                <option>KS</option>
                <option>KY</option>
                <option>LA</option>
                <option>ME</option>
                <option>MD</option>
                <option>MA</option>
                <option>MI</option>
                <option>MN</option>
                <option>MS</option>
                <option>MO</option>
                <option>MT</option>
                <option>NE</option>
                <option>NV</option>
                <option>NH</option>
                <option>NJ</option>
                <option>NM</option>
                <option>NY</option>
                <option>NC</option>
                <option>ND</option>
                <option>OH</option>
                <option>OK</option>
                <option>OR</option>
                <option>PA</option>
                <option>RI</option>
                <option>SC</option>
                <option>SD</option>
                <option>TN</option>
                <option>TX</option>
                <option>UT</option>
                <option>VT</option>
                <option>VA</option>
                <option>WA</option>
                <option>WV</option>
                <option>WI</option>
                <option>WY</option>
              </select>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label>Credit card number</label>
              <input
                type="text"
                className="form-control"
                placeholder="0000 0000 0000 0000"
                minLength="16"
                maxLength="16"
              />
            </div>
            <div className="col-md-3">
              <label>Expiration date</label>
              <div className="d-flex">
                <select className="form-control col mr-2">
                  <option>MM</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
                <select className="form-control col">
                  <option>YY</option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                </select>
              </div>
            </div>
            <div className="col-md-3">
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
