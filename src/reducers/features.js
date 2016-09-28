import Immutable from 'immutable';
import UUID from 'react-native-UUID'
import {SELECT_FEATURE, SHOW_SELECTED, LOAD_FROM_STORED_STATE, RESET_STATE, ADD_DUMMY_FEATURE} from '../actions'

const initialState = Immutable.Map({
    features: Immutable.List(),
    showselectedfeatures: false,
})

function parseState(state) {
    return {
        features: Immutable.List(state.features),
        showselectedfeatures: state.showselectedfeatures
    }
} 

export default function features(state = initialState, action) {
  switch (action.type) {
    case LOAD_FROM_STORED_STATE:
      return action.newState == null ? state : parseState(action.newState.features);
    case ADD_DUMMY_FEATURE:
        return state
          .set('features', state
            .get('features')
            .push({id: UUID.v4(), text: 'dummy feature', selected:false}))
    case SELECT_FEATURE:
      return state   
        .set('features', state
          .get('features')
          .map((f)=> f.id == action.id 
            ? {id: f.id, text:f.text, selected:!f.selected}
            : f));
    case SHOW_SELECTED:
      return state   
        .set('showselectedfeatures', !state.get('showselectedfeatures'));
    case RESET_STATE:
      return initialState;
    default:
        return state;
  }
}
 
