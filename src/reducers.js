import { Map, List } from 'immutable';
import { combineReducers } from 'redux';
import {LOAD_INITIAL_DATA, SELECT_FEATURE} from './actions'
import UUID from 'react-native-UUID'

const initialState = Map({
  username: 'Matt',
  features: List(),
  products: List(),
  selectedFeatures: List()
});

export function root(state = initialState, action) {
  switch (action.type) {
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
            : f))           
        .set('selectedFeatures', state
            .get('selectedFeatures')
            .push({id: action.id}))
    default:
      return state;
  }
  
}
