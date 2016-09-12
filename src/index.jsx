import React from 'react'
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Root from './root';
import FeatureList from './feature-list'
import { root as reducer } from './reducers';
import thunk from 'redux-thunk';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  loggerMiddleware, thunk
)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Root></Root>
  </Provider>,
  document.getElementById('app-container')
);
