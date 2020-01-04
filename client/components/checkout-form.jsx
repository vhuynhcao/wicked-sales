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
      cvv: '',
      validate: {
        firstName: true,
        lastName: true,
        email: true,
        address1: true,
        city: true,
        zip: true,
        state: true,
        creditCard: true,
        expMonth: true,
        expYear: true,
        cvv: true
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.validateForm();
  }

  handleInputSubmit(event) {
    event.preventDefault();
    this.props.placeOrder(this.state);
  }

  validateForm() {
    const validate = {
      firstName: true,
      lastName: true,
      email: true,
      address1: true,
      city: true,
      zip: true,
      state: true,
      creditCard: true,
      expMonth: true,
      expYear: true,
      cvv: true
    };

    const emailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const zipRegex = RegExp(/^\d{1,5}$/);
    const alphaRegex = RegExp(/^[A-Za-z ]+$/);
    const cardRegex = RegExp(/^[0-9 ]*$/);
    const cvvRegex = RegExp(/^[0-9]{3,4}$/);

    if (this.state.firstName.length < 2) {
      validate.firstName = false;
    }

    if (!alphaRegex.test(this.state.firstName)) {
      validate.firstName = false;
    }

    if (this.state.lastName.length < 2) {
      validate.lastName = false;
    }

    if (!alphaRegex.test(this.state.lastName)) {
      validate.lastName = false;
    }

    if (this.state.email.length < 6) {
      validate.email = false;
    }

    if (!emailRegex.test(this.state.email)) {
      validate.email = false;
    }

    if (this.state.address1.length < 6) {
      validate.address1 = false;
    }

    if (this.state.city.length < 3) {
      validate.city = false;
    }

    if (!alphaRegex.test(this.state.city)) {
      validate.city = false;
    }

    if (this.state.zip.length < 4) {
      validate.zip = false;
    }

    if (!zipRegex.test(this.state.zip)) {
      validate.zip = false;
    }

    if (this.state.state === '') {
      validate.state = false;
    }

    if (this.state.creditCard.length < 15) {
      validate.creditCard = false;
    }

    if (!cardRegex.test(this.state.creditCard)) {
      validate.creditCard = false;
    }

    if (this.state.expMonth === '') {
      validate.expMonth = false;
    }

    if (this.state.expYear === '') {
      validate.expYear = false;
    }

    if (this.state.cvv.length < 2) {
      validate.cvv = false;
    }

    if (!cvvRegex.test(this.state.cvv)) {
      validate.cvv = false;
    }

    this.setState({ validate });
  }

  render() {
    let totalPrice = 0;
    this.props.viewPrice.map(product => (totalPrice = totalPrice + product.price));
    const checkFirstName = this.state.validate.firstName ? null : 'is-invalid';
    const checkLastName = this.state.validate.lastName ? null : 'is-invalid';
    const checkEmail = this.state.validate.email ? null : 'is-invalid';
    const checkAddress = this.state.validate.address1 ? null : 'is-invalid';
    const checkCity = this.state.validate.city ? null : 'is-invalid';
    const checkZip = this.state.validate.zip ? null : 'is-invalid';
    const checkState = this.state.validate.state ? null : 'is-invalid';
    const checkCard = this.state.validate.creditCard ? null : 'is-invalid';
    const checkMonth = this.state.validate.expMonth ? null : 'is-invalid';
    const checkYear = this.state.validate.expYear ? null : 'is-invalid';
    const checkCvv = this.state.validate.cvv ? null : 'is-invalid';
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
              <label>
                First name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                className={`form-control ${checkFirstName}`}
                onChange={this.handleInputChange}
                maxLength="32"
                required
              />
              <div className="invalid-feedback">
                Name must be longer than 2 characters and alphabet characters
              </div>
            </div>
            <div className="col-md-6">
              <label>
                Last name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                className={`form-control ${checkLastName}`}
                onChange={this.handleInputChange}
                maxLength="32"
                required
              />
              <div className="invalid-feedback">
                Name must be longer than 2 characters and alphabet characters
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <label>
                Email<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                className={`form-control ${checkEmail}`}
                placeholder="you@example.com"
                onChange={this.handleInputChange}
                maxLength="254"
                required
              />
              <div className="invalid-feedback">
                Please enter a valid email address
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label>
                Address Line 1<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="address1"
                value={this.state.address1}
                className={`form-control ${checkAddress}`}
                placeholder="123 ABC St"
                onChange={this.handleInputChange}
                maxLength="42"
                required
              />
              <div className="invalid-feedback">
                Address must be longer than 6 characters
              </div>
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
                maxLength="42"
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-4">
              <label>
                City<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={this.state.city}
                className={`form-control ${checkCity}`}
                onChange={this.handleInputChange}
                maxLength="50"
                required
              />
              <div className="invalid-feedback">
                Please enter a valid city
              </div>
            </div>
            <div className="col-md-4">
              <label>
                Zip Code<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="zip"
                value={this.state.zip}
                className={`form-control ${checkZip}`}
                onChange={this.handleInputChange}
                maxLength="5"
                required
              />
              <div className="invalid-feedback">Valid zip code is required</div>
            </div>
            <div className="col-md-4">
              <label>
                State<span className="text-danger">*</span>
              </label>
              <select
                name="state"
                value={this.state.state}
                className={`form-control ${checkState}`}
                onChange={this.handleInputChange}
                maxLength="2"
                required
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
              <div className="invalid-feedback">Select a state</div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label>
                Credit card number<span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                name="creditCard"
                value={this.state.creditCard}
                className={`form-control ${checkCard}`}
                placeholder="0000 0000 0000 0000"
                maxLength="20"
                onChange={this.handleInputChange}
                required
              />
              <div className="invalid-feedback">
                Please enter a valid credit card number
              </div>
            </div>
            <div className="col-md-3">
              <label>
                Expiration date<span className="text-danger">*</span>
              </label>
              <div className="d-flex">
                <select
                  name="expMonth"
                  value={this.state.expMonth}
                  className={`form-control col mr-2 ${checkMonth}`}
                  onChange={this.handleInputChange}
                  maxLength="2"
                  required
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
                  className={`form-control col ${checkYear}`}
                  onChange={this.handleInputChange}
                  minLength="4"
                  maxLength="4"
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
              <label>
                CVV<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="cvv"
                value={this.state.cvv}
                className={`form-control ${checkCvv}`}
                onChange={this.handleInputChange}
                maxLength="4"
                required
              />
              <div className="invalid-feedback">
                Please enter a valid CVV number
              </div>
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
            <button type="submit" className="linkPointer btn btn-primary">
              Place Order
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
