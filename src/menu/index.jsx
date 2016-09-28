import { connect } from 'react-redux';
import React from 'react';
import {resetState, setCurrentPage} from '../actions'
import { PageEnum } from '../enums'

function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return {
    resetState: ()=> dispatch(resetState()),
    setCurrentPage: (page )=> dispatch(setCurrentPage(page))
  };
}

class Menu extends React.Component {
  render() {
    return (
      <div>
      <button onClick={this.props.setCurrentPage.bind(this, PageEnum.CLIENT)}>Client</button>
      <button onClick={this.props.setCurrentPage.bind(this, PageEnum.FEATURES)}>Features</button>
      <button onClick={this.props.setCurrentPage.bind(this, PageEnum.PRODUCTS)}>Products</button>
      <button onClick={this.props.setCurrentPage.bind(this, PageEnum.GRAPH)}>Graph</button>
      <button onClick={this.props.resetState.bind(this)}>Reset Data</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
