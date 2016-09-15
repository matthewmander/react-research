import { connect } from 'react-redux';
import React from 'react';
import { onFeatureSelected, onShowSelected} from '../actions'
import FeatureItem from '../feature-item'
import { getVisibleFeatures } from '../selectors'

function mapStateToProps(state) {
  return { features: getVisibleFeatures(state)};
}

function mapDispatchToProps(dispatch) {
  return { 
    onFeatureSelected: (id) => dispatch(onFeatureSelected(id)),
    onShowSelected: () => dispatch(onShowSelected())
  };
}

class FeatureList extends React.Component {
  render() {
    var features = this.props.features.map(({text,id, selected})=>(
        <li key={id}><FeatureItem 
          text={text} 
          id={id} 
          selected = {selected}
          onFeatureSelected={this.props.onFeatureSelected}/>
        </li>
    ));
    return (
      <div>
      <h3>Feature list will appear below</h3>
      <button onClick={this.props.onShowSelected}>Show selected only</button>
      <ul>{features}</ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureList);
