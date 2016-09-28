import { combineReducers } from 'redux';

import features from './features';
import client from './client';
import graph from './graph';
import other from './other';

export default combineReducers({
  features,
  client,
  graph,
  other
});