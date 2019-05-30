import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleWare } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleWare(thunk)))

const router = (
  // <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>
);

ReactDOM.render(router, document.getElementById('root'));

