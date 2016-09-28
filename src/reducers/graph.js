import Immutable from 'immutable';
import UUID from 'react-native-UUID'
import { LOAD_FROM_STORED_STATE, RESET_STATE, SET_GRAPH_DATA_1, SET_GRAPH_DATA_2} from '../actions'
import { DummyData,DummyData2 } from '../dummydata';

const initialState = Immutable.Map({
  data: DummyData
});


export default function client(state = initialState, action) {
  switch (action.type) {
    case LOAD_FROM_STORED_STATE:
      return state;
    case RESET_STATE:
      return initialState;
    case SET_GRAPH_DATA_1:
      return state.set('data',DummyData);
    case SET_GRAPH_DATA_2:
      return state.set('data',DummyData2);
    default:
        return state;
  }
}
 
