import Immutable from 'immutable';
import { combineReducers } from 'redux';
import {LOAD_INITIAL_DATA, SELECT_FEATURE, SHOW_SELECTED, SET_FORENAME, LOAD_FROM_STORED_STATE, RESET_STATE, ADD_DUMMY_FEATURE, ADD_DUMMY_PRODUCT, SET_CURRENT_PAGE} from './actions'
import UUID from 'react-native-UUID'
import PageEnum from './enums'

const clientInitialState = Immutable.Map({
  forename: 'Test forename',
  surname: 'Test surname',
  age: '27'
});

const initialState = Immutable.Map({
  username: 'Matt',
  features: Immutable.List(),
  products: Immutable.List(),
  showselectedfeatures: false,
  page: null,
  client: clientInitialState
});

const buildImmutableClientState = (state) => Immutable.Map({
  forename: state.forename,
  surname: 'Test surname',
  age: ''
});

const buildImmutableState = (state) => Immutable.Map({
  username: state.username,
  features: Immutable.List(state.features),
  products: Immutable.List(state.products),
  showselectedfeatures: state.showselectedfeatures,
  page: state.page,
  client: buildImmutableClientState(state.client)
});



export function root(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE:
      return initialState;
    case LOAD_FROM_STORED_STATE:
      return action.newState == null ? state : buildImmutableState(action.newState);
    case ADD_DUMMY_FEATURE:
        return state
          .set('features', state
            .get('features')
            .push({id: UUID.v4(), text: 'dummy feature', selected:false}))
    case ADD_DUMMY_PRODUCT:
        return state  
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
    case SET_CURRENT_PAGE:
      return state
        .set('page', action.page)
    case SET_FORENAME:
  
      return state;
    default:
      return state;
  }
  
}
