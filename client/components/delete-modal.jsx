import React from 'react';

class DeleteModal extends React.Component {

  render() {
    const cartItemId = this.props.productInfo.cartItemId;
    const productId = this.props.productInfo.productId;
    return (
      <div className="modalBox d-flex">
        <div className="innerModal bg-light">
          <p className="ml-3 mr-3">
            Are you sure you want to remove{' '}
            <span className="font-weight-bold">
              {this.props.productInfo.name}
            </span>{' '}
            from your cart?
          </p>
          <button
            type="button"
            className="btn btn-info mb-3 mr-2"
            onClick={() => {
              this.props.deleteItem({ cartItemId, productId });
              this.props.setView('catalog', {});
            }}
          >
            Yes
          </button>
          <button
            type="button"
            className="btn btn-danger mb-3 mr-2"
            onClick={() => this.props.close()}
          >
            No
          </button>
        </div>
      </div>
    );
  }
}

export default DeleteModal;
