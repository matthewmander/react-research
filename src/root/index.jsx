import React from 'react'
import { connect } from 'react-redux'
import { resetState } from '../actions'
import FeatureList from '../feature-list'
import ProductList from '../product-list'
import Client from '../client'
import Menu from '../menu'
import { PageEnum } from '../enums'
import '../main.styl'

function mapStateToProps(state){
  return { 
    username:state.get('username'), 
    page: state.get('page')
  }
}

function mapDispatchToProps(dispatch){
  return {
    resetState: ()=> dispatch(resetState())
  }
}

function getPageComponent(page){
  switch (page) {
    case PageEnum.FEATURES:
      return <FeatureList/>
    case PageEnum.PRODUCTS:
      return <ProductList/>
    case PageEnum.CLIENT:
      return <Client/>
    default:
      return <FeatureList/>
  }
}

class App extends React.Component {
  render() {
    var pageComponent = getPageComponent(this.props.page);
    return (
      <div>
        <h1>Research Demo - Using React and Redux</h1>
        <h2>Hello {this.props.username}</h2>
        <Menu/>
        {pageComponent}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);