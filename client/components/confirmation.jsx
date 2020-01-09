import React from 'react';

class Confirmation extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Thank you for your order!</h1>
          A confirmation e-mail with your order details will be sent to the
          e-mail provided.
        </div>
      </div>
    );
  }
}

export default Confirmation;
