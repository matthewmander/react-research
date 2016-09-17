import Immutable from 'immutable';
import { combineReducers } from 'redux';
import {LOAD_INITIAL_DATA, SELECT_FEATURE, SHOW_SELECTED , LOAD_FROM_STORED_STATE, RESET_STATE} from './actions'
import UUID from 'react-native-UUID'

const initialState = Immutable.Map({
  username: 'Matt',
  features: Immutable.List(),
  products: Immutable.List(),
  showselectedfeatures: false
});

const buildImmutableState = (state) => Immutable.Map({
  username: state.username,
  features: Immutable.List(state.features),
  products: Immutable.List(state.products),
  showselectedfeatures: state.showselectedfeatures
});

export function root(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE:
      return initialState;
    case LOAD_FROM_STORED_STATE:
      return action.newState == null ? state : buildImmutableState(action.newState);
    case LOAD_INITIAL_DATA:
        return state
          .set('features', state
            .get('features')
            .push({id: UUID.v4(), text: 'dummy feature', selected:false}))
          .set('products', state
            .get('products')
            .push({id: UUID.v4(),text: 'dummy product'}))
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
    default:
      return state;
  }
  
}
