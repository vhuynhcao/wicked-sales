import React from 'react';

class DeleteModal extends React.Component {

  render() {
    const cartItemId = this.props.productInfo.cartItemId;
    const productId = this.props.productInfo.productId;
    const cartLength = this.props.cartLength.length;

    let changeView;
    if (cartLength > 1) {
      changeView = 'cart';
    } else {
      changeView = 'catalog';
    }
    return (
      <div className="modal-box d-flex">
        <div className="inner-modal bg-light fade-in">
          <p className="ml-3 mr-3">
            Are you sure you want to remove{' '}
            <span className="modal-item-name">
              {this.props.productInfo.name}
            </span>{' '}
            from your cart?
          </p>
          <button
            type="button"
            className="btn btn-info mb-3 mr-2"
            onClick={() => {
              this.props.deleteItem({ cartItemId, productId });
              this.props.setView(changeView, {});
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
