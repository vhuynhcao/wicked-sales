import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(productId) {
    fetch(`/api/products?productId=${productId}`)
      .then(response => response.json())
      .then(product => this.setState({ product }))
      .catch(error => console.error('Fetch fail: ', error));
  }

  render() {
    if (this.state.product !== null) {
      return (<div>
        <img src={this.props.image}/>
        <h2>{this.props.name}</h2>
        <h4 className="text-muted">{'$' + (this.props.price / 100).toFixed(2)}</h4>
        <p>{this.props.shortInfo}</p>
        <p>{this.props.longInfo}</p>
      </div>
      );
    }
  }
}

export default ProductDetails;
