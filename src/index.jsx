import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';

import { createStore} from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { combineReducers } from 'redux';
import history from './reducers/history-reducer';
import stepNumber from './reducers/step-number-reducer';
import xIsNext from './reducers/x-is-next-reducer';

const reducer = combineReducers({ history, stepNumber, xIsNext})

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
     <App />
   </HashRouter>
  </Provider>,
  document.getElementById('react-app-root')
);
