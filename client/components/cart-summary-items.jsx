import React from 'react';
import DeleteModal from './delete-modal';

class CartSummaryItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const productId = this.props.cartInfo.productId;
    const quantity = this.props.cartInfo.quantity;
    const imgSize = {
      maxHeight: '200px',
      objectFit: 'contain'
    };

    const deleteModal = this.state.isOpen ? (
      <DeleteModal deleteItem={this.props.deleteItem} productInfo={this.props.cartInfo} close={this.toggleModal} setView={this.props.setView} cartLength={this.props.cartLength}/>) : null;

    let removeOrDecrease;
    if (quantity === 1) {
      removeOrDecrease = () => { this.toggleModal(); };
    } else {
      removeOrDecrease = () =>
        this.props.updateCart({ productId, operator: '-' });
    }
    return (
      <div className="card mb-3">
        <div className="row no-gutters">
          {deleteModal}
          <div className="col-md-4">
            <img
              src={this.props.cartInfo.image}
              className="card-img"
              style={imgSize}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title item-name">{this.props.cartInfo.name}</h4>
              <h6 className="card-text text-muted">
                {'$' + (this.props.cartInfo.price / 100).toFixed(2)}
              </h6>
              <p className="card-text">
                {this.props.cartInfo.shortDescription}
              </p>
              <p
                className="link-pointer text-secondary"
                onClick={() => {
                  this.toggleModal();
                }}
              >
                Remove Item
              </p>
              <div className="d-flex">
                <h5 className="mr-3 my-auto">Quantity: </h5>
                <div
                  className="d-flex btn-group btn-group-sm border border-secondary rounded quantity-box"
                  role="group"
                >
                  <button
                    className="link-pointer rounded-sm btn-light"
                    type="button"
                    onClick={ removeOrDecrease }
                  >
                    <i className="fas fa-minus" />
                  </button>
                  <div className="mx-3 quantity-number">{quantity}</div>
                  <button
                    className="link-pointer rounded-sm btn-light"
                    type="button"
                    onClick={() => {
                      this.props.updateCart({ productId, operator: '+' });
                    }}
                  >
                    <i className="fas fa-plus" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSummaryItems;
