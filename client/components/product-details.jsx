import React from 'react';
import CartOrContinueModal from './cart-cont-modal';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      isOpen: false
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount() {
    const detailId = this.props.productParams.product;
    fetch(`/api/products?productId=${detailId}`)
      .then(response => response.json())
      .then(product => this.setState({ product }))
      .catch(error => console.error('Fetch fail: ', error));
  }

  render() {
    const addToCart = this.props.addToCart;
    const singleProduct = this.state.product;
    if (!singleProduct) {
      return null;
    }

    const cartContModal = this.state.isOpen ? <CartOrContinueModal setView={this.props.setView} product={singleProduct}/> : null;

    const imgFit = {
      maxHeight: '200px',
      objectFit: 'contain'
    };

    return (
      <div className="container-fluid">
        <>{cartContModal}</>
        <div
          className="linkPointer text-muted"
          onClick={() => this.props.setView('catalog', {})}
        >
          <i className="fas fa-angle-double-left mr-2" />
          Back to Catalog
        </div>
        <div className="card">
          <div className="row no-gutters mb-4">
            <div className="col-md-4">
              <img style={imgFit}
                src={singleProduct.image}
                className="img-fluid float-left ml-2 mt-2"
              />
            </div>
            <div className="container col-sm-4">
              <div className="card-body">
                <h3 className="card-title">{singleProduct.name}</h3>
                <h4 className="text-muted card-text">
                  {'$' + (singleProduct.price / 100).toFixed(2)}
                </h4>
                <p className="card-text">{singleProduct.shortDescription}</p>
                <button className="linkPointer btn btn-secondary"
                  onClick={() => {
                    this.showModal();
                    addToCart({ productId: singleProduct.productId, operator: '+' });
                  }}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="container card-text mb-3">
            {singleProduct.longDescription}
          </div>
        </div>
      </div>
    );

  }
}

export default ProductDetails;
