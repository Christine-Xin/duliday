import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import { BrowserRouter } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <div style={{ fontSize: '.14rem' }}>
        {this.props.children}
      </div>
    )
  }
}
