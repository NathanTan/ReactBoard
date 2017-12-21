import React from 'react';
import { render } from 'react-dom';
import Board from './components/Board.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Position from './reducers/Position.jsx';



const store = createStore(
      Position,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      );

//@ts-check
render(
      <Provider store={store}>
      <Board />
      </Provider>,
      document.getElementById('root'),
      );

     // export default App;