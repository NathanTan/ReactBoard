import React from 'react';
import { render } from 'react-dom';
import Board from './components/Board.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Position from './reducers/Position.js';
import Inital from './reducers/Inital';

let store = null
console.log(typeof window !== 'undefined')

//Client side
if (typeof window !== 'undefined')
      store = createStore(
            Position,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      );

      //Server side 
else
      store = createStore(Inital)


//@ts-check
render(
      <Provider store={store}>
            <Board />
      </Provider>,
      document.getElementById('root'),
);

export default App;