import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

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
    let singleProductElement;
    const stateName = this.state.view.name;
    const stateParams = this.state.view.params;
    if (stateName === 'catalog') {
      singleProductElement = <ProductList setView={this.setView}/>;
    } else if (stateName === 'details') {
      singleProductElement = <ProductDetails productParams={stateParams} setView={this.setView}/>;
    }
    return (
      <div className="salesCont">
        <Header text="Wicked Sales" />
        <div className="container">
          {singleProductElement}
        </div>
      </div>
    );

  }
}
