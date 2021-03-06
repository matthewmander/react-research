import { connect } from 'react-redux';
import React from 'react';
import ProductItem from '../product-item'

function mapStateToProps(state) {
  return { products: state.other.get('products') };
}

function mapDispatchToProps(dispatch) {
  return { };
}

class ProductList extends React.Component {
  render() {
    var products = this.props.products.map(({text, id}) => (
        <li key={id}><ProductItem text={text} id={id}/></li>
    ));
    return (
      <div>
      <h3>Product List here!</h3>
      <ul>{products}</ul>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
