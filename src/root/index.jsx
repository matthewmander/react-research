import React from 'react'
import { connect } from 'react-redux'
import { loadInitialData} from '../actions'
import FeatureList from '../feature-list'
import ProductList from '../product-list'

function mapStateToProps(state){
  return { 
    username:state.get('username'), features: state.get('features')}
}

function mapDispatchToProps(dispatch){
  return {
    loadInitialData: (username) => dispatch(loadInitialData()),
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Research Demo - Using React and Redux</h1>
        <h2>Hello {this.props.username}</h2>
        <button onClick={this.props.loadInitialData.bind(this, this.props.username)}>Load</button>
        <FeatureList/>
        <ProductList/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);