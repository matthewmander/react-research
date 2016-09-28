import Immutable from 'immutable';
import { combineReducers } from 'redux';
import {SET_FORENAME, LOAD_FROM_STORED_STATE, RESET_STATE, SET_CURRENT_PAGE} from '../actions'
import UUID from 'react-native-UUID'
import PageEnum from '../enums'

const initialState = Immutable.Map({
  username: 'Matt',
  products: Immutable.List(),
  page: null
});

const buildImmutableState = (state) => Immutable.Map({
  username: state.username,
  products: Immutable.List(state.products),
  page: state.page,
});

export default function other(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE:
      return initialState;
    case LOAD_FROM_STORED_STATE:
      return action.newState == null ? state : buildImmutableState(action.newState.other);
    case SET_CURRENT_PAGE:
      return state
        .set('page', action.page)
    case SET_FORENAME:
  
      return state;
    default:
      return state;
  }
  
}
