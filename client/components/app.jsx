import React from 'react';
import Header from './header';
import ProductList from './product-list';
// import ProductDetails from './product-details.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: { name, params }
    });
  }

  render() {
    return (
      <div className="salesCont">
        <Header text="Wicked Sales" />
        <div className="container">
          <ProductList setView={this.setView}/>
        </div>
      </div>
    );

  }
}
