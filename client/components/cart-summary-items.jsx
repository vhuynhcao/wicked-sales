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
    const imgSize = {
      maxHeight: '200px',
      objectFit: 'contain'
    };

    const deleteModal = this.state.isOpen ? (
      <DeleteModal deleteItem={this.props.deleteItem} productInfo={this.props.cartInfo} close={this.toggleModal} setView={this.props.setView}/>) : null;

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
              <h4 className="card-title">{this.props.cartInfo.name}</h4>
              <h6 className="card-text text-muted">
                {'$' + (this.props.cartInfo.price / 100).toFixed(2)}
              </h6>
              <p className="card-text">
                {this.props.cartInfo.shortDescription}
              </p>
              <p
                className="linkPointer text-secondary"
                onClick={() => {
                  this.toggleModal();
                }}
              >
                Remove Item
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSummaryItems;
