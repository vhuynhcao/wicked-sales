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
    const { firstName, lastName, email, address1, city, zip, state, creditCard, expMonth, expYear, cvv } = this.state;
    const isEnabled =
      firstName.length > 1 &&
      lastName.length > 1 &&
      email.length > 1 &&
      address1.length > 1 &&
      city.length > 1 &&
      zip.length > 1 &&
      state.length > 1 &&
      creditCard.length > 1 &&
      expMonth.length > 1 &&
      expYear.length > 1 &&
      cvv.length > 1;
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
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                className="form-control"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                className="form-control"
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                className="form-control"
                placeholder="you@example.com"
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label>Address Line 1</label>
              <input
                type="text"
                name="address1"
                value={this.state.address1}
                className="form-control"
                placeholder="123 ABC St"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <label>Address Line 2</label>
              <input
                type="text"
                name="address2"
                value={this.state.address2}
                className="form-control"
                placeholder="Apartment, suite, unit, etc. (Optional)"
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-4">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={this.state.city}
                className="form-control"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label>Zip Code</label>
              <input
                type="text"
                name="zip"
                value={this.state.zip}
                className="form-control"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label>State</label>
              <select
                name="state"
                value={this.state.state}
                className="form-control"
                onChange={this.handleInputChange}
              >
                <option>Choose...</option>
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
              </select>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label>Credit card number</label>
              <input
                type="text"
                name="creditCard"
                value={this.state.creditCard}
                className="form-control"
                placeholder="0000 0000 0000 0000"
                minLength="16"
                maxLength="16"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col-md-3">
              <label>Expiration date</label>
              <div className="d-flex">
                <select
                  name="expMonth"
                  value={this.state.expMonth}
                  className="form-control col mr-2"
                  onChange={this.handleInputChange}
                >
                  <option>Month</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select
                  name="expYear"
                  value={this.state.expYear}
                  className="form-control col"
                  onChange={this.handleInputChange}
                >
                  <option>Year</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                </select>
              </div>
            </div>
            <div className="col-md-3">
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                value={this.state.cvv}
                className="form-control"
                onChange={this.handleInputChange}
              />
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
