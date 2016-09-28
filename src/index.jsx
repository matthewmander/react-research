import React from 'react'
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Root from './root';
import FeatureList from './feature-list'
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';
import {loadFromLocalStore} from './actions'

const loggerMiddleware = createLogger();

const engine = createEngine('react-research-ls');

const localStorageMiddleware = storage.createMiddleware(engine);

const createStoreWithMiddleware = applyMiddleware(
  loggerMiddleware, thunk, localStorageMiddleware
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

const load = storage.createLoader(engine);

load(store)
    .then((newState) => { 
      console.log('Loaded state:', newState);
      store.dispatch(loadFromLocalStore(newState))})
    .catch((ex) => console.log('Failed to load previous state' + ex));

render(
  <Provider store={store}>
    <Root></Root>
  </Provider>,
  document.getElementById('app-container')
);
