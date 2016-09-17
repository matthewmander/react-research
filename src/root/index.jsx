import React from 'react'
import { connect } from 'react-redux'
import { loadInitialData, resetState } from '../actions'
import FeatureList from '../feature-list'
import ProductList from '../product-list'
import '../main.styl'


function mapStateToProps(state){
  return { 
    username:state.get('username'), features: state.get('features')}
}

function mapDispatchToProps(dispatch){
  return {
    loadInitialData: () => dispatch(loadInitialData()),
    resetState: ()=> dispatch(resetState())
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Research Demo - Using React and Redux</h1>
        <h2>Hello {this.props.username}</h2>
        <button onClick={this.props.loadInitialData.bind(this)}>Add Dummy Feature</button>
        <button onClick={this.props.resetState.bind(this)}>Reset</button>
        <FeatureList/>
        <ProductList/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);