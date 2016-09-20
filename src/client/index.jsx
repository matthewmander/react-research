import { connect } from 'react-redux';
import React from 'react';
import {onForenameChange} from '../actions'

function mapStateToProps(state) {

  return { 
    forename: state.get('client').get('forename')
  };
}

function mapDispatchToProps(dispatch) {
  return { 
    onForenameChange: (e) => dispatch(onForenameChange(e.target.value))
  };
}

class Client extends React.Component {
  render() {
    return (
      <div>Client form
        <div>
        <div>Forename
        <input type='text' value={this.props.forename} onChange={this.props.onForenameChange}/></div>
        <div>Surname
        <input type='text' value={this.props.surname}/></div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Client);
