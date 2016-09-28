import Immutable from 'immutable';
import UUID from 'react-native-UUID'
import {SET_FORENAME, SET_SURNAME, LOAD_FROM_STORED_STATE, RESET_STATE} from '../actions'

const initialState = Immutable.Map({
  forename: 'Test forename',
  surname: 'Test surname',
  age: '27'
});

function parseState(state) {
    return {
        forename: state.forename,
        surname: state.surname,
        age: state.age
    }
} 

export default function client(state = initialState, action) {
  switch (action.type) {
    case LOAD_FROM_STORED_STATE:
      return action.newState == null ? state : parseState(action.newState.client);
    case SET_FORENAME:
        return state
          .set('forename', action.text);
    case SET_SURNAME:
        return state
          .set('surname', action.text);
    case RESET_STATE:
      return initialState;
    default:
        return state;
  }
}
 
