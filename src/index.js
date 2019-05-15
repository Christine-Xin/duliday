import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import './amfe-flexible'
import { BrowserRouter } from 'react-router-dom'
import RootRouter from './router/Router.js'

localStorage.removeItem("goodsNum")
localStorage.removeItem("goodsObj")
localStorage.removeItem("addData")

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter>
    <RootRouter></RootRouter>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
