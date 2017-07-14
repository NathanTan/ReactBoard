import React from 'react';
import { render } from 'react-dom';
import Board from './Board';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Position from './Position';

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

const store = createStore(
  Position,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
//render(<Board />, document.getElementById('root'));

//@ts-check
render(
  <Provider store={store}>
    <Board />
  </Provider>,
  document.getElementById('root'),
);
