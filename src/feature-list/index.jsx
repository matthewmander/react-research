import { connect } from 'react-redux';
import React from 'react';
import { onFeatureSelected} from '../actions'
import FeatureItem from '../feature-item'

function mapStateToProps(state) {
  return { features: state.get('features')};
}

function mapDispatchToProps(dispatch) {
  return { 
    onFeatureSelected: (id) => dispatch(onFeatureSelected(id)),
  };
}

class FeatureList extends React.Component {
  render() {
    var features = this.props.features.map(({text,id, selected})=>(
        <FeatureItem 
          text={text} 
          id={id} 
          selected = {selected}
          onFeatureSelected={this.props.onFeatureSelected}/>
    ));
    return (
      <div>
      <h3>Feature list will appear below</h3>
      <ul>{features}</ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureList);
