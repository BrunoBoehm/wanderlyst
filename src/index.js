import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import routes from './routes';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import rootReducer from './reducers';
import { fetchItineraries } from './actions'

const store = createStore(rootReducer, applyMiddleware(ReduxPromise));

store.dispatch( fetchItineraries() );

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
