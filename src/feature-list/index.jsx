import { connect } from 'react-redux';
import React from 'react';
import { onFeatureSelected, onShowSelected, addDummyFeature } from '../actions'
import FeatureItem from '../feature-item'
import { getVisibleFeatures } from '../selectors'

function mapStateToProps(state) {
  return { 
    features: getVisibleFeatures(state),
    showSelectedFeatures: state.get('showselectedfeatures')
    };
}

function mapDispatchToProps(dispatch) {
  return { 
    onFeatureSelected: (id) => dispatch(onFeatureSelected(id)),
    addDummyFeature: () => dispatch(addDummyFeature()),
    onShowSelected: () => dispatch(onShowSelected())
  };
}

class FeatureList extends React.Component {
  render() {
    var buttonClass = this.props.showSelectedFeatures ? 'selected': '';
    var features = this.props.features.map(({text,id, selected})=>(
        <li key={id}><FeatureItem 
          text={text} 
          id={id} 
          selected = {selected}
          onFeatureSelected={this.props.onFeatureSelected}/>
        </li>
    ));
    return (
      <div className='featureList'>
      <h3>Feature list will appear below</h3>
      <button onClick={this.props.addDummyFeature.bind(this)}>Add Dummy Feature</button>
      <button onClick={this.props.onShowSelected} className={buttonClass}>Show selected only</button>
      <ul>{features}</ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureList);
