import React from 'react';

class CheckoutFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
  }

  render() {
    return (
      <form>
        <div className="form-group col-md-6">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Full Name"/>
        </div>
        <div className="form-group col-md-6">
          <label>Credit Card</label>
          <input type="text" className="form-control" placeholder="Credit Card"/>
        </div>
        <div className="from-group col-md-6">
          <label>Shipping Address</label>
          <input type="text" className="form-control"/>
        </div>
      </form>
    );
  }
}

export default CheckoutFrom;
